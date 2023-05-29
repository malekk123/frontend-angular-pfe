import { TestBed } from '@angular/core/testing';

import { CandidatmailService } from './candidatmail.service';

describe('CandidatmailService', () => {
  let service: CandidatmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
