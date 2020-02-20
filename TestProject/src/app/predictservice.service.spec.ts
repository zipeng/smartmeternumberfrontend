import { TestBed } from '@angular/core/testing';

import { PredictserviceService } from './predictservice.service';

describe('PredictserviceService', () => {
  let service: PredictserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredictserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
