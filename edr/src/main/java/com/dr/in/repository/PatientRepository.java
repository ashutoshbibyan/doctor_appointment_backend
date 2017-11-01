package com.dr.in.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dr.in.model.Patient;

public interface PatientRepository extends MongoRepository<Patient, String> {

}
