package com.dr.in.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.dr.in.model.Doctor;

public interface DoctorRepository extends MongoRepository<Doctor, String> {
	
	
	@Query(fields="{about:0,appointments:0}")
	public Doctor findOnePublicDoctorBydocId(String docId);

}
