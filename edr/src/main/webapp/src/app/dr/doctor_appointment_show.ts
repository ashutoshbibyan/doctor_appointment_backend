import { Component } from "@angular/core";
import { DoctorService } from "./doctor_service";
import { Appointment } from "../model/appointment";
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PageEvent } from "@angular/material";

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




    pageSize: number = 10;

    totalElements: number = 0;



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
                this.totalElements = data.json().totalElements;



            }
        } );
    }







    submit() {


        this.getAppointments( 0 );

    }


    nextPage( event: PageEvent ) {
        console.log( event );
        this.getAppointments( event.pageIndex );

    }



}