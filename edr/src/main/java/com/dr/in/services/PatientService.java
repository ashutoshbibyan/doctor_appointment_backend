package com.dr.in.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dr.in.model.FormResult;
import com.dr.in.model.Patient;
import com.dr.in.repository.PatientRepository;

@Service
public class PatientService {

	@Autowired
	private PatientRepository patientRepository;
	
	@Autowired
	private Patient patient ;
	
	@Autowired
	private FormResult formResult;
	
	
	/** patientSignup takes the patient object and save it into the database 
	 * 	@param Patient (object of the patient class)
	 * 	@return FormResult( object of the formresult class )*/
	
	public FormResult patientSignup(Patient patient ){
		
		this.patient=this.patientRepository.save(patient);
		if(this.patient!=null){
			this.formResult.setResult(true);
			this.formResult.setMessage("Patient Signup completed");
		}
		else{
			this.formResult.setResult(false);
			this.formResult.setMessage("Error while patient signup ");
		}
		return this.formResult;
	}


	public List<Patient> getAllPatient() {
		// TODO Auto-generated method stub
		return this.patientRepository.findAll();
	}
	
	
	
	
	
	
}
