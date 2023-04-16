import { TestBed } from '@angular/core/testing';

import { BoardResolveService } from './board-resolve.service';

describe('BoardResolveService', () => {
  let service: BoardResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
