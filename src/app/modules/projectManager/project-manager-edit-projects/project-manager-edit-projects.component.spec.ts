import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerEditProjectsComponent } from './project-manager-edit-projects.component';

describe('ProjectManagerEditProjectsComponent', () => {
  let component: ProjectManagerEditProjectsComponent;
  let fixture: ComponentFixture<ProjectManagerEditProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagerEditProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagerEditProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
