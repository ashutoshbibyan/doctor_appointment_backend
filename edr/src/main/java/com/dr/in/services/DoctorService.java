package com.dr.in.services;

import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dr.in.model.Appointment;
import com.dr.in.model.Doctor;
import com.dr.in.model.FormResult;
import com.dr.in.repository.DoctorRepository;


@Service
public class DoctorService {
	
	@Autowired 
	private Doctor doctor;
	
	@Autowired
	private FormResult formResult;
	
	@Autowired
	private AppointmentService appointmentService;
	
	@Autowired
	private DoctorRepository doctorRepository;
	
	
	/** saveDoctor method saves the doctor object and return the 
	 * 	formresult object 
	 * @param Doctor (object of the doctor  object)
	 * @return FormResult (object of the formresult class)*/
	public FormResult saveDoctor(Doctor doctor){
		
		this.doctor=this.doctorRepository.save(doctor);
		
		// checking if object is saved or not 
		if(this.doctor!=null){
			this.formResult.setResult(true);
			this.formResult.setMessage("Data is saved");
			this.formResult.setError(false);
		}
		else{
			this.formResult.setResult(false);
			this.formResult.setError(true);
			this.formResult.setMessage("Something Went Wrong While Saving Data");
		}
		
		return this.formResult;
	}
	

	/** doctorSignup method takes the doctor object and complete the signup process 
	 * 	and return the formresult object 
	 * @param Doctor (object of the doctor class)
	 * @return FormResult(object of the formresult class)*/
	
	public FormResult doctorSignup(Doctor doctor) {
		
		this.doctor=this.doctorRepository.insert(doctor);
		
		if(this.doctor!=null){
			this.formResult.setResult(true);
			this.formResult.setMessage("Information is Saved");
		}
		else{
			this.formResult.setError(true);
			this.formResult.setResult(false);
			this.formResult.setMessage("Something Went Wrong while saving the info pls contact admin");
		}
		return this.formResult;
	}


	/** docAppointmentSetup method save the appointment setup information into the doctor object 
	 * 	it takes doctor object with appointment setting and save it into the existing objce of the
	 * 	doctor in the database and return formresult object based on the result 
	 *  @param Doctor (object of doctor class)
	 *  @return FormResult (object of formresult class)*/
	
	public FormResult docAppointmentSetup(Doctor doctor) {
		//get the old object from the database 
		this.doctor=this.doctorRepository.findOne(doctor.getDocId());
		if(this.doctor!=null){
			// if there is an object then add the appoinetment setup information and save it to db
			this.doctor.setAppointmentFee(doctor.getAppointmentFee());
			this.doctor.setTimeSlots(doctor.getTimeSlots());
			this.doctor.setWorkingDays(doctor.getWorkingDays());
			this.saveDoctor(this.doctor);
		}
		// else send the appropriate error
		else{
			this.formResult.setResult(false);
			this.formResult.setError(true);
			this.formResult.setMessage("You Must Log In First ");
		}
		
		return this.formResult;
	}

	/** addHoliday method add the holidays list to the doctor object it takes doctor object with the 
	 *  list of holidays and add it to existing object and return the form result object 
	 *  @param Doctor (object of the doctor class)
	 *  @return FormResult(object of the formresult class)*/

