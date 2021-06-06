package com.dr.in.model;

import java.time.LocalDate;

import org.springframework.stereotype.Component;

@Component
public class Holiday {
	
	private LocalDate date;
	private String remarks;
	
	
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	
	
}
