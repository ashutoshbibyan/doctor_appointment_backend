import { Route, Routes } from "@angular/router";
import { PatientSignup } from "./patient_signup";
import { PatientHome } from "./patient_home";
import { PatientProfile } from "./patient_profile";
import { PatientMakeAppointment } from "./patient_make_appointment";
import { PatientAddAddress } from "./patient_add_address";



const patientSignup: Route = { path: 'patient/signup', component: PatientSignup };

const patientAddAddress: Route = { path: 'patient/add/address', component: PatientAddAddress };

const patientProfile: Route = { path: 'patient/profile', component: PatientProfile }

const patientMakeAppointment: Route = { path: "patient/make/appointment", component: PatientMakeAppointment };

const patientHome: Route = {
    path: "patient/home", component: PatientHome, children: [

        { path: "", component: PatientMakeAppointment },
        patientMakeAppointment,
        patientAddAddress

    ]
};


export const PatientRoutes: Routes = [patientSignup, patientHome, patientProfile];