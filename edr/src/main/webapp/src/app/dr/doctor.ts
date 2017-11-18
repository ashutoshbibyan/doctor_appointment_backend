import { Address } from "../model/address";
import { TimeSlot } from "../model/timeslot";

import { Degree } from "../model/degree";
import { Speciality } from "../model/speciality";


export class Doctor {

    public docId: string;
    public name: string;
    public about: string;
    public degrees: Degree[];
    public maxAppointments: number;
    public specialities: Speciality[];
    public workingDays: number[];
    public addrLineOne: string;
    public addrLineTwo: string;
    public state: string;
    public city: string;
    public phoneno: string;
    public appointmentFee: number;
    public timeSlots: TimeSlot[] = new Array();

    public holidays: Date[];




}