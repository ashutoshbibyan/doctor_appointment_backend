package com.dr.in.model;

import org.springframework.stereotype.Component;

@Component
public class DoctorInPatient {

	private String docId;
	private String name;
	private String phoneno;
	private int appointmentFee;
	
	
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
	public String getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}
	public int getAppointmentFee() {
		return appointmentFee;
	}
	public void setAppointmentFee(int appointmentFee) {
		this.appointmentFee = appointmentFee;
	}
	
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((docId == null) ? 0 : docId.hashCode());
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
		DoctorInPatient other = (DoctorInPatient) obj;
		if (docId == null) {
			if (other.docId != null)
				return false;
		} else if (!docId.equals(other.docId))
			return false;
		return true;
	}
	
	
	
	
	
}