	public FormResult addHolidays(Doctor doctor) {
	
		// get the old object from data base 
		this.doctor=this.doctorRepository.findOne(doctor.getDocId());
		
		
		// make a new list for old list of holidays present in doctor object 
		List<Instant> previousHolidayList=this.doctor.getHolidays();
		
		// get the list of new holidays from new doctor object 
		List<Instant> newHolidayList=doctor.getHolidays();
		
		
		// if there is a previous holiday list 
		if(previousHolidayList!=null){
			
			// if the previous holiday list is empty 
			if(previousHolidayList.size()==0){
				
				// set the new previous holiday list to new one 
				previousHolidayList=newHolidayList;
			}
			
			// if previous holiday list is not empty 
			else{
				//loop through the new holiday list to check each value 
				for(int i=0; i<newHolidayList.size();i++){
					
					// if old list don't contain the new values already 
					if(!previousHolidayList.contains(newHolidayList.get(i))){
						// add the new value to old list 
						previousHolidayList.add(newHolidayList.get(i));
					}
					
						
					}
				}
			// set the new value of previous list to object 
			this.doctor.setHolidays(previousHolidayList);
			 
			// save the changed object to data base
			 this.saveDoctor(this.doctor);
			}
		// if there is not previous holiday list 
		else{
			// set the new list to object and save the object 
			this.doctor.setHolidays(newHolidayList);
			this.saveDoctor(this.doctor);
		}
			
		 
	   // return the result 
		return this.formResult;
	}

/** getAllHoliday method takes the doctor id as a parameter and return the list of all 
 *  holiday for that doctor if there is no holiday list then return an empty list of holiday
 *  @param String (doctor id )
 *  @return List<Instant> (list of holiday dates in UTC seconds form )*/
	public List<Instant> getAllHoliday(String docId) {
		// get the doctor object 
		this.doctor=this.doctorRepository.findOne(docId);
		// set the list of holidays to the list got from database
		List<Instant> holidays= this.doctor.getHolidays();
		
		// if there is no list of holiday 
		if(holidays==null){
			// make the returning list an empty list 
			holidays= new ArrayList<Instant>();
			
		}
		
		return holidays;
	}


	/** getPublicDoctor takes the doctor id as a parameter and return the doctor object with the 
	 *  field that are  available publically all the other fields are null 
	 *  @param String (doctor id )
	 *  @return Doctor (object of the doctor class)*/
	public Doctor getPublicDoctor(String docId) {
		
		this.doctor=this.doctorRepository.findOnePublicDoctorBydocId(docId);
		
		return this.doctor;
	}


	/** make appointment method takes the appointment object and add it to the database 
	 *  the doctor id is added to this appointment object by the controller 
	 *  @param Appointment (object of the appointment class)
	 *  @return FormResult (object of the form result class)*/
	public FormResult makeAppointment(Appointment appointment) {
		
		this.formResult=this.appointmentService.addAppointment(appointment);
		
		
		return this.formResult;
	}
	
	
	/** getAppointmentUsingId method takes the appointment Id as the parameter and return the 
	 * 	appointment object associated with that id 
	 * @param String (appointment id )
	 * @return Appointment (object of the appointment class)*/
	
	public Appointment getAppointmentUsingId(String appointmentId){
		return this.appointmentService.getAppointmentUsingId(appointmentId);
	}

	

	/** getAppointment method get the appointments for a particular doctor 
	 * it takes doc id as  a parameter and return the list of appointments 
	 * @param String (doctor id of doctor )
	 * @return List<Appointment> (list of all the appointment )*/
	public List<Appointment> getAppointment(String docId) {
		return this.appointmentService.getDocAppointment(docId);
	}


	/** getAppointmentPeriod method takes three parameter doctor id the starting date and 
	 *  the closing date and return the list of appointments in between these two dates 
	 *  @param Instant (from the date start)
	 *  @param Instant (to the date ends)
	 *  @param String  (doctor id )
	 *  @return List<Appointment> (list of all the appointments in between)*/
	public List<Appointment> getAppointmentPeriod(Instant from, Instant to, String docId) {
		return this.appointmentService.getDocAppointmentOfPeriod(from, to,docId);
		
	}


	/** getHolidayPeriod method takes three parameter the docotor id starting date and the 
	 *  ending date and return the list of holiday in between including the starting date and 
	 *  the ending date 
	 *  @param Instant (starting date )
	 *  @param Instatn (ending date )
	 *  @param String (doctor id )
	 *  @return List<Instant> (list of all the holidays )*/
	public List<Instant> getHolidayPeriod(Instant from, Instant to ,String docId) {
		// get the doctor object from database using doc id 
		this.doctor = this.doctorRepository.findOne(docId);
		
		
		List<Instant> result = new ArrayList<>();
		
		List<Instant> holidays= this.doctor.getHolidays();
		
		Iterator<Instant> iter = holidays.iterator();
		
		// loop through the list of holidays
		while(iter.hasNext()){
			Instant d =iter.next();
			int compOfFrom=d.compareTo(from);
			int compOfTo=d.compareTo(to);
			// if holiday is equal to start and end date add it 
			if(compOfFrom==0||compOfTo==0){
				result.add(d);
			}
			// if holiday is inbetween these two date add it 
			else if(compOfFrom>0&&compOfTo<0){
				result.add(d);
			}
			
		}
		
		
		return result;
	}


	


	
	

}
