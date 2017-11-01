package com.dr.in.model;

import org.springframework.stereotype.Component;

@Component
public class TimeSlot {
	
	private Time start;
	private Time end;
	
	
	
	public Time getStart() {
		return start;
	}
	public void setStart(Time start) {
		this.start = start;
	}
	public Time getEnd() {
		return end;
	}
	public void setEnd(Time end) {
		this.end = end;
	}
	
	
	
}
