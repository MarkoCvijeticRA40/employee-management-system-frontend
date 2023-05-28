import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/model/login-data.model';
import { AccountService } from 'src/app/service/account-service.service';
import { UserService } from 'src/app/service/user.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public data: LoginData = new LoginData();
  public currentUser: any;

  
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  public login() {
    this.accountService.login(this.data).subscribe(res => {
      console.log(res);
      this.accountService.getMyInfo(this.data.email).subscribe(res => {
        this.accountService.currentUser = res.payload.User;
        this.currentUser = res.payload.User;
        localStorage.setItem('loggedUser', JSON.stringify(this.currentUser));   
        if (this.currentUser.roleNames[0] === 'Administrator') {
            //this.router.navigate(['regular-user/flight-search']);
            alert("Administrator")
        }
        else if (this.currentUser.roleNames[0] === 'Software engineer') {
            //this.router.navigate(['admin']);
            alert("Software engineer")
        }
        else if (this.currentUser.roleNames[0] === 'Project manager') {
          //this.router.navigate(['admin']);
          alert("Project manager")
        }        
        else if (this.currentUser.role.name === 'HR manager') {
          //this.router.navigate(['admin']);
          alert("HR manager")
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

  matcher = new MyErrorStateMatcher();

}
