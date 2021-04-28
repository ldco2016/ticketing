import { Publisher, Subjects, TicketUpdatedEvent } from '@dc_microurb/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}