import { Route, Routes } from "@angular/router";
import { PatientSignup } from "./patient_signup";
import { PatientHome } from "./patient_home";
import { PatientProfile } from "./patient_profile";
import { PatientMakeAppointment } from "./patient_make_appointment";
import { PatientAddAddress } from "./patient_add_address";
import { SearchDocUsingDocid } from "./search_doc_using_docid";
import { SearchDocUsingDocName } from "./search_doc_using_docname";



const patientSignup: Route = { path: 'patient/signup', component: PatientSignup };

const patientAddAddress: Route = { path: 'patient/add/address', component: PatientAddAddress };

const patientProfile: Route = { path: 'patient/profile', component: PatientProfile }

const searchDocUsingDocid: Route = { path: "search/using/docid", component: SearchDocUsingDocid };

const searchDocUsingDocName: Route = { path: "search/using/docname", component: SearchDocUsingDocName };

const patientMakeAppointment: Route = { path: "patient/make/appointment", component: PatientMakeAppointment };

const patientHome: Route = {
    path: "patient/home", component: PatientHome, children: [

        { path: "", component: PatientMakeAppointment },
        patientMakeAppointment,
        patientAddAddress,
        searchDocUsingDocid,
        searchDocUsingDocName

    ]
};


export const PatientRoutes: Routes = [patientSignup, patientHome, patientProfile];