import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsReviewComponent } from './projects-review.component';

describe('ProjectsReviewComponent', () => {
  let component: ProjectsReviewComponent;
  let fixture: ComponentFixture<ProjectsReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
