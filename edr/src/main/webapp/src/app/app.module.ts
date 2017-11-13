import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./material/material.module";
import { NgModule } from '@angular/core';
import { } from "@angular/date";
import { RouterModule } from "@angular/router";
import { UserModule } from "./user/user.module";
import { PatientModule } from "./patient/patient_module";
import { AppRoutes } from "./app_routes_config";
import { Home } from "./home";
import { SiteAdminModule } from "./site_admin/site_admin_module";


import { AppComponent } from './app.component';

@NgModule( {
    declarations: [
        AppComponent, Home
    ],
    imports: [
        RouterModule.forRoot( AppRoutes ),
        BrowserModule, BrowserAnimationsModule, UserModule, FormsModule, MaterialModule,
        PatientModule, SiteAdminModule
    ],
    providers: [],
    bootstrap: [AppComponent]
} )
export class AppModule { }
