package com.dr.in.model;

import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Component;

@Component
public class Speciality {

	@Id
	private String specialityName;
	
	
	
	public String getSpecialityName() {
		return specialityName;
	}
	public void setSpecialityName(String specialityName) {
		this.specialityName = specialityName;
	}
	
	
	
	
	
	
	
	
	
}
