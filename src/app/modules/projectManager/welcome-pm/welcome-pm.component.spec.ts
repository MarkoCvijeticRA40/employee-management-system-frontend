import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePmComponent } from './welcome-pm.component';

describe('WelcomePmComponent', () => {
  let component: WelcomePmComponent;
  let fixture: ComponentFixture<WelcomePmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomePmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomePmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
