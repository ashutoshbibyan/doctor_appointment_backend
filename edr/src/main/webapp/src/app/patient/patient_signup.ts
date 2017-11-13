import { Component } from "@angular/core";
import { PatientService } from "./patient_service";
import { Patient } from "./patient";
import { Disease } from "../model/disease";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FormResult } from "../model/formresult";

const REG_DATE = new RegExp( " /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/" );

@Component( {
    selector: "patient-signup",
    templateUrl: "./html/patient_signup.html"
} )
export class PatientSignup {

    patientSignupForm: FormGroup;

    // used in the date picker to avoid user to choose future date as date of birth
    currentDate: Date = new Date();
    // used in the date picker to stop using date before 1900 
    oldestDate: Date = new Date( 1900, 1, 1 );

    result: FormResult = new FormResult();

    // list of the medical conditions 
    medConditions: Disease[] = new Array();




    dateOfBirth: FormControl = new FormControl( '', [
        Validators.required

    ] );

    name: FormControl = new FormControl( '', [
        Validators.required
    ] );

    phoneno: FormControl = new FormControl( '', [
        Validators.required,
        Validators.minLength( 10 ),
        Validators.maxLength( 10 )
    ] );

    medcondition: FormControl = new FormControl( '', [

    ] );


    constructor( private formBuilder: FormBuilder, private patientService: PatientService ) {

    }




    ngOnInit() {

        // get the list of the medical condition from the database 
        this.getListOfMedCondition();

        // initialize the form group 
        this.patientSignupForm = this.formBuilder.group( {

            'name': this.name,
            'phoneno': this.phoneno,
            'dateOfBirth': this.dateOfBirth,
            'medcondition': this.medcondition
        } );

    }

    // this method get the list of all the medical condition 
    getListOfMedCondition() {
        this.patientService.getDiseaseList().subscribe(( data ) => {
            if ( data != undefined ) {
                this.medConditions = data.json();

            }
        } );
    }

    /* execute when user submit the form */
    submit() {
        let patient: Patient = new Patient();
        patient.name = this.patientSignupForm.value.name;
        patient.phoneNo = this.patientSignupForm.value.phoneno;
        patient.dateOfBirth = this.patientSignupForm.value.dateOfBirth;


        patient.diseases = this.patientSignupForm.value.medcondition;
        if ( patient.diseases.length == 0 ) {
            patient.diseases = null;
        }
        console.log( patient );
        this.patientService.patientSignup( patient ).subscribe(( data ) => {
            if ( data != undefined ) {
                this.result = data.json();
            }
        } );

    }



}