package com.dr.in.services;

import java.util.ArrayList;
import java.util.Date;
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
	
	public FormResult saveDoctor(Doctor doctor){
		
		this.doctor=this.doctorRepository.save(doctor);
		
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


	public FormResult docAppointmentSetup(Doctor doctor) {
		
		this.doctor=this.doctorRepository.findOne(doctor.getDocId());
		if(this.doctor!=null){
			this.doctor.setAppointmentFee(doctor.getAppointmentFee());
			this.doctor.setTimeSlots(doctor.getTimeSlots());
			this.doctor.setWorkingDays(doctor.getWorkingDays());
			this.saveDoctor(this.doctor);
		}
		else{
			this.formResult.setResult(false);
			this.formResult.setError(true);
			this.formResult.setMessage("You Must Log In First ");
		}
		
		return this.formResult;
	}


	public FormResult addHolidays(Doctor doctor) {
	
		this.doctor=this.doctorRepository.findOne(doctor.getDocId());
		
		List<Date> previousHolidayList=this.doctor.getHolidays();
		
		List<Date> newHolidayList=doctor.getHolidays();
		
		
		
		if(previousHolidayList!=null){
			
			
			if(previousHolidayList.size()==0){
				
				previousHolidayList=newHolidayList;
			}
			
			else{
				for(int i=0; i<newHolidayList.size();i++){
					
					if(!previousHolidayList.contains(newHolidayList.get(i))){
						previousHolidayList.add(newHolidayList.get(i));
					}
					
						
					}
				}
			
			this.doctor.setHolidays(previousHolidayList);
			 
			 this.saveDoctor(this.doctor);
			}
		else{
			this.doctor.setHolidays(newHolidayList);
			this.saveDoctor(this.doctor);
		}
			
		 
		 
			
		
		
		
		return this.formResult;
	}


	public List<Date> getAllHoliday(String docId) {
		this.doctor=this.doctorRepository.findOne(docId);
		List<Date> holidays= this.doctor.getHolidays();
		
		if(holidays==null){
			
			holidays= new ArrayList<Date>();
			
		}
		
		return holidays;
	}


	public Doctor getPublicDoctor(String docId) {
		
		this.doctor=this.doctorRepository.findOnePublicDoctorBydocId(docId);
		
		return this.doctor;
	}


	public FormResult makeAppointment(Appointment appointment) {
		
		this.formResult=this.appointmentService.addAppointment(appointment);
		
		
		return this.formResult;
	}


	public List<Appointment> getAppointment(String docId) {
		return this.appointmentService.getDocAppointment(docId);
	}


	public List<Appointment> getAppointmentPeriod(Date from, Date to) {
		return this.appointmentService.getDocAppointmentOfMonth(from, to);
		
	}


	public List<Appointment> getTodayAppointment(Date today) {
		
		return this.appointmentService.getAppointmentOfSpecificDate(today);
	}
	

}
