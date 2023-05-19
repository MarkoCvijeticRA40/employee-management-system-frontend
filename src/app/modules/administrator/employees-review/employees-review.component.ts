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

  displayedColumns: string[] = ['name', 'lastname', 'email', 'date', 'addresses', 'phoneNum', 'title', 'roleNames'];

  ngOnInit(): void {
    this.userService.getEnabled().subscribe(res => {
      this.employees = res;
    });
  }

   // Function for formatting the date
   formatDate(date: string): string {
    const formattedDate = new Date(date);
    return this.datePipe.transform(formattedDate, 'dd/MM/yyyy') || '';
  }

}
