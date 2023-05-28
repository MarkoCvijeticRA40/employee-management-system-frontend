import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/service/account-service.service';

@Component({
  selector: 'app-welcome-pm',
  templateUrl: './welcome-pm.component.html',
  styleUrls: ['./welcome-pm.component.css']
})
export class WelcomePmComponent implements OnInit {

  accessToken: any  = '';
  refreshToken: any  = '';
  email: any = '';

  constructor(private route: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.accessToken = params.get('ajwt') || '';
      this.refreshToken = params.get('rjwt') || '';
      this.email = params.get('email');
      localStorage.setItem('jwt', this.accessToken || '');
      localStorage.setItem('rjwt', this.refreshToken || '');
      this.accountService.getMyInfo(this.email).subscribe(res => {
        this.accountService.currentUser = res.payload.User;
        localStorage.setItem('loggedUser', JSON.stringify(res.payload.User));
      });

    });
  
  }

}
