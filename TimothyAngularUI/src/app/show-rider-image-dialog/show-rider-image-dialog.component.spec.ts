import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRiderImageDialogComponent } from './show-rider-image-dialog.component';

describe('ShowRiderImageDialogComponent', () => {
  let component: ShowRiderImageDialogComponent;
  let fixture: ComponentFixture<ShowRiderImageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRiderImageDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRiderImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
