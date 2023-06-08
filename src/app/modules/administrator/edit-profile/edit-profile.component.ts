import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AccountService } from 'src/app/service/account-service.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private router: Router,private userService : UserService, private accountService: AccountService) { }

  currentUser : User = new User();

  ngOnInit(): void {
    this.userService.getById(this.accountService.currentUser.id).subscribe(res => {
      this.currentUser = res;
    });
  }

  isEmpty(value: any): boolean {
    return value === null || value === undefined || value === '';
  }

  public ChangePassword() {
    this.router.navigate(['/administrator/change/password']);
  }

  public updateUser() {
    if (this.isEmpty(this.currentUser.email) ||
        this.isEmpty(this.currentUser.name) ||
        this.isEmpty(this.currentUser.surname) ||
        this.isEmpty(this.currentUser.address.street) ||
        this.isEmpty(this.currentUser.address.number) ||
        this.isEmpty(this.currentUser.address.city) ||
        this.isEmpty(this.currentUser.address.country) ||
        this.isEmpty(this.currentUser.phoneNum) ||
        this.isEmpty(this.currentUser.title)) {
      alert('Please fill in all fields.');
      return;
    } else {
      this.userService.updateUser(this.currentUser).subscribe(res => {
        this.currentUser = res;
        alert("User profile successfully updated.");
        this.userService.getById(this.accountService.currentUser.id).subscribe(updatedUser => {
          this.currentUser = updatedUser;
        });
      }, error => {
        alert("Failed to update user profile.");
      });
    }
  }
  
}
