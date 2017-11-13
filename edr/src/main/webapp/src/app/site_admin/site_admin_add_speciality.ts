import { Component } from "@angular/core";

import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { Degree } from "../model/degree";

import { Speciality } from "../model/speciality";
import { FormResult } from "../model/formresult";

import { SiteAdminService } from "./site_admin_service";

@Component( {
    selector: "add-speciality",
    templateUrl: "./html/add_speciality.html"
} )

export class SiteAdminAddSpeciality {

    specialityForm: FormGroup;

    degrees: Degree[];

    result: FormResult = new FormResult();



    speciality: FormControl = new FormControl( '', [] );

    constructor( private formBuilder: FormBuilder, private siteAdminService: SiteAdminService ) {

    }

    ngOnInit() {
        this.getDegreelist();
        this.specialityForm = this.formBuilder.group( {
            speciality: this.speciality

        } );
    }

    getDegreelist() {
        this.siteAdminService.getAllDegree().subscribe(( data ) => {
            if ( data != undefined ) {
                this.degrees = data.json();
            }
        } );
    }

    submit() {

        let speciality: Speciality = new Speciality();
        speciality.specialityName = this.specialityForm.value.speciality;

        this.siteAdminService.addSpeciality( speciality ).subscribe(( data ) => {
            if ( data != undefined ) {
                this.result = data.json();
            }

        } );
    }

}