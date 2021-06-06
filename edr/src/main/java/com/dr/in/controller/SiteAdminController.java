package com.dr.in.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dr.in.formmodel.AddCityForm;
import com.dr.in.formmodel.AddSpecialityForm;
import com.dr.in.model.City;
import com.dr.in.model.Degree;
import com.dr.in.model.Disease;
import com.dr.in.model.FormResult;
import com.dr.in.model.Speciality;
import com.dr.in.model.State;
import com.dr.in.services.CommonServices;

@RestController
public class SiteAdminController {
	
	
	@Autowired
	private CommonServices commonServices;
	
	
	@PostMapping(path="/api/private/admin/disease/add")
	public FormResult addDisease( @RequestBody Disease disease){
	     return this.commonServices.addDisease(disease);
	}
	
	@PostMapping(path="/api/private/admin/state/add")
	public FormResult addState(@RequestBody State state){
		return this.commonServices.addState(state);
		
	}
	
	@PostMapping(path="/api/private/admin/city/add")
	public FormResult addCity( @RequestBody AddCityForm cityForm){
		return this.commonServices.addcity(cityForm.getCity(),cityForm.getStateId());
	}
	
	
	@GetMapping(path="/api/public/state/all")
	public List<State> getAllState(){
		return this.commonServices.getAllState();
	}
	
	@GetMapping(path="/api/public/city/all")
	public List<City> getAllCity(@RequestParam String stateId){
		return this.commonServices.getAllCity(stateId);
	}
	
	@PostMapping(path="/api/private/degree/add")
	public FormResult addDegree(@RequestBody Degree degree){
		return this.commonServices.saveDegree(degree);
	}
	
	@GetMapping(path="/api/public/degree/all")
	public List<Degree> getDegreeList(){
		return this.commonServices.getDegreeList();
	}
	
	@GetMapping(path="/api/public/disease/all")
	public List<Disease> getAllDisease(){
		return this.commonServices.getDiseaseIdAndDiseaseNameList();
	}
	
	@PostMapping(path="/api/private/speciality/add")
	public FormResult addSpeciality(@RequestBody Speciality speciality){
		return this.commonServices.saveSpeciality(speciality);
	}
	
	/** removeState method  remove the state from the database it takes sateid as 
	 *  parameter and remove it from the database 
	 *  @param String (stateId of the  state )
	 *  */
	@DeleteMapping(path="/api/private/admin/delete/state")
	public void removeState(@RequestParam String stateId){
		 this.commonServices.removeState(stateId);
	}
	
	/** removeDisease method remove the disease from the database it takes 
	 *  diseaseid as parameter and remove it from database
	 *  @param String (disease id of the disease)*/
	
	@DeleteMapping(path="/api/private/admin/delete/disease")
	public void removeDisease(@RequestParam String diseaseId){
		
		this.commonServices.removeDisease(diseaseId);		
	}
	
	
	/** removeDegree method remove the degree from the database it takes one 
	 *  parameter degreeId and remove it from database
	 *  @param String (degreeId of the degree)*/
	
	@DeleteMapping(path="/api/private/admin/delete/degree")
	public void removeDegree(@RequestParam String degreeId){
	
		this.commonServices.removeDegree(degreeId);
	}
	
	
	/** removeCity method remove the city from database it takes stateid and list of 
	 *  newCityList as parameter and change the old list with new list */
	
	@PostMapping(path="/api/private/admin/delete/city")
	public FormResult removeCity(@RequestBody List<City> newCityList , @RequestParam String stateId){
		return this.commonServices.removeCity(newCityList, stateId);
	}
	
	
	/** removeSpeciality method remove the speciality from the database it takes specialityName 
	 *  as the parameter 
	 *  @param string (specialityName of the speciality)*/
	
	@DeleteMapping(path="/api/private/admin/delete/speciality")
	
	public  void removeSpeciality(@RequestParam String specialityName){
		
		this.commonServices.removeSpeciality(specialityName);
		
	}
	
	
	
	
}
