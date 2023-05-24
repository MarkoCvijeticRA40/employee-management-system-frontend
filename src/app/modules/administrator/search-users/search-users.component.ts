import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  startDate!: Date;
  endDate!: Date;
  email: string = '';
  name: string = '';
  lastname: string = '';

  user: User = new User();

  engineers: User[] = [];

  allEngineers: User[] = [];

  constructor(private userService: UserService, private router: Router, private datePipe: DatePipe) { }

  displayedColumns: string[] = ['name', 'lastname', 'email', 'date', 'addresses', 'phoneNum', 'title'];

  ngOnInit(): void {
    this.startDate = new Date();
    this.endDate = new Date();
    this.endDate.setDate(this.endDate.getDate() + 1);
    this.userService.findByRoleName("Software engineer").subscribe(res => {
      this.engineers = res;
        this.allEngineers = this.engineers;
    });
  }

  public search(): void {
    if (this.isEmailValid() && this.isNameValid() && this.isLastnameValid()) {
      alert("You must fill all fields!");
        this.engineers = this.allEngineers;
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (this.startDate >= today || this.endDate >= today) {
        // Both dates are in the future or today
        alert("Please select past dates for the date range.");
        this.engineers = this.allEngineers;
      } else {
        this.userService.searchEngineers(this.email, this.name, this.lastname, this.startDate.toString(), this.endDate.toString()).subscribe(res => {
          this.engineers = res;
            this.email = '';
            this.name = '';
            this.lastname = '';
            this.startDate = new Date();
            this.endDate = new Date();
        });
      }
    }
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

  formatDate(date: any): string {
    if (date && Array.isArray(date) && date.length >= 6) {
      const [year, month, day, hour, minute, second] = date;
      return new Date(year, month - 1, day, hour, minute, second).toDateString();
    }
    return '';
  }

  // Function to create a user
  createUser() {
    this.userService.registerUser(this.user).subscribe(res => {
      this.user = res;
    });
  }
}
