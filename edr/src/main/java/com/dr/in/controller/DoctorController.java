package com.dr.in.controller;

import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dr.in.model.Appointment;
import com.dr.in.model.City;
import com.dr.in.model.Degree;
import com.dr.in.model.Doctor;
import com.dr.in.model.FormResult;
import com.dr.in.model.Speciality;
import com.dr.in.model.State;
import com.dr.in.repository.DoctorRepository;
import com.dr.in.services.CommonServices;
import com.dr.in.services.DoctorService;

@RestController
public class DoctorController {
	
	
	@Autowired
	private CommonServices commonService;
	
	
	
	
	@Autowired
	private DoctorService doctorService;
	
	
	@PostMapping(path="/api/private/dr/appointment/make")
	public FormResult docMakeAppointment(@RequestBody Appointment appointment){
		appointment.setDoctorId("doctor@gmail.com");
		return this.doctorService.makeAppointment(appointment);
	}
	
	
	@PostMapping(path="/api/private/dr/signup")
	public FormResult docSignup(@RequestBody Doctor doctor){
		// hardcoded right now will be replaced by pricipal object 
		
		doctor.setDocId("doctor@gmail.com");
		return this.doctorService.doctorSignup(doctor);
	}

	@PostMapping(path="/api/private/dr/appointment/setup")
	public FormResult docAppointmentSetup(@RequestBody Doctor doctor){
		// hardcoded value will be changed 
		doctor.setDocId("doctor@gmail.com");
		return this.doctorService.docAppointmentSetup(doctor);
	}
	
	@PostMapping(path="/api/private/dr/holiday/add")
	public FormResult docAddHoliday(@RequestBody Doctor doctor){
		doctor.setDocId("doctor@gmail.com");
		return this.doctorService.addHolidays(doctor);
	}
	
	@GetMapping(path="/api/private/dr/get/appointment")
	public List<Appointment> getDocAppointment(){
		String docId="doctor@gmail.com";
		return this.doctorService.getAppointment(docId);
	}
	
	@GetMapping(path="/api/public/dr/state/all")
	public List<State> getStates(){
		
		return this.commonService.getAllState();
		
	}
	
	@GetMapping(path="/api/public/dr/city/all")
	public List<City>  getCities(@RequestParam String stateId){
		return this.commonService.getAllCity(stateId);
	}
	
	
	@GetMapping(path="/api/public/dr/degree/all")
	public List<Degree> getDegreeList(){
		return this.commonService.getDegreeList();
	}
	
	@GetMapping(path="/api/public/dr/speciality/all")
	public List<Speciality> getSpecialityList(){
		
		return this.commonService.getSpecialiyList();
	}
	
	
	@GetMapping(path="/api/public/dr/holiday/all")
	public List<Date> getAllHoliday(){
		String docId="doctor@gmail.com";
		return this.doctorService.getAllHoliday(docId);
	}
	
	@GetMapping(path="/api/public/dr/get/doctor")
	public Doctor getDotor(){
		String docId="doctor@gmail.com";
		return this.doctorService.getPublicDoctor(docId);
	}
	
	@GetMapping(path="/api/private/dr/get/appointment/period")
	public List<Appointment> getAppointmentPeriod(){
		Date from=new Date(2017, 11, 01);
		Date to=new Date(2017,11,30);
		return this.doctorService.getAppointmentPeriod(from,to);
	}
	
	@GetMapping(path="/api/private/dr/get/appointment/today")
	
	public List<Appointment> getTodayAppointment(){
		Date today=new Date();
		
		System.out.println(today);
		
	    
		return this.doctorService.getTodayAppointment(today);
	}
	
}
