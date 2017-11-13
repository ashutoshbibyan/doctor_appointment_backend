import { Component } from "@angular/core";
import { Error } from "../error";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "./user";
import { UserService } from "./user_service";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component( {
    selector: "user-signup",
    templateUrl: "./html/user_signup.html"
} )
export class UserSignup {


    model: any = new Object();
    error: Error = new Error();


    userSignupForm: FormGroup;

    email: FormControl = new FormControl( "", [
        Validators.required,
        Validators.pattern( EMAIL_REGEX )
    ] );
    role: FormControl = new FormControl( "", [
        Validators.required
    ] );
    password: FormControl = new FormControl( "", [
        Validators.required
    ] );


    constructor( private formBuilder: FormBuilder, private userService: UserService ) {

    }

    ngOnInit() {
        this.userSignupForm = this.formBuilder.group( {
            email: this.email,
            role: this.role,
            password: this.password
        } );
    }

    submit() {

        let user: User = new User();
        user.email = this.userSignupForm.value.email;
        user.password = this.userSignupForm.value.password;
        user.role = this.userSignupForm.value.role;

        this.userService.userSignup( user ).subscribe(( data ) => {
            console.log( data );
        } );

    }

}