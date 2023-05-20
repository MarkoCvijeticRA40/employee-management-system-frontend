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
      { path: "change/password", component: ChangePasswordComponent} 
    ],
  },
  {
    path: "projectmanager",
    component: ProjectManagerHomeComponent,
    //canActivate: [ProjectManagerAuthGuard],
    children: [
      { path: "home", component: ProjectManagerHomeComponent }
    ]
  },
  {
    path: "hrmanager",
    component: HrManagerHomeComponent,
    //canActivate: [HrManagerAuthGuard],
    children: [
      { path: "home", component: HrManagerHomeComponent }
    ]
  },
  {
    path: "softwareengineer",
    component: SoftwareEngineerHomeComponent,
    //canActivate: [SoftwareEngineerAuthGuard],
    children: [
      { path: "home", component: SoftwareEngineerHomeComponent }
    ]
  },
  { path: "first/login", component: FirstLoginComponent },
  { path: "", redirectTo: "", pathMatch: "full" }, // Preusmeravanje na "first/login" za neautorizovane korisnike
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }