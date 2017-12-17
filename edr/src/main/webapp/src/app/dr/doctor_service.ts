import { Injectable } from "@angular/core";
import { RequestOptions, Headers, Http, URLSearchParams } from "@angular/http";
import { Doctor } from "./doctor";
import { Appointment } from "../model/appointment";
import { Hours } from "../model/hours";
import { Day } from "../model/day";
import { Observable } from "rxjs";



@Injectable()

export class DoctorService {

    headers: Headers = new Headers( { 'Content-Type': 'application/json' } );
    commOptions: RequestOptions = new RequestOptions( { headers: this.headers } );


    constructor( private http: Http ) {

    }

    public saveDoctor( doctor: Doctor ) {
        let url = "/api/private/dr/signup";
        return this.http.post( url, doctor, this.commOptions );
    }

    public docAppointmentSetup( doctor: Doctor ) {
        let url = "/api/private/dr/appointment/setup";
        return this.http.post( url, doctor, this.commOptions );
    }

    public getAllState() {
        let url = "/api/public/dr/state/all";
        return this.http.get( url, this.commOptions );
    }

    public addHolidays( doctor: Doctor ) {
        let url = "/api/private/dr/holiday/add";
        return this.http.post( url, doctor, this.commOptions );
    }


    public getAllCities( stateId: string ) {
        let url = "/api/public/dr/city/all";
        let param = new URLSearchParams();
        param.set( "stateId", stateId );
        this.commOptions.params = param;
        return this.http.get( url, this.commOptions );
    }


    public getAllDegree() {
        let url = "/api/public/dr/degree/all";
        return this.http.get( url, this.commOptions );
    }


    public getAllSpeciality() {
        let url = "/api/public/dr/speciality/all";
        return this.http.get( url, this.commOptions );
    }


    public getAllHoliday() {
        let url = "/api/public/dr/holiday/all";
        return this.http.get( url, this.commOptions );
    }


    public getDoctorPublicInfo() {
        let url = "/api/public/dr/get/doctor";
        return this.http.get( url, this.commOptions );
    }

    public makeAppointment( appointment: Appointment ) {
        let url = "/api/private/dr/appointment/make";
        return this.http.post( url, appointment, this.commOptions );
    }

    public getDocAppointment() {
        let url = "/api/private/dr/get/appointment";
        return this.http.get( url, this.commOptions );
    }

    public getAppointmentOfPeriod( from: Date, to: Date ) {
        let url = "/api/private/dr/get/appointment/period";
        let param = new URLSearchParams();
        param.set( "from", from.getTime().toString() );
        param.set( "to", to.getTime().toString() );
        this.commOptions.params = param;

        return this.http.get( url, this.commOptions );


    }

    public getHolidayOfPeriod( from: Date, to: Date ) {
        let url = "/api/private/dr/get/holiday/period";
        let param = new URLSearchParams();
        param.set( "from", from.getTime().toString() );
        param.set( "to", to.getTime().toString() );

        this.commOptions.params = param;

        return this.http.get( url, this.commOptions );

    }


    public getTodayAppointment() {
        let url = "/api/private/dr/get/appointment/today";

        return this.http.get( url, this.commOptions );
    }

    /** saveWorkingDays method save the workingDays value to doctor object in database*/

    public saveWorkingDays( workingDays: Day[] ) {
        let url = "/api/private/dr/save/workingdays";
        let doctor: Doctor = new Doctor();

        doctor.workingDays = workingDays;

        return this.http.post( url, doctor, this.commOptions );
    }

    /********************************************************
     * CHECK THIS METHOD AND IMPROVE IT IF POSSIBLE  
     ********************************************************
     * getDoctorWorkingDays return the list working days from the database the data we get from the database is 
     *  different then the day object hours object have two string parameter but from database we get two string 
     *  array so we use fromLocalTimeToString method to convert it into hour object */

    getDoctorWorkingDays(): Day[] {
        let workingDays: Day[] = new Array();
        this.getDoctorPublicInfo().subscribe(( data ) => {

            if ( data != undefined ) {

                if ( data.json().workingDays != null ) {
                    for ( let i = 0; i < data.json().workingDays.length; i++ ) {
                        let day: Day = new Day();
                        day.dayId = data.json().workingDays[i].dayId;
                        day.dayName = data.json().workingDays[i].dayName;
                        day.dayStatus = data.json().workingDays[i].dayStatus;
                        day.checked = data.json().workingDays[i].checked;

                        for ( let j = 0; j < data.json().workingDays[i].hours.length; j++ ) {
                            let hour: Hours = new Hours();
                            hour.startAt = this.fromLocalTimeToString( data.json().workingDays[i].hours[j].startAt );
                            hour.closeAt = this.fromLocalTimeToString( data.json().workingDays[i].hours[j].closeAt );

                            day.hours.push( hour );

                        }


                        workingDays.push( day );
                    }


                }

                return workingDays;

            }
        } );

        // this will never get executed because value is returned before this statement 

        return workingDays;
    }

    /** fromLocalTimeToString method takes array of string which contain two string value one is for hour 
     *  and another is for minute and resturn the combined string value of time where hour and minute are 
     *  seperated by :*/
    fromLocalTimeToString( time: string[] ) {

        let result: string;

        // if its less than 10 its single digit so we add 0 before it 
        if ( parseInt( time[0] ) < 10 ) {



            if ( parseInt( time[1] ) == 0 ) {
                result = "0" + time[0] + ":" + "0" + time[1];

            }
            else {
                result = "0" + time[0] + ":" + time[1];

            }

        }
        else {
            // if its 0 its single digit 0 so we add 0 so it become 00
            if ( parseInt( time[1] ) == 0 ) {
                result = time[0] + ":" + "0" + time[1];
            }

            else {
                result = time[0] + ":" + time[1];
            }

        }

        return result;
    }

    /** patient exist method takes patient id as parameter and checks if the patient exist in 
     *  database or not */
    patientExist( patientId: string ) {
        let url: string = "/api/private/dr/patient/exist";
        let param: URLSearchParams = new URLSearchParams();
        param.set( "patientId", patientId );
        this.commOptions.params = param;
        return this.http.get( url, this.commOptions );
    }


}