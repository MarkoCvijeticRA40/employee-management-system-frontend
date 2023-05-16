import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  startDate!: Date;
  endDate!: Date;
  maxDate!:string;

  email: string = '';
  name: string = '';
  lastname: string = '';

  displayedColumns: string[] = ['name', 'lastname', 'email', 'date', 'addresses', 'phoneNum', 'title'];

  ngOnInit(): void {
    this.startDate = new Date();
    this.endDate = new Date();
    this.endDate.setDate(this.endDate.getDate() + 1);
    this.maxDate = formatDate(this.endDate, 'yyyy-MM-dd', 'en');
  }

  private isEmailValid(): boolean {
    return this.email === '';
  }

  private isNameValid(): boolean {
    return this.name === '';
  }

  private isLastnameValid(): boolean {
    return this.lastname === '';
  }

  public search(): void {
    if (this.isEmailValid() && this.isNameValid() && this.isLastnameValid()) {
      alert("You must fill all fields!");
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
  
      if (this.startDate >= today || this.endDate >= today) {
        // Both dates are in the future or today
        alert("Please select past dates for the date range.");
      } else {
        // Perform search logic or call your desired function
        // when both dates are in the past
        // ...
      }
    }
  }
}
