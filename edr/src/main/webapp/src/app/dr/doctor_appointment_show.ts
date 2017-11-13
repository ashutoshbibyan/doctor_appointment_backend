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


    appointments: Appointment[];

    constructor( private doctorService: DoctorService, private formBuilder: FormBuilder ) {

    }

    ngOnInit() {
        //  this.getAppointments();

        this.dateForm = this.formBuilder.group( {
            from: this.from,
            to: this.to
        } );
    }

    //    getAppointments() {
    //        this.doctorService.getDocAppointment().subscribe(( data ) => {
    //            if ( data != undefined ) {
    //                this.appointments = data.json();
    //
    //            }
    //        } );
    //    }


    submit() {
        let from: Date = this.dateForm.value.from;
        let to: Date = this.dateForm.value.to;
        this.doctorService.getAppointmentOfPeriod( from, to ).subscribe(( data ) => {
            if ( data != undefined ) {
                this.appointments = data.json();
            }
        } );
    }

}