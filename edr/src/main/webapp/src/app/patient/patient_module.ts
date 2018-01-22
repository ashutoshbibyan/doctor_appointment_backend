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
import { SearchDocUsingSpeciality } from "./search_doc_using_speciality";
import { ShowDoctorAdded } from "./show_doctors_added";
import { AddDoctor } from "./add_doctor";
import { AppointmentWithAddedDoctor } from "./appointment_with_added_doctor";


@NgModule( {
    imports: [PatientRoutingModule, MaterialModule, CommonModule, ReactiveFormsModule, AppCommonModule],
    declarations: [PatientSignup, PatientHome, PatientProfile, PatientMakeAppointment
        , PatientAddAddress, SearchDocUsingDocid, SearchDocUsingDocName, SearchDocUsingSpeciality,
        ShowDoctorAdded, AddDoctor, AppointmentWithAddedDoctor],
    providers: [PatientService],
    exports: []
} )

export class PatientModule {

}