import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareEngineerProfileComponent } from './software-engineer-profile.component';

describe('SoftwareEngineerProfileComponent', () => {
  let component: SoftwareEngineerProfileComponent;
  let fixture: ComponentFixture<SoftwareEngineerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareEngineerProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
