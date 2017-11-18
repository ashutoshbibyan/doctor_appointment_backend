import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AddressForm } from "./address_form";
import { CommonService } from "./common_service";
import { MaterialModule } from "../material/material.module";
import { CommonModule } from "@angular/common";


@NgModule( {
    imports: [MaterialModule, CommonModule, ReactiveFormsModule],
    declarations: [AddressForm],
    exports: [AddressForm],
    providers: [CommonService]
} )

export class AppCommonModule {

}