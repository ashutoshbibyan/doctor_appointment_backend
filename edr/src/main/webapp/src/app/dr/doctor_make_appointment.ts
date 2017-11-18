import { Component } from "@angular/core";
import { Doctor } from "./doctor";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DoctorService } from "./doctor_service";
import { Time } from "../model/time";
import { holidayValidator } from "./holidayValidator";
import { Appointment } from "../model/appointment";
import { FormResult } from "../model/formresult";

@Component( {
    selector: "doc-make-appointment",
    templateUrl: "./html/doctor_make_appointment.html"
} )
export class DoctorMakeAppointment {

    doctor: Doctor = new Doctor();
    holidays: Date[] = new Array();

    result: FormResult = new FormResult();

    today: Date = new Date();

    workingDayFilter;


    appointmentForm: FormGroup;

    patientId: FormControl = new FormControl( "", [
        Validators.required
        , Validators.email
    ] );

    date: FormControl = new FormControl( "", [
        Validators.required
    ] );;

    timeSlot: FormControl = new FormControl( "", [
        Validators.required
    ] );

    appointmentWithoutPatientId: FormGroup;

    patientName: FormControl = new FormControl( "", [
        Validators.required
    ] );

    patientPhoneNo: FormControl = new FormControl( "", [
        Validators.required,
        Validators.minLength( 10 )
    ] );

    appointmentDate: FormControl = new FormControl( "", [
        Validators.required
    ] );

    appointmentTimeSlot: FormControl = new FormControl( "", [
        Validators.required
    ] );





    ngOnInit() {



        this.appointmentForm = this.formBuilder.group( {
            patientId: this.patientId,
            date: this.date,
            timeSlot: this.timeSlot
        } );


        this.appointmentWithoutPatientId = this.formBuilder.group( {
            patientName: this.patientName,
            patientPhoneNo: this.patientPhoneNo,
            appointmentDate: this.appointmentDate,
            appointmentTimeSlot: this.appointmentTimeSlot
        } );

        this.getDoctor();


    }



    constructor( private formBuilder: FormBuilder, private doctorService: DoctorService ) {

    }




    public getDoctor() {
        this.doctorService.getDoctorPublicInfo().subscribe(( data ) => {
            if ( data != undefined ) {
                this.doctor = data.json();

                /* filter is dependent on the doctor object thats why 
                 * it is set here */

                this.workingDayFilter = ( d: Date ): boolean => {
                    const day = d.getDay();
                    let workingDays = this.doctor.workingDays;
                    let holidays = this.doctor.holidays;
                    let result: boolean = false;

                    if ( workingDays != null ) {

                        for ( let i = 0; i < workingDays.length; i++ ) {
                            if ( day == workingDays[i] ) {
                                result = true;
                            }


                        }
                    }



                    if ( holidays != null ) {

                        for ( let i = 0; i < holidays.length; i++ ) {
                            let holiday: Date = holidays[i];

                            if ( d.getTime() == parseInt( holiday.toString() ) * 1000 ) {
                                result = false;
                            }
                        }
                    }



                    return result;

                }



            }
        } );
    }



    submit() {
        let appointment: Appointment = new Appointment();
        appointment.patientId = this.appointmentForm.value.patientId;
        appointment.date = new Date( this.appointmentForm.value.date );
        appointment.timeSlot = this.appointmentForm.value.timeSlot;
        console.log( appointment );

        this.doctorService.makeAppointment( appointment ).subscribe(( data ) => {
            if ( data != undefined ) {
                this.result = data.json();
            }
        } );

    }


    submitWithoutId() {
        let appointment: Appointment = new Appointment();
        appointment.patientName = this.appointmentWithoutPatientId.value.patientName;
        appointment.patientPhoneNo = this.appointmentWithoutPatientId.value.patientPhoneNo;
        appointment.date = this.appointmentWithoutPatientId.value.appointmentDate;
        appointment.timeSlot = this.appointmentWithoutPatientId.value.appointmentTimeSlot;

        this.doctorService.makeAppointment( appointment ).subscribe(( data ) => {
            if ( data != undefined ) {
                this.result = data.json();
            }
        } );
    }




}