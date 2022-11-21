import { Publisher, Subjects, TicketCreatedEvent } from "@marismu/common";
export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
