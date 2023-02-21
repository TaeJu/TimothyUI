import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidereqeustComponent } from './ridereqeust.component';

describe('RidereqeustComponent', () => {
  let component: RidereqeustComponent;
  let fixture: ComponentFixture<RidereqeustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RidereqeustComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RidereqeustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
