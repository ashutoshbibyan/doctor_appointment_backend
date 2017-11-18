import { Component } from "@angular/core";
import { FormBuilder, FormControl, Validators, FormGroup } from "@angular/forms";
import { Patient } from "./patient";
import { TimeSlot } from "../model/timeslot";
import { Doctor } from "../dr/doctor";
import { PatientService } from "./patient_service";

@Component( {
    selector: "patient-make-appointment",
    templateUrl: "./html/patient_make_appointment.html"
} )
export class PatientMakeAppointment {


    patient: Patient = new Patient();

    // form group for the make an appointment form 
    appointmentForm: FormGroup;

    showAppointmentForm: boolean = false;

    currentDate: Date = new Date();



    doctors: Doctor[] = new Array();

    timeSlots: TimeSlot[] = new Array();

    // month is october but we use 9 becaue date.getmonth start from 0 

    holidays: Date[] = new Array();

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

    holiday = ( selectedDate: Date ): boolean => {

        let result: boolean = true;

        if ( this.holidays ) {

            for ( let i = 0; i < this.holidays.length; i++ ) {


                let holiday: Date = this.holidays[i];

                if ( selectedDate.getTime() == parseInt( holiday.toString() ) * 1000 ) {
                    console.log( holiday );
                    console.log( selectedDate );
                    result = false;

                }
            }

        }

        return result;
    };

    constructor( private formBuilder: FormBuilder, private patientService: PatientService ) {

    }

    /* this function execute when user select a dr from the list and then 
     * it populate the list of time slots for that perticular dr in the 
     * timeSlots variable */
    drSelected() {

        let doc: Doctor = this.appointmentForm.value.selectedDoc;
        console.log( doc );
        this.holidays = doc.holidays;
        this.timeSlots = doc.timeSlots;
        console.log( this.holidays );
    }


    ngOnInit() {
        this.patient.name = "ashutosh";


        this.getDocForPatient();

        this.appointmentForm = this.formBuilder.group( {

            selectedDoc: this.selectedDoc,
            appointmentTime: this.appointmentTime,
            appointmentDate: this.appointmentDate

        } );

    }



    submit() {
        console.log( this.appointmentForm.value );
    }

    getDocForPatient() {
        this.patientService.getDocForPatient().subscribe(( data ) => {
            if ( data != undefined ) {
                this.doctors = data.json();
            }
        } );
    }

    docHover( dr ) {
        console.log( dr );
    }


}