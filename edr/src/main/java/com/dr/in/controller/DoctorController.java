package com.dr.in.controller;

import com.dr.in.model.Principal;
import java.time.Instant;
import java.time.LocalDate;
import java.time.chrono.IsoEra;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.time.temporal.ChronoUnit;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
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
import com.dr.in.model.User;
import com.dr.in.repository.DoctorRepository;
import com.dr.in.services.CommonServices;
import com.dr.in.services.DoctorService;

@RestController
public class DoctorController {
	
	
	@Autowired 
	private CommonServices commonService;
	
	
	
	
	@Autowired
	private DoctorService doctorService;
	
	
	/**docMakeAppointmet method a new appointment it takes appointment object as 
	  parameter and add it to database 
	  @param:Appointment(object of the class Appointment)
	  @return:FormResult(object of the formresult class)
	
	*/
	
	@PostMapping(path="/api/private/dr/appointment/make")
	public FormResult docMakeAppointment(@RequestBody Appointment appointment ,Principal currentUser){
		
		appointment.setDoctorId(currentUser.getName());
		
		return this.doctorService.makeAppointment(appointment);
	}
	
	
	/** docSignup method takes doctor object and save it this method is called to 
	 *  finish the doctor sign up process 
	 *  @param Doctor (object of doctor class)
	 *  @return FormResult (object of the formresult class)*/
	
	@PostMapping(path="/api/private/dr/signup")
	public FormResult docSignup(@RequestBody Doctor doctor , Principal currentUser){
		// hardcoded right now will be replaced by pricipal object 
		
		doctor.setDocId(currentUser.getName());
		return this.doctorService.doctorSignup(doctor);
	}

	
	/** docAppointmentSetup method deal with the form which save the 
	 *  appointment related setting for a doctor it take doctor object 
	 *  which have the appointment related setting and save the new doctor object 
	 *  @param Doctor (object of the class doctor)
	 *  @return FormResult(object of the class formresult)*/
	@PostMapping(path="/api/private/dr/appointment/setup")
	public FormResult docAppointmentSetup(@RequestBody Doctor doctor , Principal currentUser){
		// hardcoded value will be changed 
		doctor.setDocId(currentUser.getName());
		return this.doctorService.docAppointmentSetup(doctor);
	}
	
	
	
	/** docAddHoliday method add the new holidays to the doctor it takes doctor
	 *  object which only contain the new holidays list and it add them to the 
	 *  existing object of doctor saved in the database 
	 *  @param Doctor(object of the doctor class)
	 *  @return FormResult(object of the formresult class)*/
	
	@PostMapping(path="/api/private/dr/holiday/add")
	public FormResult docAddHoliday(@RequestBody Doctor doctor ,Principal currentUser){
		doctor.setDocId(currentUser.getName());
		
		return this.doctorService.addHolidays(doctor);
	}
	
	
	/**getAppointment method get all the appointment made by a doctor 
	 * it takes no parameter and return the list of appointments 
	 * @return List<Appointment> (list of the appointment class objects)*/
	
	@GetMapping(path="/api/private/dr/get/appointment")
	public List<Appointment> getDocAppointment(Principal currentUser){
		
		return this.doctorService.getAppointment(currentUser.getName());
	}
	
	
	/** getStates method get the list of all the states in the database it 
	 *  takes no parameter and return list of states 
	 *  @return List<State> (list of the state class object )*/
	@GetMapping(path="/api/public/dr/state/all")
	public List<State> getStates(){
		
		return this.commonService.getAllState();
		
	}
	
