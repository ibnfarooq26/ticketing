import express, { Request, Response } from "express";
import { body } from "express-validator";
import {
  AuthError,
  NotFoundEError,
  requireAuth,
  validateRequest,
} from "@marismu/common";
import { Ticket } from "../../models/ticket";

const router = express.Router();
router.put(
  "/api/tickets/:id",
  requireAuth,
  [
    body("title").not().isEmpty().withMessage("Title must not be empty"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must not be empty nor is it to be negative"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, price } = req.body;
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      throw new NotFoundEError();
    }
    if (ticket.userId !== req.currentUser!.id) {
      throw new AuthError();
    }
    ticket.set({
      title,
      price,
    });
    await ticket.save();

    res.send(ticket);
  }
);

export { router as updateTicketRouter };
