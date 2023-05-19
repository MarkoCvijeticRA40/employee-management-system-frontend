import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareEngineerHomeComponent } from './software-engineer-home.component';

describe('SoftwareEngineerHomeComponent', () => {
  let component: SoftwareEngineerHomeComponent;
  let fixture: ComponentFixture<SoftwareEngineerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareEngineerHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
