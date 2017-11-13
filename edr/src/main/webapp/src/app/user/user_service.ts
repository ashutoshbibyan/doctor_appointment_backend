import { Injectable } from "@angular/core";
import { RequestOptions, Headers, Http } from "@angular/http";
import { User } from "./user";




@Injectable()
export class UserService {

    headers: Headers = new Headers( { 'Content-Type': 'application/json' } );
    commOptions: RequestOptions = new RequestOptions( { headers: this.headers } );

    constructor( private http: Http ) {

    }


    userSignup( user: User ) {

        let url = "/api/public/signup/user";
        return this.http.post( url, user, this.commOptions );

    }
}