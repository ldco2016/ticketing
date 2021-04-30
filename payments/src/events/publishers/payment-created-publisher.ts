import { Subjects, Publisher, PaymentCreatedEvent } from '@dc_microurb/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
