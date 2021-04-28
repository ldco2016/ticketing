import { Subjects, Publisher, OrderCancelledEvent } from '@dc_microurb/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}