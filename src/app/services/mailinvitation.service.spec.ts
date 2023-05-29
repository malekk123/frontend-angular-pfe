import { TestBed } from '@angular/core/testing';

import { MailinvitationService } from './mailinvitation.service';

describe('MailinvitationService', () => {
  let service: MailinvitationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailinvitationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
