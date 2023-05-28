import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareEngineerProjectsComponent } from './software-engineer-projects.component';

describe('SoftwareEngineerProjectsComponent', () => {
  let component: SoftwareEngineerProjectsComponent;
  let fixture: ComponentFixture<SoftwareEngineerProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareEngineerProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineerProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
