import { Component } from "@angular/core";
import { Disease } from "../model/disease";
import { SiteAdminService } from "./site_admin_service";
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";



@Component( {
    selector: "add-disease",
    templateUrl: "./html/add_disease.html"
} )
export class SiteAdminAddDisease {


    diseaseForm: FormGroup;

    diseaseName: FormControl = new FormControl( "", [

        Validators.required

    ] );



    diseaseDiscription: FormControl = new FormControl( "", [

        Validators.required
    ] );


    constructor( private formBuilder: FormBuilder, private siteAdminService: SiteAdminService ) {

    }


    ngOnInit() {

        this.diseaseForm = this.formBuilder.group( {

            diseaseName: this.diseaseName,
            diseaseDiscription: this.diseaseDiscription

        } );


    }

    submit() {
        let disease: Disease = new Disease();
        disease.diseaseName = this.diseaseForm.value.diseaseName;
        disease.diseaseDiscription = this.diseaseForm.value.diseaseDiscription;
        this.siteAdminService.saveDisease( disease ).subscribe(( data ) => {
            console.log( data );
        } );
    }

}