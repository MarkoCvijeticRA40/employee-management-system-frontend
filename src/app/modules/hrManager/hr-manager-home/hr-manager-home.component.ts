import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-hr-manager-home',
  templateUrl: './hr-manager-home.component.html',
  styleUrls: ['./hr-manager-home.component.css']
})
export class HrManagerHomeComponent implements OnInit {

  currentUser : User = new User();

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    //hardkodovano dok ne uvedemo tokene,samo stavite da bude hr manager neki nece moci da pristupi zbog authguarda ili zakomentarisite authguard
    this.userService.getById(19).subscribe(res => {
      this.currentUser = res;
    });
  }

}
