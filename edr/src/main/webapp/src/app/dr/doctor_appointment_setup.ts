import { Component } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TimeSlot } from "../model/timeslot";
import { Doctor } from "./doctor";
import { FormResult } from "../model/formresult";
import { DoctorService } from "./doctor_service";

@Component( {
    selector: "doc-appoint-setup",
    templateUrl: "./html/doctor_appointment_setup.html"
} )

export class DoctorAppointmentSetup {

    appointmentForm: FormGroup;

    doctor: Doctor = new Doctor();
    result: FormResult = new FormResult();


    feeAmount: FormControl = new FormControl( '', [] );
    maxAppointments: FormControl = new FormControl( '', [] );



    constructor( private formBuilder: FormBuilder, private doctorService: DoctorService ) {

    }

    ngOnInit() {

        this.getDoctor();

        this.appointmentForm = this.formBuilder.group( {
            feeAmount: this.feeAmount,
            maxAppointments: this.maxAppointments,

        } );
    }

    getDoctor() {
        this.doctorService.getDoctorPublicInfo().subscribe(( data ) => {
            if ( data != undefined ) {
                this.doctor = data.json();
                this.feeAmount.setValue( this.doctor.appointmentFee );
                this.maxAppointments.setValue( this.doctor.maxAppointments );
            }
        } );
    }


    submit() {

        let doctor: Doctor = new Doctor();
        doctor.appointmentFee = this.appointmentForm.value.feeAmount;
        doctor.maxAppointments = this.appointmentForm.value.maxAppointments;

        this.doctorService.docAppointmentSetup( doctor ).subscribe(( data ) => {
            if ( data != undefined ) {
                this.result = data.json();
            }
        } );

    }



}