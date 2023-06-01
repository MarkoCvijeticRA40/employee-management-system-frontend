import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AccountService } from 'src/app/service/account-service.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
})
export class ProfileInfoComponent implements OnInit {
  user: User = new User();

  constructor(
    private userService: UserService,
    private accountService: AccountService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.userService
      .getById(this.accountService.currentUser.id)
      .subscribe((res) => {
        this.user = res;
        this.user.startOfWork = new Date(this.user.startOfWork);
      });
  }

  public formatDate(date: any): string {
    if (date && Array.isArray(date) && date.length >= 5) {
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
}
