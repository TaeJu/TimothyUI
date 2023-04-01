import { TestBed } from '@angular/core/testing';

import { UserBoardServiceService } from './user-board-service.service';

describe('UserBoardServiceService', () => {
  let service: UserBoardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBoardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
