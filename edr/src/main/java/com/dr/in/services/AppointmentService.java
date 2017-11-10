package com.dr.in.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.querydsl.QPageRequest;
import org.springframework.stereotype.Service;

import com.dr.in.model.Appointment;
import com.dr.in.model.FormResult;
import com.dr.in.model.QAppointment;
import com.dr.in.repository.AppointmentRepository;
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



	public List<Appointment> getDocAppointment(String docId) {
		QAppointment qappointment = new QAppointment("appointment");
		
		Predicate predicate= qappointment.doctorId.eq(docId);
		
		
		return (List<Appointment>) this.appointmentRepository.findAll(predicate);
	}
	
	
	public List<Appointment> getDocAppointmentOfMonth(Date from , Date to){
		QAppointment qappointment=new QAppointment("appointment");
		Predicate predicate=qappointment.date.between(from, to);
		
		OrderSpecifier<Date> order= qappointment.date.asc();
		
		
		return (List<Appointment>) this.appointmentRepository.findAll(predicate,order);
	}
	
	public List<Appointment> getAppointmentOfSpecificDate(Date date){
		
		QAppointment qappointment=new QAppointment("appointment");
		
		Predicate predicate =qappointment.date.eq(date);
		
		return (List<Appointment>) this.appointmentRepository.findAll(predicate);
		
	}
	
	
}
