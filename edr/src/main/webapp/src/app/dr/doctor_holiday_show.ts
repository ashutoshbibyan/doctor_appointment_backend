import { Component } from "@angular/core";
import { DoctorService } from "./doctor_service";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component( {
    selector: "doc-holiday-show",
    templateUrl: "./html/doctor_holiday_show.html"
} )
export class DoctorHolidayShow {

    holidayList: Date[] = new Array();

    dateForm: FormGroup;

    from: FormControl = new FormControl( "", [
        Validators.required
    ] );

    to: FormControl = new FormControl( "", [
        Validators.required
    ] );


    constructor( private doctorService: DoctorService, private formBuilder: FormBuilder ) {

    }

    ngOnInit() {
        //this.getAllHoliday();

        this.dateForm = this.formBuilder.group( {
            from: this.from,
            to: this.to

        } );

    }

    getAllHoliday() {

        this.doctorService.getAllHoliday().subscribe(( data ) => {
            if ( data != undefined ) {
                this.holidayList = data.json();
            }
        } );
    }

    submit() {
        let from: Date = this.dateForm.value.from;
        let to: Date = this.dateForm.value.to;

        this.doctorService.getHolidayOfPeriod( from, to ).subscribe(( data ) => {
            if ( data != undefined ) {
                this.holidayList = data.json();
                console.log( data.json() );

            }
        } );
    }
}