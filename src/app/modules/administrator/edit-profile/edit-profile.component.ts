import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private router: Router,private userService : UserService) { }

  currentUser : User = new User();

  ngOnInit(): void {
    this.userService.getById(8).subscribe(res => {
      this.currentUser = res;
    });
  }

  public ChangePassword() {
    this.router.navigate(['administrator/change/password']);
  }

  public updateUser() {
    this.userService.updateUser(this.currentUser).subscribe(res => {
      this.currentUser = res;
        alert("User profile successfully updated.");
    });
  }
}
