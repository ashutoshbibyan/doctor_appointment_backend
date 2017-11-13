import { NgModule } from "@angular/core";
import { PatientRoutingModule } from "./patient_routing_module";
import { PatientSignup } from "./patient_signup";
import { MaterialModule } from "../material/material.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { PatientHome } from "./patient_home";
import { PatientService } from "./patient_service";
import { PatientProfile } from "./patient_profile";

@NgModule( {
    imports: [PatientRoutingModule, MaterialModule, CommonModule, ReactiveFormsModule],
    declarations: [PatientSignup, PatientHome, PatientProfile],
    providers: [PatientService],
    exports: []
} )

export class PatientModule {

}