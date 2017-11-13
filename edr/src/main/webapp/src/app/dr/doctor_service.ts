import { Injectable } from "@angular/core";
import { RequestOptions, Headers, Http, URLSearchParams } from "@angular/http";
import { Doctor } from "./doctor";
import { Appointment } from "../model/appointment";



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



}