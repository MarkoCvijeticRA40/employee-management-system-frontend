import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-project-manager-home',
  templateUrl: './project-manager-home.component.html',
  styleUrls: ['./project-manager-home.component.css']
})
export class ProjectManagerHomeComponent implements OnInit {

  currentUser : User = new User();

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    //hardkodovano dok ne uvedemo tokene,samo stavite da bude hr manager neki nece moci da pristupi zbog authguarda ili zakomentarisite authguard
    this.userService.getById(16).subscribe(res => {
      this.currentUser = res;
    });
  }

}
