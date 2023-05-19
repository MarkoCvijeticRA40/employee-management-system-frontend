import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-software-engineer-home',
  templateUrl: './software-engineer-home.component.html',
  styleUrls: ['./software-engineer-home.component.css']
})
export class SoftwareEngineerHomeComponent implements OnInit {

  currentUser : User = new User();

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    //hardkodovano dok ne uvedemo tokene,samo stavite da bude hr manager neki nece moci da pristupi zbog authguarda ili zakomentarisite authguard
    this.userService.getById(18).subscribe(res => {
      this.currentUser = res;
    });
  }
}
