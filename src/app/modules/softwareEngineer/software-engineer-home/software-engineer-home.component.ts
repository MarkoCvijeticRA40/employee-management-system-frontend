import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AccountService } from 'src/app/service/account-service.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-software-engineer-home',
  templateUrl: './software-engineer-home.component.html',
  styleUrls: ['./software-engineer-home.component.css']
})
export class SoftwareEngineerHomeComponent implements OnInit {

  currentUser : User = new User();

  constructor(private userService : UserService, private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    //hardkodovano dok ne uvedemo tokene,samo stavite da bude hr manager neki nece moci da pristupi zbog authguarda ili zakomentarisite authguard
    this.userService.getById(this.accountService.currentUser.id).subscribe(res => {
      this.currentUser = res;
    });
  }

  public home(){
    
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['login']);
  }
}
