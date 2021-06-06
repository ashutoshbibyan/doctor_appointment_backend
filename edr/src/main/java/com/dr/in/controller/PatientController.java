package com.dr.in.controller;

import java.security.Principal;
import java.time.Instant;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dr.in.model.Disease;
import com.dr.in.model.Doctor;
import com.dr.in.model.DoctorInPatient;
import com.dr.in.model.FormResult;
import com.dr.in.model.Hours;
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
	public FormResult patientSignup(@RequestBody Patient patient , Principal currentUser){
		patient.setPatientId(currentUser.getName());
		return this.patientService.patientSignup(patient);
	}
	
	/** get*/
	@GetMapping(path="/api/private/patient/all")
	public List<Patient> getAllPatient(){
		return this.patientService.getAllPatient();
		
	}
	
	/** getPatient method get the loged in  patient object from the database */
	@GetMapping(path="/api/private/get/patient")
	public Patient getPatient(Principal currentUser){
		// this is hardcoded right now it will be replaced by current user
		
		return this.patientService.getPatient(currentUser.getName());
	}
	
	/** getDoctorForPatient method get the list of doctor which are in the same city 
	 *  of the patient */
	@GetMapping(path="/api/private/patient/get/doctor")
	public Page<Doctor> getDoctorForPatient(@RequestParam int pageNo , @RequestParam int pageSize ,
			Principal currentUser){
		// this is hardcoded right now it will be replaced by current user
		
		return this.patientService.getDoctorForPatient(currentUser.getName(),pageNo,pageSize);
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
	
	/** getDoctorUsingCityAndSpeciality method takes city and speciality and return the list of the doctor 
	 * @param String city
	 * @param String speciality 
	 * @param int pageNo
	 * @param int pageSize
	 * @return Page<Doctor> (page object with list of objects of doctors)
	 * */
	
	@GetMapping(path="/api/public/patient/search/doctor/cityandspeciality")
	public Page<Doctor> getDoctorUsingCityAndSpeciality(@RequestParam String city , @RequestParam String speciality 
			,@RequestParam int pageNo , @RequestParam int pageSize){
		return this.patientService.getDoctorUsingCityAndSpeciality(city,speciality,pageNo,pageSize);
		
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
	public FormResult addPatientDoctor(@RequestBody DoctorInPatient doctorInPatient , Principal currentUser){
		
		
		
		return this.patientService.addPatientDoctor(doctorInPatient,currentUser.getName());
	}
	
	
	/** getPatientDoctors method takes no parameter and return the List of doctors in the current logged in 
	 *  patient 
	 *  @return List<DoctorInPatient> (list of doctorinpatient objects )*/
	@GetMapping(path="/api/private/patient/get/doctors")
	public List<DoctorInPatient> getPatientDoctors(Principal currentUser){
		
		return this.patientService.getPatientDoctors(currentUser.getName());
	}
	
	
	/** deleteDoctorFromList method delete the doctor from the list of doctors present in the patient  object 
	 * @param DoctorInPatient (object of the doctorinpatient class)
	 * @return FormResult (object of the formresult class )*/
	@PostMapping(path="/api/private/patient/delete/doctor")
	public FormResult deleteDoctorFromList(@RequestBody DoctorInPatient doctorInPatient,Principal currentUser){
		
		return this.patientService.deleteDoctorFromList(doctorInPatient, currentUser.getName());
	}
	
	
	/** getAppointmentBooked get no of appointments Booked for a perticular time  
	 *  slot on a perticular day of the selected doctor
	 *  @param String (doctor id of doctor)
	 *  @param Instant (Date for appointment)
	 *  @param Hours (object of hour class it is the time slot )
	 *  @return long (no of appointment left for that time )  */
	@PostMapping(path="/api/public/patient/appointment/booked")
	public long getAppointmentLeft(@RequestBody Hours hours,@RequestParam("dateInLong") String dateInLong,@RequestParam("docId") String docId){
		
		Instant date= Instant.ofEpochMilli(Long.parseLong(dateInLong));
		return  this.patientService.getAppointmentBooked(docId,date,hours);
		
	}

}
