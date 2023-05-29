import { TestBed } from '@angular/core/testing';

import { CandidatexamService } from './candidatexam.service';

describe('CandidatexamService', () => {
  let service: CandidatexamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatexamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
