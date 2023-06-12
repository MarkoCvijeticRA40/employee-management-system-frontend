import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrManagerEditProfileComponent } from './hr-manager-edit-profile.component';

describe('HrManagerEditProfileComponent', () => {
  let component: HrManagerEditProfileComponent;
  let fixture: ComponentFixture<HrManagerEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrManagerEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrManagerEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
