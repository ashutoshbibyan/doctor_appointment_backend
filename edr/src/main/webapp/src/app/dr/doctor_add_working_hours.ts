import { Component } from "@angular/core";
import { MatSlideToggleChange, MatSelectChange } from "@angular/material";
import { DoctorService } from "./doctor_service";
import { FormResult } from "../model/formresult";
import { Day } from "../model/day";
import { Time } from "../model/time";
import { HourListOption } from "../model/hourListOptions";
import { Doctor } from "./doctor";
import { Hours } from "../model/hours";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import 'hammerjs';

@Component( {
    selector: "add-hours",
    templateUrl: "./html/add_hours.html",
    styleUrls: ["./css/add_hours.css"]
} )
export class DoctorAddWorkingHours {

    workState: string = "closed";

    workingDays: Day[] = new Array();

    formResult: FormResult = new FormResult();

    doctor: Doctor = new Doctor();


    workingHoursForm: FormGroup;

    mondayControl: FormControl = new FormControl( "", [] );

    mondayStartAt: FormControl = new FormControl( "", [] );

    mondayCloseAt: FormControl = new FormControl( "", [] );

    tuesdayControl: FormControl = new FormControl( "", [] );

    tuesdayStartAt: FormControl = new FormControl( "", [] );

    tuesdayCloseAt: FormControl = new FormControl( "", [] );

    wednesdayControl: FormControl = new FormControl( "", [] );

    wednesdayStartAt: FormControl = new FormControl( "", [] );

    wednesdayCloseAt: FormControl = new FormControl( "", [] );

    thursdayControl: FormControl = new FormControl( "", [] );

    thursdayStartAt: FormControl = new FormControl( "", [] );

    thursdayCloseAt: FormControl = new FormControl( "", [] );

    fridayControl: FormControl = new FormControl( "", [] );

    fridayStartAt: FormControl = new FormControl( "", [] );

    fridayCloseAt: FormControl = new FormControl( "", [] );

    saturdayControl: FormControl = new FormControl( "", [] );

    saturdayStartAt: FormControl = new FormControl( "", [] );

    saturdayCloseAt: FormControl = new FormControl( "", [] );

    sundayControl: FormControl = new FormControl( "", [] );

    sundayStartAt: FormControl = new FormControl( "", [] );

    sundayCloseAt: FormControl = new FormControl( "", [] );


    mondayCode: number = 1;
    tuesdayCode: number = 2;
    wednesdayCode: number = 3;
    thursdayCode: number = 4;
    fridayCode: number = 5;
    saturdayCode: number = 6;
    sundayCode: number = 0;


    hourListOption = HourListOption;


    constructor( private formBuilder: FormBuilder, private doctorService: DoctorService ) {

    }


    ngOnInit() {
        this.workingHoursForm = this.formBuilder.group( {
            "mondayControl": this.mondayControl,
            "mondayStartAt": this.mondayStartAt,
            "mondayCloseAt": this.mondayCloseAt,
            "tuesdayControl": this.tuesdayControl,
            "tuesdayStartAt": this.tuesdayStartAt,
            "tuesdayCloseAt": this.tuesdayCloseAt,
            "wednesdayControl": this.wednesdayControl,
            "wednesdayStartAt": this.wednesdayStartAt,
            "wednesdayCloseAt": this.wednesdayCloseAt,
            "thursdayControl": this.thursdayControl,
            "thursdayStartAt": this.thursdayStartAt,
            "thursdayCloseAt": this.thursdayCloseAt,
            "fridayControl": this.fridayControl,
            "fridayStartAt": this.fridayStartAt,
            "fridayCloseAt": this.fridayCloseAt,
            "saturdayControl": this.saturdayControl,
            "saturdayStartAt": this.saturdayStartAt,
            "saturdayCloseAt": this.saturdayCloseAt,
            "sundayControl": this.sundayControl,
            "sundayStartAt": this.sundayStartAt,
            "sundayCloseAt": this.sundayCloseAt

        } );


        this.getDoctorWorkingDays();






    }

    /** getDoctorWorkingdays Method */

    getDoctorWorkingDays() {

        this.workingDays = this.doctorService.getDoctorWorkingDays();

        console.log( this.workingDays );

    }




    checked( event: MatSlideToggleChange ) {

        console.log( event );

        if ( event.checked ) {

            let day: Day = new Day();

            day.dayId = parseInt( event.source.id );
            day.dayName = event.source.name;
            day.dayStatus = "Open";
            day.checked = true;

            this.workingDays.push( day );


        }
        else {

            for ( let i = 0; i < this.workingDays.length; i++ ) {
                if ( this.workingDays[i].dayId == ( parseInt( event.source.id ) ) ) {

                    this.workingDays.splice( i, 1 );
                }
            }

        }
        console.log( this.workingDays );
    }



