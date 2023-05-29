import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RegistrationRequest } from 'src/app/model/registration-request.model';
import { MyErrorStateMatcher } from '../login/login.component';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  positions = [
    {value: 'Software engineer', viewValue: 'Software engineer'},
    {value: 'Project manager', viewValue: 'Project manager'},
    {value: 'HR manager', viewValue: 'HR manager'}
  ];
  public request: RegistrationRequest = new RegistrationRequest();
  public confirmationPass: string = '';

  constructor(private userService: UserService, private router : Router) { }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  requiredPasswordControl = new FormControl('', [
    Validators.required,
  ]);

  requiredConfirmationPasswordControl = new FormControl('', [
    Validators.required,
  ])

  requiredNameControl = new FormControl('', [
    Validators.required,
  ]);

  requiredSurnameControl = new FormControl('', [
    Validators.required,
  ]);

  requiredCountryControl = new FormControl('', [
    Validators.required,
  ]);

  requiredCityControl = new FormControl('', [
    Validators.required,
  ]);

  requiredStreetControl = new FormControl('', [
    Validators.required,
  ]);

  requiredNumberControl = new FormControl('', [
    Validators.required,
  ]);

  requiredPhoneNumControl = new FormControl('', [
    Validators.required,
  ]);

  requiredTitleControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  private isInputValid(): boolean {
    return this.request.email !== '' && this.request.password !== ''
          && this.request.name !== '' && this.request.surname !== ''
          && this.request.address.country !== '' && this.request.address.city !== ''
          && this.request.address.street !== '' && this.request.address.number !== ''
          && this.request.phoneNum !== '' && this.request.title !== ''
          && this.request.roleName !== '' ;
  }

  private isPassConfirmed(): boolean {
    return this.request.password === this.confirmationPass;
  }

  public sendRequest() {
    if (this.isInputValid()) {
      if (this.isPassConfirmed()) {
        this.userService.sendRegistrationRequest(this.request).subscribe(res => {
          if (res.report.valid === true) {
            alert("Request is sent");
            this.router.navigate(['login'])
          }
          else {
            const errorMessages = JSON.stringify(res.report.errorMessages);
            alert(errorMessages);
             
          }
        })
    } else {
      alert("Password is not confirmed!");
    }
    }
  }

}
