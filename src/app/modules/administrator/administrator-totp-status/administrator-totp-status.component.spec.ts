import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorTotpStatusComponent } from './administrator-totp-status.component';

describe('AdministratorTotpStatusComponent', () => {
  let component: AdministratorTotpStatusComponent;
  let fixture: ComponentFixture<AdministratorTotpStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorTotpStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorTotpStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
