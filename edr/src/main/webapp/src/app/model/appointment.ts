
import { Hours } from "../model/hours";


export class Appointment {

    public appointmentId: string;
    public date: Date;
    public doctorId: string;
    public patientId: string;
    public doctorName: string;
    public patientName: string;
    public patientPhoneNo: string;
    public status: string;
    public refund: boolean;
    public hours: Hours;


    // deserialization method takes an object and return a appointment object

    deserialization( json: any ) {

        let appointment: Appointment = new Appointment();
        appointment.appointmentId = json.appointmentId;
        appointment.date = json.date;
        appointment.doctorId = json.doctorId;
        appointment.patientId = json.patientId;
        appointment.doctorName = json.doctorName;
        appointment.patientName = json.patientName;
        appointment.patientPhoneNo = json.patientPhoneNo;
        appointment.status = json.status;
        appointment.refund = json.refund;

        appointment.hours = new Hours();
        appointment.hours = appointment.hours.deserialize( json.hours );

        return appointment;
    }

}
