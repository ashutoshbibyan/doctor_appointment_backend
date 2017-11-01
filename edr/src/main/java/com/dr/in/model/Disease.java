package com.dr.in.model;

import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Component;

@Component
public class Disease {
	
	@Id
	private String diseaseId;
	private String diseaseName;
	private String diseaseDiscription;
	
	
	
	public String getDiseaseId() {
		return diseaseId;
	}
	public void setDiseaseId(String diseaseId) {
		this.diseaseId = diseaseId;
	}
	public String getDiseaseName() {
		return diseaseName;
	}
	public void setDiseaseName(String diseaseName) {
		this.diseaseName = diseaseName;
	}
	public String getDiseaseDiscription() {
		return diseaseDiscription;
	}
	public void setDiseaseDiscription(String diseaseDiscription) {
		this.diseaseDiscription = diseaseDiscription;
	}
	
	
}
