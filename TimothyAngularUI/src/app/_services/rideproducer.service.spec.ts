import { TestBed } from '@angular/core/testing';

import { RideproducerService } from './rideproducer.service';

describe('RideproducerService', () => {
  let service: RideproducerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RideproducerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
