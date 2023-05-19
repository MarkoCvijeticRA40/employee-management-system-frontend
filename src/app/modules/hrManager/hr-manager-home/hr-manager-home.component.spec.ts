import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrManagerHomeComponent } from './hr-manager-home.component';

describe('HrManagerHomeComponent', () => {
  let component: HrManagerHomeComponent;
  let fixture: ComponentFixture<HrManagerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrManagerHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrManagerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
