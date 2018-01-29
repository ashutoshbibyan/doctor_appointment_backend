import { Component } from "@angular/core";
import { DoctorService } from "./doctor_service";
import { Appointment } from "../model/appointment";
import { PageEvent } from "@angular/material";


@Component( {
    selector: "doc-panel",
    templateUrl: "./html/doctor_panel.html"
} )

export class DoctorPanel {


    appointments: Appointment[];

    pageNo: number;

    pageSize: number = 10;

    totalElements: number;

    showAppointment: boolean = false;


    constructor( private doctorService: DoctorService ) {

    }


    ngOnInit() {

        this.getAppointments( 0 );

    }


    getAppointments( page: number ) {

        this.pageNo = page;

        this.doctorService.getTodayAppointment( this.pageNo, this.pageSize ).subscribe(( data ) => {
            if ( data != undefined ) {
                console.log( data.json() );
                this.appointments = data.json().content;
                this.totalElements = data.json().totalElements;
                if ( this.appointments.length != 0 ) {
                    this.showAppointment = true;
                }



            }
        } );
    }

    nextPage( event: PageEvent ) {

        this.getAppointments( event.pageIndex );

    }


}