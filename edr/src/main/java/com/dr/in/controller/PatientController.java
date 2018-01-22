package com.dr.in.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dr.in.model.Disease;
import com.dr.in.model.Doctor;
import com.dr.in.model.DoctorInPatient;
import com.dr.in.model.FormResult;
import com.dr.in.model.Patient;
import com.dr.in.model.Speciality;
import com.dr.in.services.CommonServices;
import com.dr.in.services.PatientService;

@RestController
public class PatientController {
	
	
	@Autowired
	private CommonServices commonService;
	
	
	@Autowired
	private PatientService patientService;
	
	
	/** getDiseaseList method get the list of disease in the database  and return 
	 *  it to the user */
	@GetMapping(path="/api/public/disease/list")
	
	public List<Disease> getDiseaseList(){
		return this.commonService.getDiseaseIdAndDiseaseNameList();
	}
	
	/** patientSignup method  takes patient object as parameter and insert it into 
	 *  the database it  compleate the patient signup process */
	@PostMapping(path="/api/private/patient/signup")
	public FormResult patientSignup(@RequestBody Patient patient){
		patient.setPatientId("patient@gmail.com");
		return this.patientService.patientSignup(patient);
	}
	
	/** get*/
	@GetMapping(path="/api/private/patient/all")
	public List<Patient> getAllPatient(){
		return this.patientService.getAllPatient();
		
	}
	
	/** getPatient method get the loged in  patient object from the database */
	@GetMapping(path="/api/private/get/patient")
	public Patient getPatient(){
		// this is hardcoded right now it will be replaced by current user
		String patientId="patient@gmail.com";
		return this.patientService.getPatient(patientId);
	}
	
	/** getDoctorForPatient method get the list of doctor which are in the same city 
	 *  of the patient */
	@GetMapping(path="/api/private/patient/get/doctor")
	public List<Doctor> getDoctorForPatient(){
		// this is hardcoded right now it will be replaced by current user
		String patientId="patient@gmail.com";
		return this.patientService.getDoctorForPatient(patientId);
	}
	
	/** getPublicPatient method takes the patientId as parameter and return the patient object 
	 *  this method return all the public data of a patient 
	 *  @param String (patientid of the patient )
	 *  @return Patient (object of the patient class)*/
	@GetMapping(path="/api/public/get/patient")
	public Patient getPublicPatient(@RequestParam String patientId){
		return this.patientService.getPublicPatient(patientId);
	}
	
	
	/** getDoctorUsingDocId method takes the doctor id as parameter and return the doctor object 
	 *  with that doctor id 
	 *  @param String (doctorid of the doctor )
	 *  @return Doctor (object of the doctor )
	 *  */
	
	@GetMapping(path="/api/public/patient/search/doctor/docid")
	public Doctor getDoctorUsingDocId(@RequestParam String docId ,  HttpServletResponse response){
		Doctor doc= this.patientService.getDoctorUsingDocId(docId);
		
		if(doc==null){
			response.setStatus(HttpStatus.NO_CONTENT.value());
		}
		
		return doc;
	}
	
	
	/** getDoctorUsingDocName method takes doctor name his state and city as parameter and return the 
	 *  list of doctor with that name 
	 *  @param String (doctor name )
	 *  @param String (state Id )
	 *  @param String (city name)
	 *  @param int (page no )
	 *  @param int (page size)
	 *  @return Page<Doctor> (page object with list of objects of doctor)*/
	
	@GetMapping(path="/api/public/patient/search/doctor/docname")	
	public Page<Doctor> getDoctorUsingDocName(@RequestParam String docName,@RequestParam String stateId
			,@RequestParam String cityName , @RequestParam int page , @RequestParam int pageSize){
		return this.patientService.getDoctorUsingDocName(docName,stateId,cityName,page,pageSize);
	}

	/** getDoctorUsingDocSpeciality method take the doctor speciality the state and city and return the 
	 *  list of doctor with that speciality 
	 *  @param String (doctor speciality)
	 *  @param String (state id )
	 *  @param String (city name)
	 *  @param int (page no )
	 *  @param int (page size)
	 *  @return Page<Doctor> (page object containing doctor list)*/
	@GetMapping(path="/api/public/patient/search/doctor/docspeciality")
	public Page<Doctor> getDoctorUsingDocSpeciality(@RequestParam String docSpeciality ,@RequestParam String stateId
			,@RequestParam String cityName,@RequestParam int page,@RequestParam int pageSize){
		return this.patientService.getDoctorUsingDocSpeciality(new Speciality(docSpeciality),stateId,cityName,page,pageSize);
	}
	
	
	/** addPatientDoctor method takes the doctorinpatient object and add it into the list of doctors in the 
	 *  patient object 
	 *  @param DoctorInPatient (object of the doctorinpatient class)
	 *  @return FormResult (object of the formresult class)*/
	@PostMapping(path="/api/private/patient/add/doctor")
	public FormResult addPatientDoctor(@RequestBody DoctorInPatient doctorInPatient){
		
		String currentUser="patient@gmail.com";
		
		return this.patientService.addPatientDoctor(doctorInPatient,currentUser);
	}
	
	
	/** getPatientDoctors method takes no parameter and return the List of doctors in the current logged in 
	 *  patient 
	 *  @return List<DoctorInPatient> (list of doctorinpatient objects )*/
	@GetMapping(path="/api/private/patient/get/doctors")
	public List<DoctorInPatient> getPatientDoctors(){
		String currentUser="patient@gmail.com";
		
		return this.patientService.getPatientDoctors(currentUser);
	}
	
	
	/** deleteDoctorFromList method delete the doctor from the list of doctors present in the patient  object 
	 * @param DoctorInPatient (object of the doctorinpatient class)
	 * @return FormResult (object of the formresult class )*/
	@PostMapping(path="/api/private/patient/delete/doctor")
	public FormResult deleteDoctorFromList(@RequestBody DoctorInPatient doctorInPatient){
		String patientId="patient@gmail.com";
		return this.patientService.deleteDoctorFromList(doctorInPatient, patientId);
	}

}
