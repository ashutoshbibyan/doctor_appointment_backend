import { Component } from "@angular/core";
import { SiteAdminService } from "./site_admin_service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { City } from "../model/city";
import 'rxjs/add/operator/switchMap';


@Component( {
    selector: "list-city",
    templateUrl: "./html/list_city.html"
} )

export class SiteAdminListCity {


    stateId: string;

    cities: City[];


    constructor( private siteAdminService: SiteAdminService, private acroute: ActivatedRoute ) {


    }

    ngOnInit() {
        this.acroute.paramMap.switchMap(( params: ParamMap ) => this.siteAdminService.getAllCity( params.get( 'stateId' ) ) )
            .subscribe(( data ) => {
                if ( data.text() != "" ) {
                    this.cities = data.json();
                }
            } );

    }

}