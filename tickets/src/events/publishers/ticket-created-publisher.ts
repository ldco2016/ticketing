import { Publisher, Subjects, TicketCreatedEvent } from '@dc_microurb/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}