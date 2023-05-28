import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./modules/administrator/home-page/home-page.component";
import { SearchUsersComponent } from "./modules/administrator/search-users/search-users.component";
import { EmployeesReviewComponent } from "./modules/administrator/employees-review/employees-review.component";
import { ProjectsReviewComponent } from "./modules/administrator/projects-review/projects-review.component";
import { CreateProjectComponent } from "./modules/administrator/create-project/create-project.component";
import { EditProfileComponent } from "./modules/administrator/edit-profile/edit-profile.component";
import { RegisterAdministratorComponent } from "./modules/administrator/register-administrator/register-administrator.component";
import { FirstLoginComponent } from "./modules/administrator/first-login/first-login.component";
import { ChangePasswordComponent } from "./modules/administrator/change-password/change-password.component";
import { ProjectManagerHomeComponent } from "./modules/projectManager/project-manager-home/project-manager-home.component";
import { HrManagerHomeComponent } from "./modules/hrManager/hr-manager-home/hr-manager-home.component";
import { SoftwareEngineerHomeComponent } from "./modules/softwareEngineer/software-engineer-home/software-engineer-home.component";
import { AdministratorAuthGuard } from "./authguard/administrator-auth-guard";
import { ProjectManagerAuthGuard } from "./authguard/project-manager-auth-guard";
import { HrManagerAuthGuard } from "./authguard/hr-manager-auth-guard";
import { SoftwareEngineerAuthGuard } from "./authguard/software-engineer-auth-guard";
import { AdministratorNotEnabledAuthGuard } from "./authguard/administrator-not-enabled-auth-guard";
import { LoginComponent } from "./modules/pages/login/login.component";
import { RegisterUserComponent } from "./modules/pages/register-user/register-user.component";
import { ListRequestsComponent } from "./modules/administrator/list-requests/list-requests.component";
import { PaswordlessLoginComponent } from "./modules/pages/paswordless-login/paswordless-login.component";
import { WelcomeSeComponent } from "./modules/softwareEngineer/welcome-se/welcome-se.component";
import { WelcomePmComponent } from "./modules/projectManager/welcome-pm/welcome-pm.component";
import { WelcomeAdminComponent } from "./modules/administrator/welcome-admin/welcome-admin.component";
import { WelcomeHrComponent } from "./modules/hrManager/welcome-hr/welcome-hr.component";
import { RefreshTokenComponent } from "./modules/administrator/refresh-token/refresh-token.component";
import { ModifyPermissionsComponent } from "./modules/administrator/modify-permissions/modify-permissions.component";

const routes: Routes = [
  {
    path: "administrator",
    component: HomePageComponent,
    //canActivate: [AdministratorAuthGuard], 
    children: [
      { path: "search/users", component: SearchUsersComponent },
      { path: "employees/review", component: EmployeesReviewComponent },
      { path: "projects/review", component: ProjectsReviewComponent },
      { path: "project/create", component: CreateProjectComponent },
      { path: "edit/profile", component: EditProfileComponent },
      { path: "create/administrator", component: RegisterAdministratorComponent },
      { path: "create/project", component: CreateProjectComponent },   
      { path: "change/password", component: ChangePasswordComponent},
      { path: "list-requests", component: ListRequestsComponent},
      { path: "welcome/:ajwt/:rjwt/:email", component: WelcomeAdminComponent },
      { path: "refresh-token", component: RefreshTokenComponent },
      { path: "modify-permission", component: ModifyPermissionsComponent }
    ],
  },
  {
    path: "projectmanager",
    //canActivate: [ProjectManagerAuthGuard],
    children: [
      { path: "home", component: ProjectManagerHomeComponent },
      { path: "welcome/:ajwt/:rjwt/:email", component: WelcomePmComponent }
    ]
  },
  {
    path: "hrmanager",
    //component: HrManagerHomeComponent,
    //canActivate: [HrManagerAuthGuard],
    children: [
      { path: "home", component: HrManagerHomeComponent },
      { path: "welcome/:ajwt/:rjwt/:email", component: WelcomeHrComponent }
    ]
  },
  {
    path: "softwareengineer",
    //canActivate: [SoftwareEngineerAuthGuard],
    children: [
      { path: "home", component: SoftwareEngineerHomeComponent },
      { path: "welcome/:ajwt/:rjwt/:email", component: WelcomeSeComponent }
    ]
  },
  {
    path: "first/login", 
    component: FirstLoginComponent,
    canActivate: [AdministratorNotEnabledAuthGuard] 
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterUserComponent
  },
  {
    path: "passwordless-login",
    component: PaswordlessLoginComponent
  },
  { path: "", redirectTo: "", pathMatch: "full" }, // Preusmeravanje na "first/login" za neautorizovane korisnike
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }