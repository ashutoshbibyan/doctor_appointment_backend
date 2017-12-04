package com.dr.in.services;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.dr.in.model.City;
import com.dr.in.model.Degree;
import com.dr.in.model.Disease;
import com.dr.in.model.FormResult;
import com.dr.in.model.Speciality;
import com.dr.in.model.State;
import com.dr.in.repository.DegreeRepository;
import com.dr.in.repository.DiseaseRepository;
import com.dr.in.repository.SpecialityRepository;
import com.dr.in.repository.StateRepository;

@Service
public class CommonServices {
	
	@Autowired
	private DiseaseRepository diseaseRepository;
	
	@Autowired 
	private StateRepository stateRepository;
	
	@Autowired
	private DegreeRepository degreeRepository;
	
	@Autowired 
	private SpecialityRepository specialityRepository;
	
	@Autowired
	private Degree degree;
	
	@Autowired
	private State state;
	
	@Autowired
	private Speciality speciality;
	
	
	
	@Autowired
	private Disease disease;
	
	
	@Autowired 
	private FormResult formResult;
	
	
	/** addDisease method take disease object and save it into the database
	 * 	@param Disease (object of class Disease)
	 * 	@return FormResult (objcect of FormResult class)*/
	public FormResult addDisease(Disease disease){
		
		this.disease=this.diseaseRepository.insert(disease);
		
		if(this.disease!=null){
			this.formResult.setResult(true);
			this.formResult.setMessage("disease is entered into database");
		}
		
		else{
			this.formResult.setResult(false);
			this.formResult.setMessage("something went wrong while entering the disease into database");
		}
		
		return this.formResult;
		
	}
	
	/* getDiseaseIdAndDiseaseNameList retrive list of all disease but it don't return the 
	 * whole disease object it only return two field diseaseId and diseaseName 
	 * @return List<Disease> (list of disease object with only two field diseaseId and diseaseName)*/
	public List<Disease> getDiseaseIdAndDiseaseNameList(){
		
		return this.diseaseRepository.findAllBy(new Sort(Sort.Direction.ASC,"diseaseName"));
		
	}
	
	/** addState function takes state class object as an argument and save it into the database
	 * @param State (object of the state class)
	 * @return FormResult (object of the form result class)*/

	public FormResult addState(State state) {
		
		this.state=this.stateRepository.insert(state);
		
		if(this.state!=null){
			this.formResult.setResult(true);
			this.formResult.setMessage("state is inserted into database");
		}
		
		else{
			this.formResult.setResult(false);
			this.formResult.setMessage("something went wrong while inserting the state into database");
		}
		
		return this.formResult;
	}

	public List<State> getAllState() {
		System.out.println(this.stateRepository.findAll().size());
		return this.stateRepository.findAllBy();
	}
	
	public State getState(String stateId){
		
		return this.stateRepository.findOne(stateId);
	}
	
	/** saveState method takes the state class object and save it into the 
	 * 	database 
	 * @param State (object of the state class)
	 * @return FormResult(object of the form result class)*/
	
	public FormResult saveState(State state){
		
		this.state=this.stateRepository.save(state);
		// check if state is saved if so 
		if(this.state!=null){
			this.formResult.setResult(true);
			this.formResult.setMessage("state is saved into database");
		}
		else {
			this.formResult.setResult(false);
			this.formResult.setMessage("something went wrong while saving the state object");
		}
		
		return this.formResult;
	}

	/** addcity method takes two parameter first if the city object and second is 
	 *  the state id and it add this city into that state 
	 *  @param City(object of the city class)
	 *  @param String (state id of the state )
	 *  @return FormResult(object of the formresult class)*/
	
	public FormResult addcity(City city, String stateId) {
		// first get the state object from database
		this.state=this.getState(stateId);
		// get the list from state object 
		List<City> cities=this.state.getCities();
		
		
		// if list null create new one and add it 
		if(cities==null){
			List<City> newcities = new ArrayList<>();
			newcities.add(city);
			this.state.setCities(newcities);
			
			this.formResult=this.saveState(this.state);
			//check if the state object is saved 
			if(this.formResult.isResult()){
				this.formResult.setMessage("city is added");
			}
			
		}
		
		else {
			Iterator<City> iter = cities.iterator();
			// loop through the list and check if city is already present in database
			for(int i=0;i<cities.size();i++){
				if(city.equals(cities.get(i))){
					this.formResult.setResult(true);
					this.formResult.setMessage("City is Already Added");
				}
				// if city is not present in database set form result to false
				else{
					this.formResult.setResult(false);
				}
			}
			
			
			// if form result is false means city is not present in database so add it 
				if(!this.formResult.isResult()){
					cities.add(city);
					this.formResult=this.saveState(this.state);
					// check if the state object is saved 
					if(this.formResult.isResult()){
						this.formResult.setMessage("city is added");
					}
				}
		
		}
		
		return this.formResult;
		
	}

	public List<City> getAllCity(String stateId) {
		List<City> cityList = new ArrayList<>();
		this.state=this.getState(stateId);
		if(this.state.getCities()!=null){
			cityList=this.state.getCities();
		}
		
		return cityList;
	}
	
	/** savedegree method takes degree class object and save it into database 
	 * @param Degree(object of the degree class)
	 * @return FormResult(object of the formresult class)*/
	
	public FormResult saveDegree(Degree degree){
		
		this.degree=this.degreeRepository.save(degree);
		
		if(this.degree!=null){
			this.formResult.setResult(true);
			this.formResult.setMessage("Degree is added into database ");
		}
		
		else{
			this.formResult.setResult(false);
			this.formResult.setMessage("Something Went Wrong While saving into database");
		}
		
		return this.formResult;
	}

	public List<Degree> getDegreeList() {
		// TODO Auto-generated method stub
		return this.degreeRepository.findAll();
	}
	
	
	public Degree getDegree(String degreeId){
		return this.degreeRepository.findOne(degreeId);
	}
	
	
	public FormResult saveSpeciality(Speciality speciality){
		this.speciality=this.specialityRepository.findOne(speciality.getSpecialityName());
		
		if(this.speciality==null){
			this.specialityRepository.save(speciality);
			this.formResult.setResult(true);
			this.formResult.setError(false);
			this.formResult.setMessage("Speciality Added");
		}
		else{
			this.formResult.setError(true);
			this.formResult.setResult(false);
			this.formResult.setMessage("Speciality Already Exist");
		}
		
		return this.formResult;
		
		
	}
	
	public List<Speciality> getSpecialiyList(){
		return this.specialityRepository.findAll();
	}

	
	
	
    
}
