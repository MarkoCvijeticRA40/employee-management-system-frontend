import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-manager-sidebar',
  templateUrl: './project-manager-sidebar.component.html',
  styleUrls: ['./project-manager-sidebar.component.css'],
})
export class ProjectManagerSidebarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
