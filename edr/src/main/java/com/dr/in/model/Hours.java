package com.dr.in.model;

import java.time.LocalTime;

import org.springframework.stereotype.Component;

import com.querydsl.core.annotations.QueryEntity;


@Component
public class Hours implements Comparable<Hours>{

	

	private String startAt;
	private String closeAt;
	private int maxPatientNo;
	
	 
	
	
	
	public int getMaxPatientNo() {
		return maxPatientNo;
	}


	public void setMaxPatientNo(int maxPatientNo) {
		this.maxPatientNo = maxPatientNo;
	}


	public String getStartAt() {
		return startAt;
	}
	
	
	public void setStartAt(String startAt) {
		this.startAt = startAt;
	}
	
	
	public String getCloseAt() {
		return closeAt;
	}
	
	
	public void setCloseAt(String closeAt) {
		this.closeAt = closeAt;
	}


	@Override
	public int compareTo(Hours hour) {
		return this.startAt.compareTo(hour.startAt);
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((closeAt == null) ? 0 : closeAt.hashCode());
		result = prime * result + maxPatientNo;
		result = prime * result + ((startAt == null) ? 0 : startAt.hashCode());
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
		Hours other = (Hours) obj;
		if (closeAt == null) {
			if (other.closeAt != null)
				return false;
		} else if (!closeAt.equals(other.closeAt))
			return false;
		if (maxPatientNo != other.maxPatientNo)
			return false;
		if (startAt == null) {
			if (other.startAt != null)
				return false;
		} else if (!startAt.equals(other.startAt))
			return false;
		return true;
	}

	
	
	
}
