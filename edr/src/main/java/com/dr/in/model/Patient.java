package com.dr.in.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;


import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@Component
public class Patient {
	@Id
	private String patientId;
	private String name;
	private Date dateOfBirth;
	private String phoneNo;
	private Address address;
	
	private List<AppointmentInPatient> appointments;
	
	private List<Disease> diseases;
	
	
	private List<DoctorInPatient> doctors;
	
	
	
	public void addToDoctors(DoctorInPatient doctorInPatient){
		this.doctors.add(doctorInPatient);
	}
	
	
	public List<DoctorInPatient> getDoctors() {
		return doctors;
	}
	public void setDoctors(List<DoctorInPatient> doctors) {
		this.doctors = doctors;
	}
	public String getPatientId() {
		return patientId;
	}
	public void setPatientId(String patientId) {
		this.patientId = patientId;
	}
	public String getName() {
		return name;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public List<AppointmentInPatient> getAppointments() {
		return appointments;
	}
	public void setAppointments(List<AppointmentInPatient> appointments) {
		this.appointments = appointments;
	}
	public List<Disease> getDiseases() {
		return diseases;
	}
	public void setDiseases(List<Disease> diseases) {
		this.diseases = diseases;
	}

	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	
	

	
	
}
