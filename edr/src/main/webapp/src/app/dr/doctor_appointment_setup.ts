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
    timeSlots: TimeSlot[] = new Array();

    doctor: Doctor = new Doctor();
    result: FormResult = new FormResult();


    feeAmount: FormControl = new FormControl( '', [] );
    maxAppointments: FormControl = new FormControl( '', [] );
    days: FormControl = new FormControl( '', [] );
    startingTime: FormControl = new FormControl( '', [] );
    closeingTime: FormControl = new FormControl( '', [] );


    constructor( private formBuilder: FormBuilder, private doctorService: DoctorService ) {

    }

    ngOnInit() {

        this.getDoctor();

        this.appointmentForm = this.formBuilder.group( {
            feeAmount: this.feeAmount,
            maxAppointments: this.maxAppointments,
            days: this.days,
            startingTime: this.startingTime,
            closeingTime: this.closeingTime
        } );
    }

    getDoctor() {
        this.doctorService.getDoctorPublicInfo().subscribe(( data ) => {
            if ( data != undefined ) {
                this.doctor = data.json();

            }
        } );
    }


    submit() {

        let doctor: Doctor = new Doctor();
        doctor.appointmentFee = this.appointmentForm.value.feeAmount;
        doctor.maxAppointments = this.appointmentForm.value.maxAppointments;
        doctor.timeSlots = this.timeSlots;
        doctor.workingDays = this.appointmentForm.value.days;



        this.doctorService.docAppointmentSetup( doctor ).subscribe(( data ) => {
            if ( data != undefined ) {
                this.result = data.json();
            }
        } );

    }

    addTimeSlot() {
        let timeSlot: TimeSlot = new TimeSlot();
        timeSlot.start.stringToTime( this.appointmentForm.value.startingTime );
        timeSlot.end.stringToTime( this.appointmentForm.value.closeingTime );

        if ( !isNaN( timeSlot.start.hour ) && !isNaN( timeSlot.end.hour ) ) {

            if ( this.timeSlots.length != 0 ) {


                for ( let i = 0; i < this.timeSlots.length; i++ ) {
                    if ( ( this.timeSlots[i].start.equal( timeSlot.start ) ) && ( this.timeSlots[i].end.equal( timeSlot.end ) ) ) {

                        this.result.error = true;
                        this.result.message = "TimeSlot Already added"
                    }
                    else {
                        this.result.error = false;

                    }
                }

                if ( !this.result.error ) {
                    this.timeSlots.push( timeSlot );
                }
            }
            else {
                this.timeSlots.push( timeSlot );
            }

        }
    }

    deleteTimeslot( i: number ) {
        this.timeSlots.splice( i, 1 );
    }
}