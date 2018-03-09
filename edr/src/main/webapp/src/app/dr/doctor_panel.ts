import { Component } from "@angular/core";
import { DoctorService } from "./doctor_service";
import { Appointment } from "../model/appointment";
import { PageEvent } from "@angular/material";
import { CommonService } from "../common/common_service";


@Component( {
    selector: "doc-panel",
    templateUrl: "./html/doctor_panel.html",
    styleUrls: ["./css/doctor_panel.css"]
} )

export class DoctorPanel {


    appointments: Appointment[];

    progress: boolean = true;

    pageNo: number;

    pageSize: number = 10;

    totalElements: number;

    showAppointment: boolean = false;


    constructor( private doctorService: DoctorService, private commonService: CommonService ) {

    }


    ngOnInit() {

        this.getAppointments( 0 );

    }


    getAppointments( page: number ) {
        this.progress = true;
        this.pageNo = page;

        this.doctorService.getTodayAppointment( this.pageNo, this.pageSize ).subscribe(( data ) => {

            if ( data != undefined ) {
                console.log( data.json().content );
                this.appointments = this.doctorService.deseralizeAppointmentArray( data.json().content );
                this.totalElements = data.json().totalElements;
                console.log( this.appointments );
                if ( this.appointments.length != 0 ) {
                    this.showAppointment = true;
                    this.progress = false;
                }
                else {
                    this.progress = false;
                }



            }
        } );
    }

    nextPage( event: PageEvent ) {

        this.getAppointments( event.pageIndex );

    }


}