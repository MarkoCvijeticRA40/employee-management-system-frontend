import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { User } from 'src/app/model/user';
import { ProjectService } from 'src/app/service/project.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  constructor(
    private userService: UserService,
    private projectService: ProjectService
  ) {}

  project: Project = new Project();

  employees: User[] = [];

  ngOnInit(): void {
    this.userService.getAllPotentialWorkers().subscribe((res) => {
      this.employees = res;
    });
  }

  create() {
    this.projectService.createProject(this.project).subscribe((res) => {
      if (res.report.valid == true) {
        alert('Project successfully created.');
        this.project = new Project();
      } else {
        alert("You have not successfully created a project.");
      }
    });
  }  
}
