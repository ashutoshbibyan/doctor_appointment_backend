import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Patient } from "./patient";


@Injectable()
export class PatientService {


    headers: Headers = new Headers( { 'Content-Type': 'application/json' } );
    commOptions: RequestOptions = new RequestOptions( { headers: this.headers } );


    constructor( private http: Http ) {

    }


    public getDiseaseList() {
        let url = "/api/public/disease/list";
        return this.http.get( url, this.commOptions );
    }


    /* patientsignup method takes patient class object as parameter and 
     * save it into database by sending a post request to rest services 
     * */

    public patientSignup( patient: Patient ) {
        let url = "/api/private/patient/signup";
        return this.http.post( url, patient, this.commOptions );
    }


    public getPatient() {
        let url = "/api/private/get/patient";
        return this.http.get( url );
    }



}