import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchUsersComponent } from "./modules/administrator/search-users/search-users.component";
import { HomeComponent } from "./modules/pages/home/home.component";

const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'administrator/search/users', component: SearchUsersComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
