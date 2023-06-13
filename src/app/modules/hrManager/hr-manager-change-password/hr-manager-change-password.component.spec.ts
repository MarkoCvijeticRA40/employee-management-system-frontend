import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrManagerChangePasswordComponent } from './hr-manager-change-password.component';

describe('HrManagerChangePasswordComponent', () => {
  let component: HrManagerChangePasswordComponent;
  let fixture: ComponentFixture<HrManagerChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrManagerChangePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrManagerChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
