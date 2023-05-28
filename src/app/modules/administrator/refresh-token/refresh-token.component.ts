import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RefreshTokenRequest } from 'src/app/model/refresh-token-request.model';
import { AccountService } from 'src/app/service/account-service.service';
import { MyErrorStateMatcher } from '../../pages/login/login.component';

@Component({
  selector: 'app-refresh-token',
  templateUrl: './refresh-token.component.html',
  styleUrls: ['./refresh-token.component.css']
})
export class RefreshTokenComponent implements OnInit {

  constructor(private accountService: AccountService) { }
  refreshToken: any = '';

  ngOnInit(): void {
  }

  refresh() {
    this.accountService.refreshToken(this.refreshToken).subscribe(res => {
      if (res.report.valid) {
        localStorage.setItem('ajwt', res.payload.AuthenticationResponse.access_token);
        localStorage.setItem('rjwt', res.payload.AuthenticationResponse.refresh_token);
        alert("token is refreshed");
      }
    },
    error => {
      alert("Invalid token");
    });
  }

  tokenFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

}
