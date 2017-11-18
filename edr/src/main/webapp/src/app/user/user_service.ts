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

    userLogin( user: User ) {
        let url = "/user/login";

        let body = new URLSearchParams();

        body.set( "userName", user.email );
        body.set( "password", user.password );

        let headers = new Headers( { 'Content-Type': 'application/x-www-form-urlencoded' } );

        let options = new RequestOptions( { headers: headers } );

        return this.http.post( url, body.toString(), options );
    }
}