	/** getCities method get all the list of cities for a perticular state it 
	 * 	takes state id as a parameter and return the list of all the cities in that state
	 * @param String (state id of the state )
	 * @return List<City> (list of the object of the city class)*/
	@GetMapping(path="/api/public/dr/city/all")
	public List<City>  getCities(@RequestParam String stateId){
		return this.commonService.getAllCity(stateId);
	}
	
	
	/** getDegreeList method give list of all the degrees in the database 
	 *  it takes no parameter and return list of degrees
	 *  @return List<Degree> (list of the object of the degree class)*/
	@GetMapping(path="/api/public/dr/degree/all")
	public List<Degree> getDegreeList(){
		return this.commonService.getDegreeList();
	}
	
	
	/** getSpecialityList method give the list of all the speciality in the database
	 *  it takes no paramter and return the list of speciality
	 *  @return List<Speciality> (list of the object of the speciality class)*/
	@GetMapping(path="/api/public/dr/speciality/all")
	public List<Speciality> getSpecialityList(){
		
		return this.commonService.getSpecialiyList();
	}
	
	
	/** getAllHoliday method give the list of all the holidays of a doctor 
	 *  it takes no parameter and return list of holidays 
	 *  @return List<Instant> (list of dates in the form of Instant )*/
	@GetMapping(path="/api/public/dr/holiday/all")
	public List<Instant> getAllHoliday(Principal currentUser){
		
		return this.doctorService.getAllHoliday(currentUser.getName());
	}
	
	
	/** getDoctor method give the current logged in doctor object 
	 * it takes no parameter and return the doctor object 
	 * @return Doctor (object of the doctor class)*/
	@GetMapping(path="/api/public/dr/get/doctor")
	public Doctor getDotor(Principal currentUser){
		
		
		return this.doctorService.getPublicDoctor(currentUser.getName());
	}
	
	
	/** getAppointmentUsingId method get the appointment object using the appointment id 
	 * 	it takes appointment id as the parameter and return the appointment object 
	 * @param String (appointment id )
	 * @return Appointment (object of the appointment class)*/
	@GetMapping(path="/api/private/dr/appointment/id")
	public Appointment getAppintmentUsingId(String appointmentId){
		
	     return this.doctorService.getAppointmentUsingId(appointmentId);
	   
	}
	
	
	/** getAppointmentPeriod method give the list of appointment for a period of time it 
	 *  takes two parameter both are Instant of date one is starting and other is ending date
	 *  @param Instant(from date instant)
	 *  @param Instant(to date instant )
	 *  @return List<Appointment> (list of the object of the appointment class)*/
	@GetMapping(path="/api/private/dr/get/appointment/period")
	public List<Appointment> getAppointmentPeriod(@RequestParam("from")  String from , @RequestParam("to") String to,Principal currentUser){
		
		
		Instant fromInstant =Instant.ofEpochMilli(Long.parseLong(from));
		Instant toInstant =Instant.ofEpochMilli(Long.parseLong(to));
		return this.doctorService.getAppointmentPeriod(fromInstant,toInstant,currentUser.getName());
	}
	
	
	/** getTodayAppointment method gives the list of the today's appointment for a doctor 
	 * 	it takes no paramter and return the list of appointment for today
	 * @return List<Appointment> (list of the appointment class object )*/
	
	@GetMapping(path="/api/private/dr/get/appointment/today")	
	public List<Appointment> getTodayAppointment(Principal currentUser){
	    
		
	    
	    Instant today= Instant.now();
	    
	    Instant yesterday=today.minus(1,ChronoUnit.DAYS);
	    
	    
	    
		return this.doctorService.getAppointmentPeriod(yesterday, today,currentUser.getName());
	}
	
	
	/** getHolidayPeriod takes two parameter which are starting date and ending date and it return the list 
	 * of the  all the holidays in between that period including the start and end date 
	 * @param Instant (date to start with)
	 * @param Instant (date to end )
	 * @return List<Instant> (list of the holiday date )
	 *  */
	@GetMapping(path="/api/private/dr/get/holiday/period")
	public List<Instant> getHolidayPeriod(@RequestParam("from")  String from ,@RequestParam("to") String to,Principal currentUser ){
		
		Instant fromInstant=Instant.ofEpochMilli(Long.parseLong(from));
		Instant toInstant=Instant.ofEpochMilli(Long.parseLong(to));
		return this.doctorService.getHolidayPeriod(fromInstant,toInstant,currentUser.getName());
	}
	
	
	/** getHolidayOfFuture takes no parameter and return the list of holidays after today and also include today 
	 *  if today is an holiday 
	 *  @return List<Instant> (list of holiday dates )*/
	
	@GetMapping(path="/api/public/get/holiday/")
	public List<Instant> getHolidayOfFuture(Principal currentUser){
		
		
		
		Instant today= Instant.now();
		
		
		
		return this.doctorService.getHolidayAfter(today,currentUser.getName());
	}
	
	
	
}
