import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareEngineerTotpStatusComponent } from './software-engineer-totp-status.component';

describe('SoftwareEngineerTotpStatusComponent', () => {
  let component: SoftwareEngineerTotpStatusComponent;
  let fixture: ComponentFixture<SoftwareEngineerTotpStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareEngineerTotpStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineerTotpStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
