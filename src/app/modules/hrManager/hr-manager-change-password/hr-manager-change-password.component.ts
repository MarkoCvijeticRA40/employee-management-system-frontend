import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AccountService } from 'src/app/service/account-service.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-hr-manager-change-password',
  templateUrl: './hr-manager-change-password.component.html',
  styleUrls: ['./hr-manager-change-password.component.css']
})
export class HrManagerChangePasswordComponent implements OnInit {

  constructor(private userService : UserService,private router : Router, private accountService: AccountService) { }

  currentUser : User = new User();

  public password: string = '';

  public confirmationPass: string = '';

  ngOnInit(): void {
    this.userService.getById(this.accountService.currentUser.id).subscribe(res => {
      this.currentUser = res;
    });
  }

  public UpdatePassword() {
    if (this.isInputValid()) {
      if (this.isPassConfirmed()) {
        this.currentUser.password = this.password;
        this.userService.updateUser(this.currentUser).subscribe(res => {
          alert("You have changed password successfully!");
            this.GoBack();
        }) 
      } 
      else {
        alert("Passwords are different!");
        this.confirmationPass = '';
        this.password = '';
      }
    }
    else {
      alert("Input is not in valid format!");
      this.confirmationPass = '';
      this.password = '';
      }
  }

  public GoBack() {
    this.router.navigate(['/hrmanager/edit-profile']);
  }

  private isInputValid(): boolean {
    return this.password != ''
         && this.confirmationPass != '';
  }

  private isPassConfirmed(): boolean {
    return this.password === this.confirmationPass;
  }
  
  requiredPasswordControl = new FormControl('', [
    Validators.required,
  ]);

  requiredConfirmationPasswordControl = new FormControl('', [
    Validators.required,
  ])
}
