import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateRootCertificateComponent } from "./modules/pages/create-root-certificate/create-root-certificate.component";
import { HomeComponent } from "./modules/pages/home/home.component";

const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'create-root-certificate', component: CreateRootCertificateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
