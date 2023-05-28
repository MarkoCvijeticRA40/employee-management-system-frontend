import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaswordlessLoginComponent } from './paswordless-login.component';

describe('PaswordlessLoginComponent', () => {
  let component: PaswordlessLoginComponent;
  let fixture: ComponentFixture<PaswordlessLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaswordlessLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaswordlessLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
