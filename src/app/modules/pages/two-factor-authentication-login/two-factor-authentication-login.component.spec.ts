import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFactorAuthenticationLoginComponent } from './two-factor-authentication-login.component';

describe('TwoFactorAuthenticationLoginComponent', () => {
  let component: TwoFactorAuthenticationLoginComponent;
  let fixture: ComponentFixture<TwoFactorAuthenticationLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoFactorAuthenticationLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoFactorAuthenticationLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
