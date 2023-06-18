import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNotificationsComponent } from './new-notifications.component';

describe('NewNotificationsComponent', () => {
  let component: NewNotificationsComponent;
  let fixture: ComponentFixture<NewNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
