import { NotFoundEError } from "@marismu/common";
import express, { Request, Response } from "express";
import { Ticket } from "../../models/ticket";
const router = express.Router();
router.get("/api/tickets/:id", async (req: Request, res: Response) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    throw new NotFoundEError();
  }
  res.send(ticket);
});

export { router as showTicketRouter };
