package com.dr.in.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.dr.in.model.Disease;
import com.dr.in.model.FormResult;
import com.dr.in.model.State;
import com.dr.in.repository.DiseaseRepository;
import com.dr.in.repository.StateRepository;

@Service
public class CommonServices {
	
	@Autowired
	private DiseaseRepository diseaseRepository;
	
	@Autowired 
	private StateRepository stateRepository;
	
	@Autowired
	private State state;
	
	
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
		
		return this.stateRepository.findAllBy();
	}
	
    
}
