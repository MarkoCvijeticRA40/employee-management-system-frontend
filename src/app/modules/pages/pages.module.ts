import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, MatNativeDateModule, MatOption, MatOptionModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { PaswordlessLoginComponent } from './paswordless-login/paswordless-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TwoFactorAuthenticationLoginComponent } from './two-factor-authentication-login/two-factor-authentication-login.component';

/*const routes: Routes = [
  {
    /*path: '', component: PagesComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'create-root-certificate', component: CreateRootCertificateComponent},
    ]
  }
];
*/

@NgModule({
  declarations: [
  
    LoginComponent,
       RegisterUserComponent,
       PaswordlessLoginComponent,
       ForgotPasswordComponent,
       TwoFactorAuthenticationLoginComponent
  ],
  imports: [
    CommonModule,
    //AppRoutingModule,
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatRadioModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatOptionModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class PagesModule { }
