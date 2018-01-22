import { Component } from "@angular/core";
import { PatientService } from "./patient_service";

import { DoctorInPatient } from "../model/doctorInPatient";


@Component( {
    selector: "show-doc-added",
    templateUrl: "./html/show_doctor_added.html"
} )
export class ShowDoctorAdded {


    doctorList: DoctorInPatient[] = new Array();


    constructor( private patientService: PatientService ) {

    }

    ngOnInit() {
        this.getDoctorList();
    }

    getDoctorList() {
        this.patientService.getPatientDoctors().subscribe(( data ) => {
            if ( data != undefined ) {
                this.doctorList = data.json();
            }
        } );
    }


    deleteDoctor( doctorInPatient: DoctorInPatient ) {
        this.patientService.deleteDoctorFromPatient( doctorInPatient ).subscribe(( data ) => {
            if ( data != undefined ) {
                if ( data.json().result ) {
                    this.getDoctorList();
                }
            }
        } );
    }

}