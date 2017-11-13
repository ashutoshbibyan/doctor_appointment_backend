import { Component } from "@angular/core";
import { Patient } from "./patient";
import { Doctor } from "../dr/doctor";
import { TimeSlot } from "../model/timeslot";
import { holidayValidator } from "./holidayValidator";

import { FormControl, FormGroup, FormBuilder, Validators, ValidatorFn } from "@angular/forms";

@Component( {
    selector: "patient-home",
    templateUrl: "./html/patient_home.html"
} )

export class PatientHome {

    patient: Patient = new Patient();

    // form group for the make an appointment form 
    appointmentForm: FormGroup;

    showAppointmentForm: boolean = false;

    currentDate: Date = new Date();

    lalit: Doctor = new Doctor();

    aggarwal: Doctor = new Doctor();

    doctors: Doctor[] = new Array();

    timeSlots: TimeSlot[] = new Array();

    // month is october but we use 9 becaue date.getmonth start from 0 

    holidays: Date[] = [new Date( 2017, 10, 28 ), new Date( 2017, 10, 29 )];

    // doctor form control field  
    selectedDoc: FormControl = new FormControl( '', [

        Validators.required
    ] );

    // time slot for the appointment 
    appointmentTime: FormControl = new FormControl( '', [
        Validators.required
    ] );

    //appointment date form control 
    appointmentDate: FormControl = new FormControl( '', [

        Validators.required
    ] );

    /* this is the filter on date picker it filter all the hollidays */

    holliday = ( selectedDate: Date ): boolean => {
        let currentdate: Date = new Date();
        let result: boolean = true;
        for ( let i = 0; i < this.holidays.length; i++ ) {
            let currentDate = this.holidays[i];

            if ( selectedDate.getTime() == currentDate.getTime() ) {

                result = false;

            }
        }
        return result;
    };

    constructor( private formBuilder: FormBuilder ) {

    }

    /* this function execute when user select a dr from the list and then 
     * it populate the list of time slots for that perticular dr in the 
     * timeSlots variable */
    drSelected() {
        this.timeSlots = this.appointmentForm.value.selectedDoc.timeSlots;
    }


    ngOnInit() {
        this.patient.name = "ashutosh";


        this.createDoctor();

        this.appointmentForm = this.formBuilder.group( {

            selectedDoc: this.selectedDoc,
            appointmentTime: this.appointmentTime,
            appointmentDate: this.appointmentDate

        } );





    }

    createDoctor() {
        this.lalit.name = "Lalit";
        this.aggarwal.name = "Aggarwal";

        let time: TimeSlot = new TimeSlot();
        time.start.hour = 3;
        time.start.minute = 30;
        time.start.meridien = "PM";

        time.end.hour = 7;
        time.end.minute = 0;
        time.end.meridien = "PM";


        let time2: TimeSlot = new TimeSlot();
        time.start.hour = 10;
        time.start.minute = 0;
        time.start.meridien = "AM";

        time.end.hour = 1;
        time.end.minute = 0;
        time.end.meridien = "PM";


        this.lalit.timeSlots.push( time );
        this.lalit.timeSlots.push( time2 );

        this.doctors.push( this.lalit );
        this.doctors.push( this.aggarwal );
    }

    submit() {
        console.log( this.appointmentForm.value );
    }





}