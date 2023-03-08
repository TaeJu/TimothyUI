import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderBoardComponent } from './rider-board.component';

describe('RiderBoardComponent', () => {
  let component: RiderBoardComponent;
  let fixture: ComponentFixture<RiderBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiderBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
