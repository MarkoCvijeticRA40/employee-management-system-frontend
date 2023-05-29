import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AccountService } from 'src/app/service/account-service.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-project-manager-profile',
  templateUrl: './project-manager-profile.component.html',
  styleUrls: ['./project-manager-profile.component.css'],
})
export class ProjectManagerProfileComponent implements OnInit {
  user: User = new User();

  constructor(
    private userService: UserService,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService
      .getById(this.accountService.currentUser.id)
      .subscribe((res) => {
        this.user = res;
      });
  }

  public editProfile() {
    if (this.validateForm()) {
      this.userService
        .editProjectManagerAccount(this.user.id, this.user)
        .subscribe((res) => {
          alert('Project manager account is edited!');
          this.router.navigateByUrl('/projectmanager/home');
        });
    } else {
      alert('Please, fill in all fields!');
    }
  }

  private validateForm(): boolean {
    if (
      this.user.email !== '' &&
      this.user.password !== '' &&
      this.user.name !== '' &&
      this.user.surname !== '' &&
      this.user.address.country !== '' &&
      this.user.address.city !== '' &&
      this.user.address.street !== '' &&
      this.user.address.number !== '' &&
      this.user.title !== '' &&
      this.user.phoneNum !== ''
    ) {
      return true;
    }
    return false;
  }
}
