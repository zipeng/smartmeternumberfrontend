import { TestBed } from '@angular/core/testing';

import { FetchwrongnumberserviceService } from './fetchwrongnumberservice.service';

describe('FetchwrongnumberserviceService', () => {
  let service: FetchwrongnumberserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchwrongnumberserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
