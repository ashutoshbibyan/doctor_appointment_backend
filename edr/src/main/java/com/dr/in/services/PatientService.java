package com.dr.in.services;

import java.time.Instant;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.dr.in.model.Doctor;
import com.dr.in.model.DoctorInPatient;
import com.dr.in.model.FormResult;
import com.dr.in.model.Hours;
import com.dr.in.model.Patient;
import com.dr.in.model.Speciality;
import com.dr.in.repository.PatientRepository;


@Service
public class PatientService {

	@Autowired
	private PatientRepository patientRepository;
	
	@Autowired 
	private DoctorService doctorService;
	
	@Autowired 
	private AppointmentService appointmentService;
	
	@Autowired
	private Patient patient ;
	
	@Autowired
	private FormResult formResult;
	
	
	
	/** savePatient method takes the patient object and save it into the database and return the 
	 *  formResult object according to the result 
	 *  @param Patient (object of patient )
	 *  @return FormResult (object of the formresult )*/ 
	
	public FormResult savePatient(Patient patient){
		this.patient= this.patientRepository.save(patient);
		if(this.patient!=null){
			this.formResult.setError(false);
			this.formResult.setResult(true);
			this.formResult.setMessage("data is saved");
		}
		else{
			this.formResult.setResult(false);
			this.formResult.setError(true);
			this.formResult.setMessage("Something went wrong while saving data" );
		}
		
		return this.formResult;
	}
	
	
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


	public Patient getPatient(String patientId)  {
		this.patient= this.patientRepository.findOne(patientId);	
		
		return this.patient;
	}


