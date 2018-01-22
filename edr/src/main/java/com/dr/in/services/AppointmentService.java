package com.dr.in.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.querydsl.QPageRequest;
import org.springframework.stereotype.Service;

import com.dr.in.model.Appointment;
import com.dr.in.model.FormResult;
import com.dr.in.model.QAppointment;
import com.dr.in.repository.AppointmentRepository;
import com.fasterxml.jackson.databind.deser.std.DateDeserializers.CalendarDeserializer;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Predicate;

@Service
public class AppointmentService {

	@Autowired
	private Appointment appointment;
	
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	
	@Autowired
	private FormResult formResult;
	
	
	/** addAppointment method takes appointment object and save it into the database
	 * @param Appointment (object of the appointment class)
	 * @return FormResult (object of the form result class)*/
	public FormResult addAppointment(Appointment appointment){
		this.appointment=this.appointmentRepository.save(appointment);
		
		if(this.appointment!=null){
			this.formResult.setResult(true);
			this.formResult.setError(false);
			this.formResult.setMessage("Appointment is Made");
		}
		else {
			this.formResult.setResult(false);
			this.formResult.setError(true);
			this.formResult.setMessage("Something Went wrong while adding the appointment");
		}
		return this.formResult ;
	}



	/** getDocAppointment method takes doctor id as parameter and return the list of all the 
	 *  appointment for that doctor 
	 *  @param String (doctor id )
	 *  @return List<Appointment> (list of appointment class object )*/
	
	public List<Appointment> getDocAppointment(String docId) {
		QAppointment qappointment = new QAppointment("appointment");
		
		Predicate predicate= qappointment.doctorId.eq(docId);
		
		
		return (List<Appointment>) this.appointmentRepository.findAll(predicate);
		
	}


	/** getAppointmentUsingId method takes appointment id as parameter and return its object 
	 *  @param String (appointment id )
	 *  @return Appointment (object of the appointment class)*/

	public Appointment getAppointmentUsingId(String appointmentId) {
		// TODO Auto-generated method stub
		return this.appointmentRepository.findOne(appointmentId);
	}
	
	
	/** getDocAppointmentOfPeriod method takes three parameter starting date ending date and 
	 *  the doctor id 
	 * @param pageSize 
	 * @param pageNo 
	 *  @param Instant (starting date )
	 *  @param Instant (ending date )
	 *  @param String (doctor id )
	 *  @param int (page no )
	 *  @param int (page size)
	 *  @return List<Appointment> (list of appointment object)*/
	public Page<Appointment> getDocAppointmentOfPeriod(Instant from , Instant to, String docId, int pageNo, int pageSize){
		QAppointment qappointment=new QAppointment("appointment");
		Predicate betweendate=qappointment.date.after(from).and(qappointment.date.before(to));
		Predicate predicate=qappointment.doctorId.eq(docId).and(betweendate);

		OrderSpecifier<Instant> order= qappointment.date.asc();
		
		Sort sort = new Sort(Sort.Direction.ASC, "date");
		
		Pageable page= new PageRequest(pageNo, pageSize ,sort);
		
		
		return  this.appointmentRepository.findAll(predicate, page);
		
	}
	
	
	/** getAppointmentOfSpecificDate method takes two parameter a date and doctor id and 
	 *  return all the appointment of that doctor for that particular date 
	 *  @param Instant (date )
	 *  @param String (doctor id)
	 *  @param int (page no )
	 *  @param int (page size)
	 *  @return List<Appointment> (list of all the appointment object )*/
	public Page<Appointment> getAppointmentOfSpecificDate(Instant to,String docId ,int pageNo,int pageSize){
		
		
		    Instant from = to.minus(1,ChronoUnit.DAYS);
		
		
	    return this.getDocAppointmentOfPeriod(from, to ,docId,pageNo,pageSize);
	}


	/** getNoOfAppointments takes two parameter first is the date and second is the doctor id 
	 *  and return the no of appointments  that doctor have on that date 
	 *  @param Instant (date )
	 *  @param String  (doctor id )
	 *  @return int    (no of appointments on that day by that doctor )*/

	public int getNoOfAppointments(Instant date, String docId) {
		QAppointment qappointment=new QAppointment("appointment");
		Predicate predicate = qappointment.doctorId.eq(docId).and(qappointment.date.eq(date));
		 
		return (int) this.appointmentRepository.count(predicate);
		
	}
	
	
}
