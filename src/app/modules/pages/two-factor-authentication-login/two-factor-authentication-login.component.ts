import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TwoFactorAuthenticationLoginData } from 'src/app/model/two-factor-authentication-login';
import { AccountService } from 'src/app/service/account-service.service';
import { MyErrorStateMatcher } from '../login/login.component';

@Component({
  selector: 'app-two-factor-authentication-login',
  templateUrl: './two-factor-authentication-login.component.html',
  styleUrls: ['./two-factor-authentication-login.component.css']
})
export class TwoFactorAuthenticationLoginComponent implements OnInit {

  public data: TwoFactorAuthenticationLoginData = new TwoFactorAuthenticationLoginData();
  public currentUser: any;

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  public login() {
    this.accountService.login(this.data).subscribe(res => {
      console.log(res);
      this.accountService.getMyInfo(this.data.email).subscribe(res => {
        this.accountService.currentUser = res.payload.User;
        this.accountService.role = res.payload.User.roleNames[0];
        this.currentUser = res.payload.User;
        localStorage.setItem('role', res.payload.User.roleNames[0]);
        localStorage.setItem('loggedUser', JSON.stringify(this.currentUser));    
        if (this.currentUser.roleNames[0] === 'Administrator') {
            this.router.navigate(['administrator']);
        }
        else if (this.currentUser.roleNames[0] === 'Software engineer') {
            this.router.navigate(['softwareengineer']);
        }
        else if (this.currentUser.roleNames[0] === 'Project manager') {
          this.router.navigate(['projectmanager']);
        }        
        else if (this.currentUser.roleNames[0] === 'HR manager') {
          this.router.navigate(['hrmanager']);
        }  
      });
    },
    error => {
      alert("Incorrect username or password");
    }) 
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  requiredPasswordControl = new FormControl('', [
    Validators.required,
  ]);

  twoFactorFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(6),
  ]);

  matcher = new MyErrorStateMatcher();
}
