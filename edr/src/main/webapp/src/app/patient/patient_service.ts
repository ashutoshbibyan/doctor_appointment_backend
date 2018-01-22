import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Patient } from "./patient";
import { Speciality } from "../model/speciality";
import { DoctorInPatient } from "../model/doctorInPatient";

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


    public getDocForPatient() {
        let url = "/api/private/patient/get/doctor";
        return this.http.get( url, this.commOptions );
    }


    /** getDoctorUsingDocId method takes doctor id as parameter and return 
     * the doctor object as the  result */
    public getDoctorUsingDocId( docId: string ) {
        let url: string = "/api/public/patient/search/doctor/docid";
        let param: URLSearchParams = new URLSearchParams();
        param.set( "docId", docId );
        this.commOptions.params = param;
        return this.http.get( url, this.commOptions );
    }


    /* getDoctorUsingName method takes doctor name , state id , city name , page no and page size as parameter 
     * and return the list of doctor */

    public getDoctorUsingName( docName: string, stateId: string, cityName: string, page: number, pageSize: number ) {
        let url = "/api/public/patient/search/doctor/docname";
        let param: URLSearchParams = new URLSearchParams();
        param.set( "docName", docName );
        param.set( "stateId", stateId );
        param.set( "cityName", cityName );
        param.set( "page", page.toString() );
        param.set( "pageSize", pageSize.toString() );
        this.commOptions.params = param;

        return this.http.get( url, this.commOptions );
    }


    /** getDoctorUsingSpeciality method takes doctor specialiy , state id , city name ,page no and page size as parameter
     * and return the page object with the list of doctor */

    public getDoctorUsingSpeciality( docSpeciality: string, stateId: string, cityName: string, page: number, pageSize: number ) {



        let url = "/api/public/patient/search/doctor/docspeciality";
        let param: URLSearchParams = new URLSearchParams();
        param.set( "docSpeciality", docSpeciality );
        param.set( "stateId", stateId );
        param.set( "cityName", cityName );
        param.set( "page", page.toString() );
        param.set( "pageSize", pageSize.toString() );
        this.commOptions.params = param;

        return this.http.get( url, this.commOptions );
    }


    /** addDoctor method takes the doctorinpatient object and add it into the list of doctors in patient 
     *  object */

    public addDoctor( doctorInPatient: DoctorInPatient ) {
        let url = "/api/private/patient/add/doctor";

        return this.http.post( url, doctorInPatient, this.commOptions );
    }


    /** getPatientDoctors method get all the doctors present in the patient object */
    public getPatientDoctors() {
        let url = "/api/private/patient/get/doctors";
        return this.http.get( url, this.commOptions );
    }


    /** deleteDoctorFromPatient takes the doctorinpatient object and remove it from the list 
     *  of doctors in the patient object */

    public deleteDoctorFromPatient( doctorInPatient: DoctorInPatient ) {
        let url = "/api/private/patient/delete/doctor";
        return this.http.post( url, doctorInPatient, this.commOptions );
    }


}