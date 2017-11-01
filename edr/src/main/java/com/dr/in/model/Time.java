package com.dr.in.model;

import org.springframework.stereotype.Component;

@Component
public class Time {
	
	private int hour;
	private int minute;
	private String meridien;
	
	
	public int getHour() {
		return hour;
	}
	
	public void setHour(int hour) {
		this.hour = hour;
	}
	
	public int getMinute() {
		return minute;
	}
	
	public void setMinute(int minute) {
		this.minute = minute;
	}
	
	public String getMeridien() {
		return meridien;
	}
	
	public void setMeridien(String meridien) {
		this.meridien = meridien;
	}
	
	
	
	
	
}
