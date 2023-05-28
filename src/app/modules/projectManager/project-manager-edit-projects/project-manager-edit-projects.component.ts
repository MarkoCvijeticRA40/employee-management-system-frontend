import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectUserAssignmentDTO } from 'src/app/dto/projectUserAssignmentDTO';
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
  engineers: any[] = [];
  projectName: string = '';
  flag: boolean = false;

  constructor(
    private projectUserAssignmentService: ProjectUserAssignmentService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectUserAssignmentService.findByUserId(5).subscribe((res) => {
      this.projects = res.payload.ArrayList;
    });

    this.userService.getAllPotentialWorkers().subscribe((res) => {
      this.employees = res;
      for (var employee of this.employees) {
        if (employee.roleNames.includes('Software engineer')) {
          this.engineers.push(employee);
        }
      }
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

  public addEngineer(project: any) {
    this.projectUserAssignment.projectId = project.id;
    this.projectName = project.name;
    this.flag = true;
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
