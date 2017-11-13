import { Route, Routes } from "@angular/router";
import { PatientSignup } from "./patient_signup";
import { PatientHome } from "./patient_home";
import { PatientProfile } from "./patient_profile";

const patientHome: Route = { path: "patient/home", component: PatientHome };

const patientSignup: Route = { path: 'patient/signup', component: PatientSignup };

const patientProfile: Route = { path: 'patient/profile', component: PatientProfile }


export const PatientRoutes: Routes = [patientSignup, patientHome, patientProfile];