	public Page<Doctor> getDoctorForPatient(String patientId, int pageNo, int pageSize) {
		// TODO Auto-generated method stub
		this.patient=this.getPatient(patientId);
		String state=this.patient.getAddress().getState();
		String city=this.patient.getAddress().getCity();
		return this.doctorService.getDoctorForPatient(state,city,pageNo,pageSize);
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

	/** getPublicPatient takes the patientId as parameter and return the patient object as the result 
	 *  it only give public data of a patient 
	 *  @param String (patient id of the patient )
	 *  @return Patient (object of the patient class)*/

	public Patient getPublicPatient(String patientId) {
		
		return this.patientRepository.findOnePublicPatientBypatientId(patientId);
	}


	/** getDoctorUsingDocId method takes the string parameter which is the docid of the 
	 *  doctor and return the doctor object with that docid
	 *  @param String (doctor id of the doctor)
	 *  @return Doctor (object of the doctor with that docid)*/
	
	public Doctor getDoctorUsingDocId(String docId) {
		
		return this.doctorService.getPublicDoctor(docId);
	}

	
	/** getDoctorUsingDocName method get the list of doctor using name and state and city it takes 
	 *  five parameter 
	 *  @param String (doctor name )
	 *  @param String (state id )
	 *  @param String (city Name)
	 *  @param int (page no )
	 *  @param int (page size )
	 *  @return Page<Doctor> (list of object of doctor class)
	 *  
	 *  */

	public Page<Doctor> getDoctorUsingDocName(String docName, String stateId, String cityName , int page , int pageSize) {
		
		return this.doctorService.getDoctorUsingDocName(docName,stateId,cityName,page,pageSize);
	}

	
	/** getDoctorUsingDocSpeciality method get the list of doctor using speciality and state and city it takes 
	 *  five parameter 
	 *  @param Speciality (Speciality class object )
	 *  @param String (state id )
	 *  @param String (city Name)
	 *  @param int (page no )
	 *  @param int (page size )
	 *  @return Page<Doctor> (list of object of doctor class)
	 *  
	 *  */

	public Page<Doctor> getDoctorUsingDocSpeciality(Speciality docSpeciality, String stateId, String cityName, int page,
			int pageSize) {
		// TODO Auto-generated method stub
		return this.doctorService.getDoctorUsingDocSpeciality(docSpeciality,stateId,cityName,page,pageSize);
	}

	/** getDoctorUsingCityAndSpeciality method get the list of doctor using city and speciality 
	 * @param String cityname
	 * @param String speciality 
	 * @param int page no 
	 * @param int page size 
	 * @return Page<Doctor> (Page object contain list of Doctors )*/
	public Page<Doctor> getDoctorUsingCityAndSpeciality(String city , String speciality , int pageNo , int pageSize){
		return this.doctorService.getDoctorUsingCityAndSpeciality(city,new Speciality(speciality),pageNo,pageSize);
	}
	
	/** addPatientDoctor method add the new doctor to the list of doctors exist in the patient object 
	 *  @param DoctorInPatient (object of the doctorinpatient class)
	 *  @param String (current logged in user id )*/

	public FormResult addPatientDoctor(DoctorInPatient doctorInPatient, String currentUser) {
		
		// first get the patient object from the db 
		try {
			this.patient=this.getPatient(currentUser);
		} catch (NullPointerException e) {
			
			this.formResult.setError(true);
			this.formResult.setResult(false);
			this.formResult.setMessage("Please Log In First ");
		}
		
		// check if there is any doctor list in patient object 
		
	   if(this.patient.getDoctors()==null){
		   // if not create new list 
		   List<DoctorInPatient> docList=new ArrayList<>();
		   docList.add(doctorInPatient); // add the doctor into the new list 
		   this.patient.setDoctors(docList); //set the new list into patient object 
		// save the patient object 	
			 this.formResult=this.savePatient(this.patient);
	   }
	   
	   else{
		   //else check if this doctor is already added into the list 
		   if(this.patient.getDoctors().contains(doctorInPatient)){
			   // if so then send the error accordingly 
			   this.formResult.setError(true);
			   this.formResult.setResult(false);
			   this.formResult.setMessage("This doctor is already added into your list ");
		   }
		   
		   // if doctor is not added already 
		   else{
			   
			   // add the doctor into the list 
			   this.patient.addToDoctors(doctorInPatient);
			   // save the patient object 	
				 this.formResult=this.savePatient(this.patient);
			   
		   }
	   }
	
		
		return this.formResult;
	}

	/** getPatientDoctors method takes the patient id as parameter and return the list of 
	 *  doctors present in that patient object
	 *  @param String (patient id )
	 *  @return List<DoctorInPatient> (list of doctors in the patient object) */

	public List<DoctorInPatient> getPatientDoctors(String patientId) {
		
	    try {
			this.patient = this.getPatient(patientId);
		} catch (NullPointerException e) {
			 throw e;
		}
		
		return this.patient.getDoctors();
	}
	
	
	/**deleteDoctorFromList method takes the doctorInPatient object and patientid then remove it from the list 
	 * of doctors present in the patient object 
	 * @param DoctorInPatient (object of doctorinpatient class)
	 * @return FormResult (object of the formresult class)*/
	
	public FormResult deleteDoctorFromList(DoctorInPatient doctorInPatient , String patientId){
		
		try {
			this.patient=this.getPatient(patientId);
		} catch (NullPointerException e) {
			throw e;
		}
		
		if(this.patient.getDoctors().remove(doctorInPatient)){
			this.savePatient(this.patient);
			this.formResult.setResult(true);
			this.formResult.setError(false);
			this.formResult.setMessage("Doctor is Removed from the list " );
		}
		
		else{
			
			this.formResult.setError(true);
			this.formResult.setResult(false);
			this.formResult.setMessage("Doctor is not present in the database ");
			
		}
		
		
		
		return this.formResult;
		
	}

	/** getAppointmentBooked method  get the appointment booked for that doctor on that perticular day 
	 *  and at that perticular time slot 
	 *  @param String (doctor id )
	 *  @param Instant (date value in Instant type )
	 *  @param Hours (time slot object of hours class)
	 *  @return long (no of appointment made) */

	public long getAppointmentBooked(String docId, Instant date, Hours hour) {
		// TODO Auto-generated method stub
		return this.appointmentService.getAppointmentBooked(docId, date, hour);
	}
	
	
	
	
	
}
