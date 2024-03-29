import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-employees-review',
  templateUrl: './employees-review.component.html',
  styleUrls: ['./employees-review.component.css']
})
export class EmployeesReviewComponent implements OnInit {

  employees: User[] = [];

  constructor(private userService: UserService, private router: Router, private datePipe: DatePipe) { }

  displayedColumns: string[] = ['name', 'lastname', 'email', 'addresses', 'phoneNum', 'title', 'roleNames', 'actions'];

  ngOnInit(): void {
    this.userService.getWithStartDate().subscribe(res => {
      this.employees = res;
    });
  }

  formatDate(date: any): string {
    if (date && Array.isArray(date) && date.length >= 6) {
      const [year, month, day, hour, minute, second] = date;
      return new Date(year, month - 1, day, hour, minute, second).toDateString();
    }
    return '';
  }

  blockEmployee(employee: User) {
    employee.accountEnabled = false;
    this.userService.block(employee).subscribe(
      res => {
        alert("User profile successfully blocked.");
      },
      error => {
        alert("Failed to block user profile.");
      }
    );
  }
  
  unblockEmployee(employee: User) {
    employee.accountEnabled = true;
    this.userService.unblock(employee).subscribe(
      res => {
        alert("User profile successfully unblocked.");
      },
      error => {
        alert("Failed to unblock user profile.");
      }
    );
  }
}
