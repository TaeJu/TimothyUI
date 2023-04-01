import { TestBed } from '@angular/core/testing';

import { RiderResolveService } from './rider-resolve.service';

describe('RiderResolveService', () => {
  let service: RiderResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiderResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
