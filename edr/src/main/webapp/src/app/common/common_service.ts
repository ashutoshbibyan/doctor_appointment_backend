import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { HourListOption } from "../model/hourListOptions";


@Injectable()
export class CommonService {

    hourListOption = HourListOption;

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

    /** getTimeLabel get the label value for a time the label value is for display only */
    getTimeLabel( value: string ): string {
        for ( let i = 0; i < this.hourListOption.length; i++ ) {

            if ( this.hourListOption[i].value == value ) {
                return this.hourListOption[i].label;
            }
        }

        return "";
    }


}