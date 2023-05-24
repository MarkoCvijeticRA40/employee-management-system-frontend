import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register-administrator',
  templateUrl: './register-administrator.component.html',
  styleUrls: ['./register-administrator.component.css']
})
export class RegisterAdministratorComponent implements OnInit {

  constructor(private userService : UserService) { }

  currentUser : User = new User();

  newAdministrator : User = new User();

  confirmPassword : String = '';

  ngOnInit(): void {
    this.userService.getById(20).subscribe(res => {
      this.currentUser = res;
    });
    /*this.newAdministrator.name = "Milan";
    this.newAdministrator.surname = "Milanovic";
    this.newAdministrator.email = "milanovic@gmail.com"
    this.newAdministrator.password = "Milan123";
    this.confirmPassword = "Milan123";
    this.newAdministrator.address.street = "Arsenije Carnojevica"
    this.newAdministrator.address.country = "Srbija";
    this.newAdministrator.address.number = "13";
    this.newAdministrator.address.city = "Sremska Mitrovica";
    this.newAdministrator.phoneNum = "0640304321";
    this.newAdministrator.title = "Diplomirani programer";*/
  }

  public createAdministrator() {
    if (this.isEmpty(this.newAdministrator.email) ||
        this.isEmpty(this.newAdministrator.password) ||
        this.isEmpty(this.newAdministrator.name) ||
        this.isEmpty(this.newAdministrator.surname) ||
        this.isEmpty(this.newAdministrator.address.street) ||
        this.isEmpty(this.newAdministrator.address.number) ||
        this.isEmpty(this.newAdministrator.address.city) ||
        this.isEmpty(this.newAdministrator.address.country) ||
        this.isEmpty(this.newAdministrator.phoneNum) ||
        this.isEmpty(this.newAdministrator.title)) 
    {
      alert('Please fill in all fields.');
      return;
    }
  
    if (!this.checkPasswordsMatch()) {
      alert('Password and Confirm Password do not match.');
      return;
    }
  
    this.newAdministrator.roleNames.push("Administrator");
    this.userService.registerUser(this.newAdministrator).subscribe(res => {
      this.newAdministrator = res;
      alert("You have successfully created a new administrator.");
      this.newAdministrator = new User();
      this.confirmPassword = '';
    });
  }

  isEmpty(value: any): boolean {
    return value === null || value === undefined || value === '';
  }

  checkPasswordsMatch(): boolean {
    return this.newAdministrator.password === this.confirmPassword;
  }
}
