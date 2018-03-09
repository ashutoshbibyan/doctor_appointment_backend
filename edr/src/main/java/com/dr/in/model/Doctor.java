package com.dr.in.model;

import java.time.Instant;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import com.dr.in.model.Degree;
import com.dr.in.model.Speciality;

import org.springframework.data.annotation.Id;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.stereotype.Component;

import com.querydsl.core.annotations.QueryEntity;




@QueryEntity
@Component
public class Doctor {
	
	@Id
	private String docId;
	private String name;
	private String about;
	private List<Degree> degrees;
	private List<Speciality> specialities;
	private List<Day> workingDays;
	private String addrLineOne;
	private String addrLineTwo;
	private String state;
	private String city;
	private int maxAppointments;
	private UserFile profileImage;
	
	
	
	
	public UserFile getProfileImage() {
		return profileImage;
	}
	public void setProfileImage(UserFile profileImage) {
		this.profileImage = profileImage;
	}
	public int getMaxAppointments() {
		return maxAppointments;
	}
	public void setMaxAppointments(int maxAppointments) {
		this.maxAppointments = maxAppointments;
	}
	private String phoneno;
	
	private AppointmentInDoctor appointments;
	private int appointmentFee;
	
	private List<Instant> holidays;
	
	
	public int getAppointmentFee() {
		return appointmentFee;
	}
	public void setAppointmentFee(int appointmentFee) {
		this.appointmentFee = appointmentFee;
	}
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
	
	public List<Degree> getDegrees() {
		return degrees;
	}
	public void setDegrees(List<Degree> degrees) {
		this.degrees = degrees;
	}
	public List<Speciality> getSpecialities() {
		return specialities;
	}
	public void setSpecialities(List<Speciality> specialities) {
		this.specialities = specialities;
	}
	public List<Instant> getHolidays() {
		return holidays;
	}
	public void setHolidays(List<Instant> holidays) {
		this.holidays = holidays;
	}
	public List<Day> getWorkingDays() {
		return workingDays;
	}
	public void setWorkingDays(List<Day> workingDays) {
		this.workingDays = workingDays;
	}
	public void addDayToWorkingDays(Day day){
		this.workingDays.add(day);
	}
	
	
	
	
	

}
