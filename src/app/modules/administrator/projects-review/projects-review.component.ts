import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { User } from 'src/app/model/user';
import { ProjectService } from 'src/app/service/project.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-projects-review',
  templateUrl: './projects-review.component.html',
  styleUrls: ['./projects-review.component.css']
})
export class ProjectsReviewComponent implements OnInit {

  constructor(private projectService: ProjectService, private userService: UserService) { }

  projects: Project[] = [];
  employees: User[] = [];
  displayedColumns: string[] = ['name', 'duration', 'users', 'actions'];
  selectedProject: Project | null = null;
  selectedUsers: User[] = [];

  ngOnInit(): void {
    this.projectService.findAll().subscribe(res => {
      this.projects = res;
    });
    this.userService.getAllPotentialWorkers().subscribe(res => {
      this.employees = res;
    });
  }

  getUsersNotInProject(employees: User[], projectUsers: User[]): User[] {
    return employees.filter((employee: User) => !projectUsers.some((user: User) => user.id === employee.id));
  }
  
  addUsersToProject(users: User[], project: Project): void {
    project.users.push(...users);
    this.selectedUsers = [];
    this.projectService.updateProject(project).subscribe(res => {
      alert("Project successfully updated.");
    });
  }
}  