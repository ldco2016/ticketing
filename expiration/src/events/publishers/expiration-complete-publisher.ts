import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@dc_microurb/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
