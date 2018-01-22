import { Component, HostListener } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Speciality } from "../model/speciality";
import { State } from "../model/state";
import { CommonService } from "../common/common_service";
import { PatientService } from "./patient_service";
import { City } from "../model/city";
import { Doctor } from "../dr/doctor";
import { DoctorInPatient } from "../model/doctorInPatient";


@Component( {
    selector: "search-doc-using-speciality",
    templateUrl: "./html/search_doc_using_speciality.html"
} )
export class SearchDocUsingSpeciality {


    searchDocUsingSpecialityForm: FormGroup;

    pageNo: number;

    totalPages: number;

    showDoc: boolean = false;

    pageSize: number = 10;

    doctorList: Doctor[] = new Array();

    specialities: Speciality[] = new Array();

    states: State[] = new Array();

    cities: City[] = new Array();

    speciality: FormControl = new FormControl( "", [] );
    state: FormControl = new FormControl( "", [] );
    city: FormControl = new FormControl( "", [] );



    constructor( private formBuilder: FormBuilder, private commonService: CommonService,
        private patientService: PatientService ) {

    }


    ngOnInit() {
        this.searchDocUsingSpecialityForm = this.formBuilder.group( {
            "speciality": this.speciality,
            "state": this.state,
            "city": this.city
        } );

        this.getAllSpecialities();
        this.getAllStates();
    }

    /** stateSelected method execute when user select a state it get all the cities exist in that 
     *  state object*/
    stateSelected() {
        this.getAllCities( this.state.value );
    }

    /** getAllSpecialities method get list of specialities from the database and put it in 
     *  the select options */
    getAllSpecialities() {
        this.commonService.getAllSpeciality().subscribe(( data ) => {
            if ( data != undefined ) {
                this.specialities = data.json();
            }
        } );
    }

    /** getAllStates method get the list of all the state from the database*/
    getAllStates() {
        this.commonService.getAllState().subscribe(( data ) => {
            if ( data != undefined ) {
                this.states = data.json();
            }
        } );
    }

    /** getAllCities method get list of all the cities using the stateid provided */
    getAllCities( stateId: string ) {
        this.commonService.getAllCities( stateId ).subscribe(( data ) => {
            if ( data != undefined ) {
                this.cities = data.json();
            }
        } );
    }


    /** submit executed when user click on the submit button it get the first page of doctor 
     *  list and put it into doctorlist variable */
    submit() {
        this.pageNo = 0;
        this.patientService.getDoctorUsingSpeciality( this.speciality.value, this.state.value
            , this.city.value, this.pageNo, this.pageSize ).subscribe(( data ) => {
                if ( data != undefined ) {
                    this.showDoc = true;
                    this.totalPages = data.json().totalPages;
                    this.doctorList = data.json().content;
                }
            } );
    }


    /** addDoctor method takes the doctor object and add it into the list of doctors present in the 
     *  patient object */

    addDoctor( doctor: Doctor ) {

        let doctorInPatient: DoctorInPatient = new DoctorInPatient();
        doctorInPatient.docId = doctor.docId;
        doctorInPatient.name = doctor.name;
        doctorInPatient.phoneno = doctor.phoneno;
        doctorInPatient.appointmentFee = doctor.appointmentFee;

        this.patientService.addDoctor( doctorInPatient ).subscribe(( data ) => {
            console.log( data.json() );
        } );

    }


    /** this method is binded with the scroll event of the document and it get executed when user 
     * reached at the end of the page and it add more doctor into the list */

    @HostListener( "window:scroll", [] )
    onScroll(): void {
        if ( ( window.innerHeight + window.scrollY ) >= document.body.offsetHeight ) {
            // you're at the bottom of the page
            if ( this.pageNo < this.totalPages ) {


                this.pageNo = this.pageNo + 1;
                this.patientService.getDoctorUsingSpeciality( this.speciality.value, this.state.value,
                    this.city.value, this.pageNo, this.pageSize ).subscribe(( data ) => {
                        if ( data != undefined ) {
                            // adds the new array to the previous doctor list 
                            this.doctorList.push.apply( this.doctorList, data.json().content );

                        }

                    } );
            }
        }


    }


}