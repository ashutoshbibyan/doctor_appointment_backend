
import { Hours } from "./hours";



export class Day {
    public dayName: string;
    public dayId: number;
    public dayStatus: string = "Closed";
    public checked: boolean = false;
    public hours: Hours[] = new Array();



    constructor( dayName?: string, dayId?: number, dayStatus?: string, checked?: boolean, hours?: Hours[] ) {
        this.dayName = dayName;
        this.dayId = dayId;
        this.dayStatus = dayStatus;
        this.checked = checked;
        this.hours = hours;

    }


    /** deserialize method takes a json object of the day object and return a new object which 
     *  have all the parameter and method of the day object */

    public deserialize( obj: Day ): Day {

        let hourArr: Hours[] = new Array();

        for ( let i = 0; i < obj.hours.length; i++ ) {
            let hour: Hours = new Hours();
            hour = hour.deserialize( obj.hours[i] );
            hourArr.push( hour );
        }

        return new Day( obj.dayName, obj.dayId, obj.dayStatus, obj.checked, hourArr );

    }


    public equals( dayid: number ): boolean {

        if ( this.dayId == dayid ) {
            return true;
        }

        return false;
    }

    public isChecked() {
        let result: boolean;
        if ( this.dayStatus == "Open" ) {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    }
}