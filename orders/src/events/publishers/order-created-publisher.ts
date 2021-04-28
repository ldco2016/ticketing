import { Publisher, OrderCreatedEvent, Subjects } from '@dc_microurb/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}