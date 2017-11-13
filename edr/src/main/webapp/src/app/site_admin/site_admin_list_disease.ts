import { Component } from "@angular/core";
import { Disease } from "../model/disease";
import { SiteAdminService } from "./site_admin_service";


@Component( {
    selector: "list-disease",
    templateUrl: "./html/list_disease.html"
} )

export class SiteAdminListDisease {

    diseases: Disease[];

    constructor( private siteAdminService: SiteAdminService ) {

    }

    ngOnInit() {
        this.siteAdminService.getAllDisease().subscribe(( data ) => {
            if ( data != undefined ) {
                this.diseases = data.json();
            }
        } );
    }

}