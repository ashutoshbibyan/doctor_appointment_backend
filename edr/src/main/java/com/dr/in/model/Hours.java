package com.dr.in.model;

import java.time.LocalTime;

public class Hours {

	private LocalTime startAt;
	private LocalTime closeAt;
	
	
	
	public LocalTime getStartAt() {
		return startAt;
	}
	
	
	public void setStartAt(LocalTime startAt) {
		this.startAt = startAt;
	}
	
	
	public LocalTime getCloseAt() {
		return closeAt;
	}
	
	
	public void setCloseAt(LocalTime closeAt) {
		this.closeAt = closeAt;
	}
	
	
}
