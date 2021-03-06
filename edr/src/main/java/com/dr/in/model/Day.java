package com.dr.in.model;

import java.util.Iterator;
import java.util.List;

public class Day implements Comparable<Day> {
	
	private String dayName;
	private int dayId;
	private boolean checked;
	
	private String dayStatus;
	
	private List<Hours> hours;
	
	
/** getHourUsingHour method take Hours as a parameter and return the Hours value from the list 
 *  of hours in the currrent object which is equal to the parameter else return null*/	
	
 public  Hours	getHourUsingHour(Hours hour){
	    Hours hourValue = null;
		Iterator<Hours> iter= this.hours.iterator();
		while(iter.hasNext()){
			Hours currentValue=iter.next();
			if(currentValue.equals(hour)){
				hourValue=currentValue;
			}
		}
		
		return hourValue;
	}

	
	
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + dayId;
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
		Day other = (Day) obj;
		if (dayId != other.dayId)
			return false;
		return true;
	}
	
	
	
	
	
	

}
