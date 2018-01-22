package com.dr.in.model;

import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Component;

@Component
public class Speciality {

	@Id
	private String specialityName;
	
	
	
	public Speciality(){
		
	}
	
	public Speciality(String specialityName) {
		super();
		this.specialityName = specialityName;
	}
	
	
	public String getSpecialityName() {
		return specialityName;
	}
	
	
	public void setSpecialityName(String specialityName) {
		this.specialityName = specialityName;
	}
	
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((specialityName == null) ? 0 : specialityName.hashCode());
		return result;
	}
	
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Speciality other = (Speciality) obj;
		if (specialityName == null) {
			if (other.specialityName != null)
				return false;
		} else if (!specialityName.equals(other.specialityName))
			return false;
		return true;
	}
	
	
	
	
	
	
	
	
	
	
	
}
