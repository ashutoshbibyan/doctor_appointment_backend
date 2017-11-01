package com.dr.in.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Component;

@Component
public class Doctor {
	
	@Id
	private String docId;
	private String name;
	private String about;
	private List<String> qualifications;
	private List<String> specialities;
	
	private String addrLineOne;
	private String addrLineTwo;
	private String state;
	private String city;
	
	private String phoneno;
	
	private AppointmentInDoctor appointments;
	private List<TimeSlot> timeSlots;
	
	
	public String getDocId() {
		return docId;
	}
	public void setDocId(String docId) {
		this.docId = docId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAbout() {
		return about;
	}
	public void setAbout(String about) {
		this.about = about;
	}
	public List<String> getQualifications() {
		return qualifications;
	}
	public void setQualifications(List<String> qualifications) {
		this.qualifications = qualifications;
	}
	public List<String> getSpecialities() {
		return specialities;
	}
	public void setSpecialities(List<String> specialities) {
		this.specialities = specialities;
	}
	public String getAddrLineOne() {
		return addrLineOne;
	}
	public void setAddrLineOne(String addrLineOne) {
		this.addrLineOne = addrLineOne;
	}
	public String getAddrLineTwo() {
		return addrLineTwo;
	}
	public void setAddrLineTwo(String addrLineTwo) {
		this.addrLineTwo = addrLineTwo;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}
	public AppointmentInDoctor getAppointments() {
		return appointments;
	}
	public void setAppointments(AppointmentInDoctor appointments) {
		this.appointments = appointments;
	}
	public List<TimeSlot> getTimeSlots() {
		return timeSlots;
	}
	public void setTimeSlots(List<TimeSlot> timeSlots) {
		this.timeSlots = timeSlots;
	}
	
	
	
	

}
