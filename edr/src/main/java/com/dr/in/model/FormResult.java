package com.dr.in.model;

import org.springframework.stereotype.Component;

@Component
public class FormResult {
	
	private boolean result;
	private String message;
	
	
	public boolean isResult() {
		return result;
	}
	
	
	public void setResult(boolean result) {
		this.result = result;
	}
	
	
	public String getMessage() {
		return message;
	}
	
	
	public void setMessage(String message) {
		this.message = message;
	}
	
	
	
}
