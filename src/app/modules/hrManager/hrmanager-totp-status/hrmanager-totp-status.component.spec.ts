import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmanagerTotpStatusComponent } from './hrmanager-totp-status.component';

describe('HrmanagerTotpStatusComponent', () => {
  let component: HrmanagerTotpStatusComponent;
  let fixture: ComponentFixture<HrmanagerTotpStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrmanagerTotpStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrmanagerTotpStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
