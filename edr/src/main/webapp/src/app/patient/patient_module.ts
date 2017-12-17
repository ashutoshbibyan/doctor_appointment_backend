import { NgModule } from "@angular/core";
import { PatientRoutingModule } from "./patient_routing_module";
import { PatientSignup } from "./patient_signup";
import { MaterialModule } from "../material/material.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { PatientHome } from "./patient_home";
import { PatientService } from "./patient_service";
import { PatientProfile } from "./patient_profile";
import { PatientMakeAppointment } from "./patient_make_appointment";
import { PatientAddAddress } from "./patient_add_address";
import { AppCommonModule } from "../common/common_module";
import { SearchDocUsingDocid } from "./search_doc_using_docid";
import { SearchDocUsingDocName } from "./search_doc_using_docname";


@NgModule( {
    imports: [PatientRoutingModule, MaterialModule, CommonModule, ReactiveFormsModule, AppCommonModule],
    declarations: [PatientSignup, PatientHome, PatientProfile, PatientMakeAppointment
        , PatientAddAddress, SearchDocUsingDocid, SearchDocUsingDocName],
    providers: [PatientService],
    exports: []
} )

export class PatientModule {

}