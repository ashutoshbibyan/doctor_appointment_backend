import { Component, HostListener } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { PatientService } from "./patient_service";
import { CommonService } from "../common/common_service";
import { State } from "../model/state";
import { City } from "../model/city";
import { Doctor } from "../dr/doctor";
import { DoctorInPatient } from "../model/doctorInPatient";


@Component( {
    selector: "search-doc-using-docname",
    templateUrl: "./html/search_doc_using_docname.html"
} )
export class SearchDocUsingDocName {


    searchUsingDocNameForm: FormGroup;

    doctorList: Doctor[] = new Array();

    showDoc: boolean = false;

    pageNo: number;

    totalPages: number;

    pageSize: number = 10;

    states: State[] = new Array();

    cities: City[] = new Array();

    docName: FormControl = new FormControl( "", [] );

    state: FormControl = new FormControl( "", [] );

    city: FormControl = new FormControl( "", [] );


    constructor( private formBuilder: FormBuilder, private patientService: PatientService,
        private commonService: CommonService ) {


    }

    ngOnInit() {
        this.searchUsingDocNameForm = this.formBuilder.group( {
            "docName": this.docName,
            "state": this.state,
            "city": this.city
        } );

        this.getAllStates();
    }

    /* state selected excute when user select a state from the list and it 
     * change the list of city according to that  state */

    stateSelected() {
        this.getAllCities( this.state.value );
    }

    /* getAllStates method get all the state from the database and put it into the 
     *  states object */
    getAllStates() {
        this.commonService.getAllState().subscribe(( data ) => {
            if ( data != undefined ) {
                this.states = data.json();
            }
        } );
    }

    /** getAllCities method takes state name as parameter and get all the city 
     *  for that state */
    getAllCities( stateName: string ) {
        this.commonService.getAllCities( stateName ).subscribe(( data ) => {
            if ( data != undefined ) {
                this.cities = data.json();
            }
        } );

    }

    /** submit method get executed when user click on submit button it load the first page of the 
     *  doctor with that name */

    submit() {

        this.pageNo = 0;

        this.patientService.getDoctorUsingName( this.docName.value, this.state.value, this.city.value, this.pageNo, this.pageSize ).subscribe(( data ) => {
            if ( data != undefined ) {
                this.showDoc = true;
                this.doctorList = data.json().content;
                this.totalPages = data.json().totalPages;
                console.log( data.json() );
            }
        } );

        console.log( this.searchUsingDocNameForm.value );
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
                this.patientService.getDoctorUsingName( this.docName.value, this.state.value,
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