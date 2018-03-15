package com.dr.in.model;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Component;

import com.querydsl.core.annotations.QueryEntity;

@QueryEntity
@Component
public class Appointment {
	
	@Id
	private String appointmentId;
	

	private Instant date;
	private String doctorId;
	private String patientId;
	private String patientPhoneNo;
	private String doctorName;
	private String patientName;
	private String status;
	private boolean refund;
	private Hours hours;
	private int dayId;
	
	
	
	
	
	
	public int getDayId() {
		return dayId;
	}
	public void setDayId(int dayId) {
		this.dayId = dayId;
	}
	public Hours getHours() {
		return hours;
	}
	public void setHours(Hours hours) {
		this.hours = hours;
	}
	public String getPatientPhoneNo() {
		return patientPhoneNo;
	}
	public void setPatientPhoneNo(String patientPhoneNo) {
		this.patientPhoneNo = patientPhoneNo;
	}

	public Instant getDate() {
		return date;
	}
	public void setDate(Instant date) {
		this.date = date;
	}
	public String getDoctorId() {
		return doctorId;
	}
	public void setDoctorId(String doctorId) {
		this.doctorId = doctorId;
	}
	public String getPatientId() {
		return patientId;
	}
	public void setPatientId(String patientId) {
		this.patientId = patientId;
	}
	public String getDoctorName() {
		return doctorName;
	}
	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}
	public String getPatientName() {
		return patientName;
	}
	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public boolean isRefund() {
		return refund;
	}
	public void setRefund(boolean refund) {
		this.refund = refund;
	}
	public String getAppointmentId() {
		return appointmentId;
	}
	public void setAppointmentId(String appointmentId) {
		this.appointmentId = appointmentId;
	}
	
	
	
	
}
