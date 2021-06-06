package com.dr.in.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.dr.in.model.Patient;

public interface PatientRepository extends MongoRepository<Patient, String> {
	
	@Query(fields="{name:1,address:1}")
	public Patient findOnePublicPatientBypatientId(String patientId);

}
