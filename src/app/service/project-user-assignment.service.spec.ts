import { TestBed } from '@angular/core/testing';

import { ProjectUserAssignmentService } from './project-user-assignment.service';

describe('ProjectUserAssignmentService', () => {
  let service: ProjectUserAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectUserAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
