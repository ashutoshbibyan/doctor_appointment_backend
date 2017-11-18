import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, URLSearchParams } from "@angular/http";


@Injectable()
export class CommonService {


    headers: Headers = new Headers( { 'Content-Type': 'application/json' } );
    commOptions: RequestOptions = new RequestOptions( { headers: this.headers } );


    constructor( private http: Http ) {

    }


    public getAllState() {
        let url = "/api/public/dr/state/all";
        return this.http.get( url, this.commOptions );
    }

    public getAllCities( stateId: string ) {
        let url = "/api/public/dr/city/all";
        let param = new URLSearchParams();
        param.set( "stateId", stateId );
        this.commOptions.params = param;
        return this.http.get( url, this.commOptions );
    }


}