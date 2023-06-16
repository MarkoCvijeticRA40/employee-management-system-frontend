import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AccountService } from 'src/app/service/account-service.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-administrator-totp-status',
  templateUrl: './administrator-totp-status.component.html',
  styleUrls: ['./administrator-totp-status.component.css']
})
export class AdministratorTotpStatusComponent implements OnInit {

  currentUser : User = new User();

  constructor(private userService : UserService,private accountService: AccountService) { }

  ngOnInit(): void {
    this.userService.getById(this.accountService.currentUser.id).subscribe(res => {
      this.currentUser = res;
    });
  }

  public updateUser() {
    this.userService.updateUser(this.currentUser).subscribe(res => {
      alert("You have successfully changed your TOTP status!");
    });
  }

  



}
