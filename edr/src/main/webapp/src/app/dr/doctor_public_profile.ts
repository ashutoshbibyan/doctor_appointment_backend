import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DoctorService } from "./doctor_service";
import { Doctor } from "./doctor";
import { CommonService } from "../common/common_service";

@Component( {
    selector: "doc-public-profile",
    templateUrl: "./html/doctor_public_profile.html",
    styleUrls: ["./css/doctor_public_profile.css"]
} )

export class DoctorPublicProfile {

    docId: string;

    doctor: Doctor = new Doctor();

    constructor( private acroute: ActivatedRoute, private doctorService: DoctorService
        , private commonService: CommonService ) {

    }

    ngOnInit() {

        this.acroute.params.subscribe(( data ) => {
            this.docId = data["docId"];

        } );

        this.getDoctor();

    }

    getDoctor() {

        this.doctorService.getDocUsingId( this.docId ).subscribe(( data ) => {
            if ( data.status != 204 ) {
                this.doctor = data.json();
                this.doctor.workingDays = this.doctorService.deseralizeWorkingDays( this.doctor.workingDays );

            }
        } );

    }


}