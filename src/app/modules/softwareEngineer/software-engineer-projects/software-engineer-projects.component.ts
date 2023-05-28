import { Component, OnInit } from '@angular/core';
import { ProjectUserAssignment } from 'src/app/model/projectUserAssignment';
import { ProjectUserAssignmentService } from 'src/app/service/project-user-assignment.service';

@Component({
  selector: 'app-software-engineer-projects',
  templateUrl: './software-engineer-projects.component.html',
  styleUrls: ['./software-engineer-projects.component.css'],
})
export class SoftwareEngineerProjectsComponent implements OnInit {
  projects: any[] = [];
  flag: boolean = false;
  project: ProjectUserAssignment = new ProjectUserAssignment();

  constructor(
    private projectUserAssignmentService: ProjectUserAssignmentService
  ) {}

  ngOnInit(): void {
    this.projectUserAssignmentService.findByUserId(1).subscribe((res) => {
      this.projects = res.payload.ArrayList;
    });
  }

  public formatDate(date: any): string {
    if (date && Array.isArray(date) && date.length >= 6) {
      const [year, month, day, hour, minute, second] = date;
      return new Date(
        year,
        month - 1,
        day,
        hour,
        minute,
        second
      ).toDateString();
    }
    return '';
  }

  public editDescription(project: any) {
    this.project.id = project.id;
    this.project.user = project.user;
    this.project.project = project.project;
    this.project.workDescription = project.workDescription;
    this.project.startOfWork = project.startOfWork;
    this.project.endOfWork = project.endOfWork;
    this.flag = true;
  }

  public updateDescription() {
    this.projectUserAssignmentService
      .updateProject(this.project.id, this.project)
      .subscribe((res) => {
        this.projectUserAssignmentService.findByUserId(1).subscribe((res) => {
          this.projects = res.payload.ArrayList;
        });
        alert('Project is edited succesfully!');
        this.flag = false;
      });
  }
}
