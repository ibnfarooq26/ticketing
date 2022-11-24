import { Publisher, Subjects, TicketUpdatedEvent } from "@marismu/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
