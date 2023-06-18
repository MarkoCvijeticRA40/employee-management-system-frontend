import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { PagesModule } from './modules/pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './modules/pages/home/home.component';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { SearchUsersComponent } from './modules/administrator/search-users/search-users.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule, DatePipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
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
import { ProjectManagerSidebarComponent } from './modules/projectManager/project-manager-sidebar/project-manager-sidebar.component';
import { ProjectManagerProfileComponent } from './modules/projectManager/project-manager-profile/project-manager-profile.component';
import { ProjectManagerProjectsComponent } from './modules/projectManager/project-manager-projects/project-manager-projects.component';
import { SoftwareEngineerSidebarComponent } from './modules/softwareEngineer/software-engineer-sidebar/software-engineer-sidebar.component';
import { SoftwareEngineerProfileComponent } from './modules/softwareEngineer/software-engineer-profile/software-engineer-profile.component';
import { SoftwareEngineerProjectsComponent } from './modules/softwareEngineer/software-engineer-projects/software-engineer-projects.component';
import { ProjectManagerEditProjectsComponent } from './modules/projectManager/project-manager-edit-projects/project-manager-edit-projects.component';
import { ListRequestsComponent } from './modules/administrator/list-requests/list-requests.component';
import { WelcomePmComponent } from './modules/projectManager/welcome-pm/welcome-pm.component';
import { WelcomeAdminComponent } from './modules/administrator/welcome-admin/welcome-admin.component';
import { WelcomeHrComponent } from './modules/hrManager/welcome-hr/welcome-hr.component';
import { RefreshTokenComponent } from './modules/administrator/refresh-token/refresh-token.component';
import { ModifyPermissionsComponent } from './modules/administrator/modify-permissions/modify-permissions.component';
import { TokenInterceptor } from './interceptor/token-interceptor.model';
import { AdministratorAuthGuard } from './authguard/administrator-auth-guard';
import { ProfileInfoComponent } from './modules/projectManager/profile-info/profile-info.component';
import { EngineerProfileInfoComponent } from './modules/softwareEngineer/engineer-profile-info/engineer-profile-info.component';
import { AddSkillComponent } from './modules/softwareEngineer/add-skill/add-skill.component';
import { HrManagerEditProfileComponent } from './modules/hrManager/hr-manager-edit-profile/hr-manager-edit-profile.component';
import { HrManagerChangePasswordComponent } from './modules/hrManager/hr-manager-change-password/hr-manager-change-password.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

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
    ProjectManagerSidebarComponent,
    ProjectManagerProfileComponent,
    ProjectManagerProjectsComponent,
    SoftwareEngineerSidebarComponent,
    SoftwareEngineerProfileComponent,
    SoftwareEngineerProjectsComponent,
    ProjectManagerEditProjectsComponent,
    ListRequestsComponent,
    WelcomePmComponent,
    WelcomeAdminComponent,
    WelcomeHrComponent,
    RefreshTokenComponent,
    ModifyPermissionsComponent,
    ProfileInfoComponent,
    EngineerProfileInfoComponent,
    AddSkillComponent,
    HrManagerEditProfileComponent,
    HrManagerChangePasswordComponent,
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
    MatButtonToggleModule,
  ],
  providers: [
    DatePipe,
    AdministratorAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
