import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-project-manager-home',
  templateUrl: './project-manager-home.component.html',
  styleUrls: ['./project-manager-home.component.css'],
})
export class ProjectManagerHomeComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.userService.getById(5).subscribe((res) => {
      this.user = res;
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
}
