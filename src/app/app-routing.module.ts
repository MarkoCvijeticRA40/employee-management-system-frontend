import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./modules/administrator/home-page/home-page.component";
import { SearchUsersComponent } from "./modules/administrator/search-users/search-users.component";
import { EmployeesReviewComponent } from "./modules/administrator/employees-review/employees-review.component";
import { ProjectsReviewComponent } from "./modules/administrator/projects-review/projects-review.component";
import { CreateProjectComponent } from "./modules/administrator/create-project/create-project.component";
import { EditProfileComponent } from "./modules/administrator/edit-profile/edit-profile.component";
import { RegisterAdministratorComponent } from "./modules/administrator/register-administrator/register-administrator.component";
import { AuthGuard } from "./modules/administrator/auth.guard";
import { FirstLoginComponent } from "./modules/administrator/first-login/first-login.component";
import { HomeComponent } from "./modules/pages/home/home.component";

const routes: Routes = [
  {
    path: "home",
    component: HomePageComponent,
    canActivate: [AuthGuard], // Apply the AuthGuard to protect the routes
    children: [
      { path: "search/users", component: SearchUsersComponent },
      { path: "employees/review", component: EmployeesReviewComponent },
      { path: "projects/review", component: ProjectsReviewComponent },
      { path: "project/create", component: CreateProjectComponent },
      { path: "edit/profile", component: EditProfileComponent },
      { path: "create/administrator", component: RegisterAdministratorComponent },
      { path: "create/project" , component : CreateProjectComponent },    
    ],
  },
  { path: "first/login", component: FirstLoginComponent }, // This route is accessible regardless of the user's account status
  { path: "no/access", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }