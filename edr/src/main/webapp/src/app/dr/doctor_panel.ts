import { Component } from "@angular/core";
import { DoctorService } from "./doctor_service";
import { Appointment } from "../model/appointment";


@Component( {
    selector: "doc-panel",
    templateUrl: "./html/doctor_panel.html"
} )

export class DoctorPanel {


    appointments: Appointment[];

    constructor( private doctorService: DoctorService ) {

    }


    ngOnInit() {

        this.getAppointments();

    }


    getAppointments() {
        this.doctorService.getTodayAppointment().subscribe(( data ) => {
            if ( data != undefined ) {
                this.appointments = data.json();
            }
        } );
    }

}