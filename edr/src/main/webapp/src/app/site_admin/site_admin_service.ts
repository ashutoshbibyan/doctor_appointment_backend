import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Disease } from "../model/disease";
import { Degree } from "../model/degree";
import { State } from "../model/state";
import { Speciality } from "../model/speciality";
import { City } from "../model/city";


@Injectable()
export class SiteAdminService {



    headers: Headers = new Headers( { 'Content-Type': 'application/json' } );
    commOptions: RequestOptions = new RequestOptions( { headers: this.headers } );

    constructor( private http: Http ) {

    }


    saveDisease( disease: Disease ) {
        let url = "/api/private/admin/disease/add";
        return this.http.post( url, disease, this.commOptions );
    }


    addState( state: State ) {
        let url = "/api/private/admin/state/add";
        return this.http.post( url, state, this.commOptions );
    }

    getAllState() {
        let url = "/api/public/state/all";
        return this.http.get( url, this.commOptions );
    }

    getAllCity( stateId: string ) {
        let url = "/api/public/city/all";
        let param: URLSearchParams = new URLSearchParams();
        param.set( "stateId", stateId );
        this.commOptions.params = param;
        return this.http.get( url, this.commOptions );
    }

    addCity( city: City, stateId: string ) {
        let url = "/api/private/admin/city/add";
        let body = { "city": city, "stateId": stateId };

        return this.http.post( url, body, this.commOptions );
    }


    addDegree( degree: Degree ) {
        let url = "/api/private/degree/add";
        return this.http.post( url, degree, this.commOptions );

    }

    getAllDegree() {
        let url = "/api/public/degree/all";
        return this.http.get( url, this.commOptions );
    }

    getAllDisease() {
        let url = "/api/public/disease/all";
        return this.http.get( url, this.commOptions );
    }

    addSpeciality( speciality: Speciality ) {
        let url = "/api/private/speciality/add";
        return this.http.post( url, speciality, this.commOptions );
    }



}