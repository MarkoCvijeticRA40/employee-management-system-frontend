import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSeComponent } from './welcome-se.component';

describe('WelcomeSeComponent', () => {
  let component: WelcomeSeComponent;
  let fixture: ComponentFixture<WelcomeSeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeSeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
