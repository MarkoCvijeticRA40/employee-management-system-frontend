import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { PagesModule } from "./modules/pages/pages.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { FormsModule } from '@angular/forms';
import { HomeComponent } from "./modules/pages/home/home.component";
import { CreateRootCertificateComponent } from "./modules/pages/create-root-certificate/create-root-certificate.component";
import { MatOptionModule } from "@angular/material/core";


@NgModule({
  declarations: [
    AppComponent,
    CreateRootCertificateComponent,
    HomeComponent,
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
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
