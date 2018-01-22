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

    /** getAllState method get all the state list present in database */

    public getAllState() {
        let url = "/api/public/dr/state/all";
        return this.http.get( url, this.commOptions );
    }

    /** getAllCities method get all the cities for a perticular state */

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


    public getAllDegree() {
        let url = "/api/public/dr/degree/all";
        return this.http.get( url, this.commOptions );
    }


    public getAllSpeciality() {
        let url = "/api/public/dr/speciality/all";
        return this.http.get( url, this.commOptions );
    }


}