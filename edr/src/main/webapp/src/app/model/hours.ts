import { LocalTime } from "js-joda";
export class Hours {
    public startAt: LocalTime = new LocalTime();
    public closeAt: LocalTime = new LocalTime();
    public maxPatientNo: number;





    constructor( startAt?: LocalTime, closeAt?: LocalTime, maxPatientNo?: number ) {
        this.startAt = startAt;
        this.closeAt = closeAt;
        this.maxPatientNo = maxPatientNo;
    }

    /** desearialize method takes  the json object of the hour object and create a new hour object 
     *  and return it new object have parameter and method of the hour object */
    deserialize( obj: Hours ) {

        let start: LocalTime = LocalTime.of( obj.startAt[0], obj.startAt[1] );
        let end: LocalTime = LocalTime.of( obj.closeAt[0], obj.closeAt[1] );
        return new Hours( start, end, obj.maxPatientNo );
    }


    public equal( hours: Hours ): boolean {

        let result: boolean = false;
        console.log( hours );
        console.log( this.startAt );
        console.log( this.closeAt );
        if ( ( hours.startAt.compareTo( this.startAt ) === 0 ) && ( hours.closeAt.compareTo( this.closeAt ) === 0 ) ) {

            if ( this.maxPatientNo == hours.maxPatientNo ) {
                result = true;
            }

        }
        return result;
    }
}