    submit() {

        this.addDayHour( this.mondayStartAt.value, this.mondayCloseAt.value, this.mondayCode );
        this.addDayHour( this.tuesdayStartAt.value, this.tuesdayCloseAt.value, this.tuesdayCode );
        this.addDayHour( this.wednesdayStartAt.value, this.wednesdayCloseAt.value, this.wednesdayCode );
        this.addDayHour( this.thursdayStartAt.value, this.thursdayCloseAt.value, this.thursdayCode );
        this.addDayHour( this.fridayStartAt.value, this.fridayCloseAt.value, this.fridayCode );
        this.addDayHour( this.saturdayStartAt.value, this.saturdayCloseAt.value, this.saturdayCode );
        this.addDayHour( this.sundayStartAt.value, this.sundayCloseAt.value, this.sundayCode );


        this.doctorService.saveWorkingDays( this.workingDays ).subscribe(( data ) => {
            if ( data != undefined ) {
                this.formResult = data.json();
            }
        } );

        console.log( this.workingDays );


    }

    /** addDayHour execute when user click on addhour button it takes three parameter 
     *  startAt , closeAt , dayid  and add the hour object to day with that dayid */

    addDayHour( startAt: string, closeAt: string, dayId: number ) {

        if ( startAt != "" && closeAt != "" ) {


            let hours: Hours = new Hours();

            if ( startAt == "24" || closeAt == "24" ) {
                hours.startAt = '00:00';
                hours.closeAt = '23:59';

            }
            else {

                hours.startAt = startAt;
                hours.closeAt = closeAt;
            }

            for ( let i = 0; i < this.workingDays.length; i++ ) {

                if ( this.workingDays[i].equal( dayId ) ) {

                    let hoursArr: Hours[] = this.workingDays[i].hours;

                    if ( hoursArr.length == 0 ) {

                        hoursArr.push( hours );

                    }
                    else {

                        let isExist: boolean = false;

                        for ( let j = 0; j < hoursArr.length; j++ ) {


                            if ( hoursArr[j].equal( hours ) ) {

                                isExist = true;
                            }

                        }

                        if ( !isExist ) {
                            hoursArr.push( hours );
                        }
                    }

                    this.workingDays[i].hours = hoursArr;
                }
            }



        }


    }



    /** getADayIndex  method get the index value of the day in the workingday array 
     *  it check by using the dayid */

    public getADayIndex( dayId: number ): number {

        let dayIndex: number;


        if ( this.workingDays.length > 0 ) {

            for ( let i = 0; i < this.workingDays.length; i++ ) {

                if ( this.workingDays[i].dayId == dayId ) {
                    dayIndex = i;
                }
            }

        }

        return dayIndex;

    }

    /** get a day method get the day object from workingday array using dayid */
    getADay( dayid: number ): Day {
        let day: Day = this.workingDays[this.getADayIndex( dayid )];

        if ( day == undefined ) {
            day = new Day();
        }
        return day;
    }

    /** getTimeLabel get the label value for a time the label value is for display only */
    getTimeLabel( value: string ): string {
        for ( let i = 0; i < this.hourListOption.length; i++ ) {

            if ( this.hourListOption[i].value == value ) {
                return this.hourListOption[i].label;
            }
        }

        return "";
    }

    /** hourDelete method remove a perticular hour value from a day present in the workingDays array
     *  it do so by  using the dayid and hour index value */
    hourDelete( dayid: number, hourIndex: number ) {
        this.workingDays[this.getADayIndex( dayid )].hours.splice( hourIndex, 1 );
    }


    /** hourSelected method run whenever use select a hour value this method check if user
     *  is choose the 24 hour value if so then we remove all the previous value and add only 
     *  one value for 24 hours */

    hourSelected( value: string, dayid: number ) {
        console.log( this.workingDays );
        let hour: Hours = new Hours();
        hour.startAt = "00:00";
        hour.closeAt = '23:59';
        let hourArr: Hours[] = new Array();

        if ( value == "24" ) {


            hourArr.push( hour );

            this.workingDays[this.getADayIndex( dayid )].hours = hourArr;

        }

        else {
            for ( let i = 0; i < this.workingDays[this.getADayIndex( dayid )].hours.length; i++ ) {

                if ( this.workingDays[this.getADayIndex( dayid )].hours[i].equal( hour ) ) {

                    this.workingDays[this.getADayIndex( dayid )].hours.splice( i, 1 );

                }
            }
        }


    }




}