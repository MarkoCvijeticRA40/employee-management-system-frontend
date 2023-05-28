import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerProfileComponent } from './project-manager-profile.component';

describe('ProjectManagerProfileComponent', () => {
  let component: ProjectManagerProfileComponent;
  let fixture: ComponentFixture<ProjectManagerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagerProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
