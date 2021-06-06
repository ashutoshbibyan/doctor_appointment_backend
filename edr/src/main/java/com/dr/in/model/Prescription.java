package com.dr.in.model;

import org.springframework.stereotype.Component;

@Component
public class Prescription {
	
	
	private String symptoms;
	
	private String prescription;
	
	
	
	

	public String getSymptoms() {
		return symptoms;
	}

	public void setSymptoms(String symptoms) {
		this.symptoms = symptoms;
	}

	public String getPrescription() {
		return prescription;
	}

	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}
	
	
	

}
