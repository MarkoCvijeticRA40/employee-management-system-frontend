import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerSidebarComponent } from './project-manager-sidebar.component';

describe('ProjectManagerSidebarComponent', () => {
  let component: ProjectManagerSidebarComponent;
  let fixture: ComponentFixture<ProjectManagerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagerSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
