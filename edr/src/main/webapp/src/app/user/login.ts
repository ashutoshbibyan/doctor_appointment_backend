import { Component } from "@angular/core";
import { User } from "./user";
import { Router } from "@angular/router";
import { UserService } from "./user_service";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component( {
    selector: "log-in",
    templateUrl: "./html/login.html",
    styleUrls: ["./css/login.css"]
} )

export class LogIn {

    model: User = new User();

    loginForm: FormGroup;

    email: FormControl = new FormControl( "", [

        Validators.required,
        Validators.pattern( EMAIL_REGEX )

    ] );

    password: FormControl = new FormControl( "", [
        Validators.required

    ] );

    constructor( private formBuilder: FormBuilder, private userService: UserService, private router: Router ) {

    }

    ngOnInit() {

        this.loginForm = this.formBuilder.group( {
            email: this.email,
            password: this.password
        } );

    }


    submit() {
        let user: User = new User();
        user.email = this.loginForm.value.email;
        user.password = this.loginForm.value.password;
        this.userService.userLogin( user ).subscribe(( data ) => {
            if ( data != undefined ) {

                let res = data.url;
                res = res.replace( "http://localhost:8080", "" );
                this.router.navigateByUrl( res );


            }
        } );

    }

}