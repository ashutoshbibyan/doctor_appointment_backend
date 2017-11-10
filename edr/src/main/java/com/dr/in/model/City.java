package com.dr.in.model;

import org.springframework.stereotype.Component;

@Component
public class City {
	
	private String cityName;
	private String cityPincode;
	
	
	public String getCityName() {
		return cityName;
	}
	public void setCityName(String cityName) {
		this.cityName = cityName;
	}
	public String getCityPincode() {
		return cityPincode;
	}
	public void setCityPincode(String cityPincode) {
		this.cityPincode = cityPincode;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((cityName == null) ? 0 : cityName.hashCode());
		result = prime * result + ((cityPincode == null) ? 0 : cityPincode.hashCode());
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
		City other = (City) obj;
		if (cityName == null) {
			if (other.cityName != null)
				return false;
		} else if (!cityName.equals(other.cityName))
			return false;
		if (cityPincode == null) {
			if (other.cityPincode != null)
				return false;
		} else if (!cityPincode.equals(other.cityPincode))
			return false;
		return true;
	}
	
	
	
}
