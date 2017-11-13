import { Disease } from "../model/disease";


export class Patient {
    public name: string;
    public phoneNo: string;
    public diseases: Disease[] = new Array();
    public dateOfBirth: Date = new Date();

}