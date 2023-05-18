import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChangePasswordComponent } from "./modules/administrator/change-password/change-password.component";
import { CreateProjectComponent } from "./modules/administrator/create-project/create-project.component";
import { EditProfileComponent } from "./modules/administrator/edit-profile/edit-profile.component";
import { EmployeesReviewComponent } from "./modules/administrator/employees-review/employees-review.component";
import { ProjectsReviewComponent } from "./modules/administrator/projects-review/projects-review.component";
import { RegisterAdministratorComponent } from "./modules/administrator/register-administrator/register-administrator.component";
import { SearchUsersComponent } from "./modules/administrator/search-users/search-users.component";
import { HomeComponent } from "./modules/pages/home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'administrator/search/users', component: SearchUsersComponent },
  { path: 'administrator/employees/review', component: EmployeesReviewComponent},
  { path: 'administrator/projects/review', component: ProjectsReviewComponent},
  { path: 'administator/project/create', component: CreateProjectComponent},
  { path: 'administrator/edit/profile', component: EditProfileComponent},
  { path: 'administrator/change/password', component: ChangePasswordComponent},
  { path: 'administrator/create/administrator', component: RegisterAdministratorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
