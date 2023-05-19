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

  constructor(private projectService : ProjectService,private userService : UserService) { }

  projects : Project[] = [];

  employees : User[] = [];

  displayedColumns: string[] = ['name', 'lastname', 'email', 'actions'];

  ngOnInit(): void {
    this.projectService.findAll().subscribe(res => {
      this.projects = res;
    });
    this.userService.getEmployees().subscribe(res => {
      this.employees = res;
    });
  }

  getUsersNotInProject(all: User[], projectUsers: User[]): User[] {
    // Filter the users from 'all' list that are not present in 'projectUsers' list
    const usersNotInProject = all.filter(user => !projectUsers.some(projectUser => projectUser.id === user.id));
  
    return usersNotInProject;
  }

}
