package com.dr.in.services;

import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dr.in.model.Doctor;
import com.dr.in.model.FormResult;
import com.dr.in.model.Patient;
import com.dr.in.repository.PatientRepository;


@Service
public class PatientService {

	@Autowired
	private PatientRepository patientRepository;
	
	@Autowired 
	private DoctorService doctorService;
	
	@Autowired
	private Patient patient ;
	
	@Autowired
	private FormResult formResult;
	
	
	/** patientSignup takes the patient object and save it into the database 
	 * 	@param Patient (object of the patient class)
	 * 	@return FormResult( object of the formresult class )*/
	
	public FormResult patientSignup(Patient patient ){
		
		this.patient=this.patientRepository.findOne(patient.getPatientId());
		
		this.patient=this.patientRepository.save(patient);
		if(this.patient!=null){
			this.formResult.setResult(true);
			this.formResult.setError(false);
			this.formResult.setMessage("Data is saved");
		}
		else{
			this.formResult.setResult(false);
			this.formResult.setError(true);
			this.formResult.setMessage("Error while patient signup ");
		}
		return this.formResult;
	}


	public List<Patient> getAllPatient() {
		// TODO Auto-generated method stub
		return this.patientRepository.findAll();
	}


	public Patient getPatient(String patientId) {
		//this.patient= this.patientRepository.findOne(patientId);		
		return this.patientRepository.findOne(patientId);
	}


	public List<Doctor> getDoctorForPatient(String patientId) {
		// TODO Auto-generated method stub
		this.patient=this.getPatient(patientId);
		String state=this.patient.getAddress().getState();
		String city=this.patient.getAddress().getCity();
		return this.doctorService.getDoctorForPatient(state,city);
	}
	

	/** check if the patientId is exist in database and return the formresult object 
	 *  true if it exist else false 
	 *  @param String (patient id to be check )*/

	public FormResult patientExist(String patientId) {
		
		this.patient=this.getPatient(patientId);
		
		if(this.patient==null){
			this.formResult.setResult(false);
			this.formResult.setError(true);
			this.formResult.setMessage("No Patient exist with this id ");
			
		}
		else {
			this.formResult.setResult(true);
			this.formResult.setError(false);
			this.formResult.setMessage("Patient id is Okay");
		}
	        
		return this.formResult;
	}
	
	
	
	
	
	
}
