package com.dr.in.model;

import java.util.List;

public class Day implements Comparable<Day> {
	
	private String dayName;
	private int dayId;
	private boolean checked;
	
	private String dayStatus;
	
	private List<Hours> hours;

	
	
	public boolean isChecked() {
		return checked;
	}

	public void setChecked(boolean checked) {
		this.checked = checked;
	}

	public String getDayName() {
		return dayName;
	}

	public void setDayName(String dayName) {
		this.dayName = dayName;
	}

	public int getDayId() {
		return dayId;
	}

	public void setDayId(int dayId) {
		this.dayId = dayId;
	}

	public String getDayStatus() {
		return dayStatus;
	}

	public void setDayStatus(String dayStatus) {
		this.dayStatus = dayStatus;
	}

	public List<Hours> getHours() {
		return hours;
	}

	public void setHours(List<Hours> hours) {
		this.hours = hours;
	}

	
	@Override
	public int compareTo(Day o) {
		
		return this.dayId-o.dayId ;
	}
	
	
	
	
	
	

}
