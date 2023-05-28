import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../login/login.component';
import { AccountService } from 'src/app/service/account-service.service';

@Component({
  selector: 'app-paswordless-login',
  templateUrl: './paswordless-login.component.html',
  styleUrls: ['./paswordless-login.component.css']
})
export class PaswordlessLoginComponent implements OnInit {
  public email: string = '';

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public login() {
    if (this.email !== '') {
      this.accountService.loginWithoutPassword(this.email).subscribe(res => {
        alert("Click on the link that we emailed to you in next 10 minutes");
      })
    }
    else {
      alert("Enter your email address!");
    }
  }


  matcher = new MyErrorStateMatcher();

}
