import { Component } from "@angular/core";
import { SiteAdminService } from "./site_admin_service";
import { State } from "../model/state";


@Component( {
    selector: "list-state",
    templateUrl: "./html/list_state.html"
} )
export class SiteAdminListState {

    states: State[];


    constructor( private siteAdminService: SiteAdminService ) {

    }

    ngOnInit() {

        this.siteAdminService.getAllState().subscribe(( data ) => {
            if ( data != undefined ) {
                this.states = data.json();
            }
        } );

    }

}