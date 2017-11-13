import { Component } from "@angular/core";
import { FormResult } from "../model/formresult";
import { Degree } from "../model/degree";
import { SiteAdminService } from "./site_admin_service";

@Component( {
    selector: "list-degree",
    templateUrl: "./html/list_degree.html"
} )

export class SiteAdminListDegree {

    formResult: FormResult = new FormResult();

    degrees: Degree[];

    constructor( private siteAdminService: SiteAdminService ) {

    }

    ngOnInit() {
        this.siteAdminService.getAllDegree().subscribe(( data ) => {
            if ( data != undefined ) {
                this.degrees = data.json();
            }
        } );
    }
}