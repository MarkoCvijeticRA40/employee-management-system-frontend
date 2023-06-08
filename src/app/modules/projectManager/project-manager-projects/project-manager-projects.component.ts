import { Component, OnInit } from '@angular/core';
import { ProjectUserAssignment } from 'src/app/model/projectUserAssignment';
import { AccountService } from 'src/app/service/account-service.service';
import { ProjectUserAssignmentService } from 'src/app/service/project-user-assignment.service';

@Component({
  selector: 'app-project-manager-projects',
  templateUrl: './project-manager-projects.component.html',
  styleUrls: ['./project-manager-projects.component.css'],
})
export class ProjectManagerProjectsComponent implements OnInit {
  projects: any[] = [];
  engineers: any[] = [];

  constructor(
    private projectUserAssignmentService: ProjectUserAssignmentService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.projectUserAssignmentService
      .findByUserId(this.accountService.currentUser.id)
      .subscribe((res) => {
        this.projects = res.payload.ArrayList;
        this.convertDate();
        this.findEngineers();
      });
  }

  private convertDate() {
    for (var project of this.projects) {
      project.startOfWork = new Date(project.startOfWork);
      project.endOfWork = new Date(project.endOfWork);
    }
  }

  public formatDate(date: any): string {
    if (date && Array.isArray(date) && date.length >= 5) {
      const [year, month, day, hour, minute] = date;
      return new Date(year, month - 1, day, hour, minute).toDateString();
    }
    return '';
  }

  public findEngineers() {
    for (var project of this.projects) {
      this.findProjectEngineers(project);
    }
  }

  private findProjectEngineers(project: any) {
    this.projectUserAssignmentService
      .findByProjectId(project.project.id)
      .subscribe((res) => {
        for (var engineer of res.payload.ArrayList) {
          if (engineer.user.roleNames.includes('Software engineer')) {
            this.engineers.push(engineer);
          }
        }
      });
  }

  public deleteEngineer(id: any) {
    this.projectUserAssignmentService.deleteEngineer(id).subscribe((res) => {
      alert('Engineer is deleted succesfully!');
      window.location.reload();
    });
  }
}
