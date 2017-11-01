package com.dr.in.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dr.in.model.Disease;
import com.dr.in.model.FormResult;
import com.dr.in.model.Patient;
import com.dr.in.services.CommonServices;
import com.dr.in.services.PatientService;

@RestController
public class PatientController {
	
	
	@Autowired
	private CommonServices commonService;
	
	
	@Autowired
	private PatientService patientService;
	
	
	
	@GetMapping(path="/api/public/disease/list")
	
	public List<Disease> getDiseaseList(){
		return this.commonService.getDiseaseIdAndDiseaseNameList();
	}
	
	
	@PostMapping(path="/api/private/patient/signup")
	public FormResult patientSignup(@RequestBody Patient patient){
		
		return this.patientService.patientSignup(patient);
	}
	
	@GetMapping(path="/api/private/patient/all")
	public List<Patient> getAllPatient(){
		return this.patientService.getAllPatient();
		
	}
	
	
	


}
