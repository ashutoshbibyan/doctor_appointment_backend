import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DoctorSignup } from "./doctor_signup";
import { MaterialModule } from "../material/material.module";
import { DoctorRoutingModule } from "./doctor_routing_module";
import { DoctorHome } from "./doctor_home";
import { DoctorAppointmentSetup } from "./doctor_appointment_setup";
import { DoctorHoliday } from "./doctor_holiday";
import { DoctorPanel } from "./doctor_panel";
import { DoctorMakeAppointment } from "./doctor_make_appointment";
import { DoctorAppointmentShow } from "./doctor_appointment_show";
import { DoctorHolidayShow } from "./doctor_holiday_show";
import { DoctorService } from "./doctor_service";

import { DoctorAddWorkingHours } from "./doctor_add_working_hours";




@NgModule( {
    imports: [MaterialModule, FormsModule, DoctorRoutingModule, ReactiveFormsModule, CommonModule
    ],
    declarations: [DoctorSignup, DoctorHome, DoctorAppointmentSetup, DoctorHoliday, DoctorPanel
        , DoctorMakeAppointment, DoctorAppointmentShow, DoctorHolidayShow, DoctorAddWorkingHours],
    providers: [DoctorService],
    exports: [DoctorSignup]

} )

export class DoctorModule {

}