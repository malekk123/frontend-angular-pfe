import { TestBed } from '@angular/core/testing';

import { CandrepService } from './candrep.service';

describe('CandrepService', () => {
  let service: CandrepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandrepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
