package com.dr.in.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Component;

@Component
public class State {

	@Id
	private String stateId;
	private String stateName;
	private List<City> cities;
	
	public void addCity(City city){
		this.cities.add(city);
	}
	
	public String getStateId() {
		return stateId;
	}
	public void setStateId(String stateId) {
		this.stateId = stateId;
	}
	public String getStateName() {
		return stateName;
	}
	public void setStateName(String stateName) {
		this.stateName = stateName;
	}
	public List<City> getCities() {
		return cities;
	}
	public void setCities(List<City> cities) {
		this.cities = cities;
	}
	
	
	
	
}
