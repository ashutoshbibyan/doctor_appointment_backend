import { Component } from "@angular/core";
import { DoctorService } from "./doctor_service";
import { Appointment } from "../model/appointment";


@Component( {
    selector: "doc-panel",
    templateUrl: "./html/doctor_panel.html"
} )

export class DoctorPanel {


    appointments: Appointment[];

    pageNo: number;

    pageSize: number = 3;

    totalPages: number;

    pages: number[] = new Array();

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
                this.totalPages = data.json().totalPages;

                // here we are checking if there are more than one page                 
                if ( this.totalPages > 1 ) {
                    // here we are checking if we already created the pages array or not 
                    if ( this.totalPages != this.pages.length ) {
                        // if not create one 
                        this.createPages( this.totalPages );
                    }
                }

            }
        } );
    }


    createPages( noOfPages: number ) {

        for ( let i = 0; i < noOfPages; i++ ) {
            this.pages.push( i );
        }

        console.log( this.pages );
    }


}