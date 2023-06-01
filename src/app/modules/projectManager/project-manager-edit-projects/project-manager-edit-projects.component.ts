import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectUserAssignmentDTO } from 'src/app/dto/projectUserAssignmentDTO';
import { AccountService } from 'src/app/service/account-service.service';
import { ProjectUserAssignmentService } from 'src/app/service/project-user-assignment.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-project-manager-edit-projects',
  templateUrl: './project-manager-edit-projects.component.html',
  styleUrls: ['./project-manager-edit-projects.component.css'],
})
export class ProjectManagerEditProjectsComponent implements OnInit {
  projectUserAssignment: ProjectUserAssignmentDTO =
    new ProjectUserAssignmentDTO();
  projects: any[] = [];
  employees: any[] = [];
  potentialEngineers: any[] = [];
  alreadyEngineers: any[] = [];
  engineers: any[] = [];
  projectName: string = '';
  flag: boolean = false;
  flagEngineer: boolean = true;

  constructor(
    private projectUserAssignmentService: ProjectUserAssignmentService,
    private userService: UserService,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectUserAssignmentService
      .findByUserId(this.accountService.currentUser.id)
      .subscribe((res) => {
        this.projects = res.payload.ArrayList;
        this.convertDate();
      });

    this.userService.getAllPotentialWorkers().subscribe((res) => {
      this.employees = res;
      for (var employee of this.employees) {
        if (employee.roleNames.includes('Software engineer')) {
          this.potentialEngineers.push(employee);
        }
      }
    });
  }

  private convertDate() {
    for (var project of this.projects) {
      project.startOfWork = new Date(project.startOfWork);
      project.endOfWork = new Date(project.endOfWork);
    }
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

  public addEngineer(project: any) {
    this.projectUserAssignmentService
      .findByProjectId(project.id)
      .subscribe((res) => {
        for (var engineer of res.payload.ArrayList) {
          if (engineer.user.roleNames.includes('Software engineer')) {
            this.alreadyEngineers.push(engineer);
          }
        }
        this.filterEngineers();
      });
    this.projectUserAssignment.projectId = project.id;
    this.projectName = project.name;
    this.flag = true;
  }

  private filterEngineers() {
    for (var potentialEngineer of this.potentialEngineers) {
      this.flagEngineer = true;
      for (var alreadyEngineer of this.alreadyEngineers) {
        if (potentialEngineer.id === alreadyEngineer.user.id) {
          this.flagEngineer = false;
          break;
        }
      }
      if (this.flagEngineer === true) {
        this.engineers.push(potentialEngineer);
      }
    }
  }

  public addEngineerToProject() {
    if (this.validateForm()) {
      this.projectUserAssignmentService
        .addEngineer(this.projectUserAssignment)
        .subscribe((res) => {
          alert('Software engineer is added successfully!');
          this.router.navigateByUrl('/projectmanager/projects');
        });
    }
  }

  private validateForm(): boolean {
    if (
      this.projectUserAssignment.userId !== 0 &&
      this.projectUserAssignment.projectId !== 0 &&
      this.projectUserAssignment.workDescription !== '' &&
      this.projectUserAssignment.startOfWork !== new Date() &&
      this.projectUserAssignment.endOfWork !== new Date()
    ) {
      return true;
    }
    return false;
  }
}
