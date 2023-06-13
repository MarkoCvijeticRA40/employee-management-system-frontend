import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AccountService } from 'src/app/service/account-service.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  email : String = '';

  constructor(private userService : UserService,private accountService : AccountService) { }

  ngOnInit(): void {
    
  }
  
  submitForgotPassword(): void {
    if (this.emailFormControl.invalid) {
      alert('Please enter a valid email!');
      return;
    } else {
      this.accountService.forgotPassword(this.email).subscribe(res => {
        alert("Go check your email!");
      });
    }
  }
}
