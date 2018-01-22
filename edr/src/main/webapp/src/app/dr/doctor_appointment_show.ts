import { Component } from "@angular/core";
import { DoctorService } from "./doctor_service";
import { Appointment } from "../model/appointment";
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component( {
    selector: "doc-appointment-show",
    templateUrl: "./html/doctor_appointment_show.html"
} )

export class DoctorAppointmentShow {

    dateForm: FormGroup;

    from: FormControl = new FormControl( "", [
        Validators.required
    ] );

    to: FormControl = new FormControl( "", [
        Validators.required
    ] );




    pageSize: number = 3;

    totalPages: number;

    pages: number[] = new Array();

    appointments: Appointment[];

    constructor( private doctorService: DoctorService, private formBuilder: FormBuilder ) {

    }

    ngOnInit() {

        this.dateForm = this.formBuilder.group( {
            from: this.from,
            to: this.to
        } );


    }



    // get appointments gets the appointment from the data base

    getAppointments( pageNo: number ) {

        let from: Date = this.dateForm.value.from;
        let to: Date = this.dateForm.value.to;

        this.doctorService.getAppointmentOfPeriod( from, to, pageNo, this.pageSize ).subscribe(( data ) => {
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





    submit() {


        this.getAppointments( 0 );

    }



}