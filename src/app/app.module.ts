import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { PagesModule } from "./modules/pages/pages.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from "./modules/pages/home/home.component";
import { MatNativeDateModule, MatOptionModule } from "@angular/material/core";
import { SearchUsersComponent } from './modules/administrator/search-users/search-users.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { CommonModule, DatePipe } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { MatRadioModule } from "@angular/material/radio";
import { EmployeesReviewComponent } from './modules/administrator/employees-review/employees-review.component';
import { ProjectsReviewComponent } from './modules/administrator/projects-review/projects-review.component';
import { CreateProjectComponent } from './modules/administrator/create-project/create-project.component';
import { EditProfileComponent } from './modules/administrator/edit-profile/edit-profile.component';
import { RegisterAdministratorComponent } from './modules/administrator/register-administrator/register-administrator.component';
import { ChangePasswordComponent } from './modules/administrator/change-password/change-password.component';
import { CdkTableModule } from '@angular/cdk/table';
import { HomePageComponent } from './modules/administrator/home-page/home-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FirstLoginComponent } from './modules/administrator/first-login/first-login.component';
import { ProjectManagerHomeComponent } from './modules/projectManager/project-manager-home/project-manager-home.component';
import { SoftwareEngineerHomeComponent } from './modules/softwareEngineer/software-engineer-home/software-engineer-home.component';
import { HrManagerHomeComponent } from './modules/hrManager/hr-manager-home/hr-manager-home.component';
import { ListRequestsComponent } from './modules/administrator/list-requests/list-requests.component';
import { WelcomePmComponent } from './modules/projectManager/welcome-pm/welcome-pm.component';
import { WelcomeAdminComponent } from './modules/administrator/welcome-admin/welcome-admin.component';
import { WelcomeHrComponent } from './modules/hrManager/welcome-hr/welcome-hr.component';
import { RefreshTokenComponent } from './modules/administrator/refresh-token/refresh-token.component';
import { ModifyPermissionsComponent } from './modules/administrator/modify-permissions/modify-permissions.component';
import { TokenInterceptor } from "./interceptor/token-interceptor.model";
import { AdministratorAuthGuard } from "./authguard/administrator-auth-guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchUsersComponent,
    EmployeesReviewComponent,
    ProjectsReviewComponent,
    CreateProjectComponent,
    EditProfileComponent,
    RegisterAdministratorComponent,
    ChangePasswordComponent,
    HomePageComponent,
    FirstLoginComponent,
    ProjectManagerHomeComponent,
    SoftwareEngineerHomeComponent,
    HrManagerHomeComponent,
    ListRequestsComponent,
    WelcomePmComponent,
    WelcomeAdminComponent,
    WelcomeHrComponent,
    RefreshTokenComponent,
    ModifyPermissionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    //PagesModule,
    MatTableModule,
    FormsModule,
    MatOptionModule,
    MatDatepickerModule,
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
    MatOptionModule, 
    MatInputModule,
    MatFormFieldModule,
    CdkTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  providers: [
    DatePipe,
    AdministratorAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
