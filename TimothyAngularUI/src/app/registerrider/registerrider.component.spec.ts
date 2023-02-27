import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterriderComponent } from './registerrider.component';

describe('RegisterriderComponent', () => {
  let component: RegisterriderComponent;
  let fixture: ComponentFixture<RegisterriderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterriderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterriderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
