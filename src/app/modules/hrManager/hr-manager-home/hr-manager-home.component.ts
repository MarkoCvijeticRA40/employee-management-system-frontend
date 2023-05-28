import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AccountService } from 'src/app/service/account-service.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-hr-manager-home',
  templateUrl: './hr-manager-home.component.html',
  styleUrls: ['./hr-manager-home.component.css']
})
export class HrManagerHomeComponent implements OnInit {

  currentUser : User = new User();

  constructor(private userService : UserService, private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    //hardkodovano dok ne uvedemo tokene,samo stavite da bude hr manager neki nece moci da pristupi zbog authguarda ili zakomentarisite authguard
    this.userService.getById(this.accountService.currentUser.id).subscribe(res => {
      this.currentUser = res;
    });
  }

  public home(){
    this.ngOnInit();
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['login'])
  }

}
