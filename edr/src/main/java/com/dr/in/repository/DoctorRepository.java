package com.dr.in.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dr.in.model.Doctor;

public interface DoctorRepository extends MongoRepository<Doctor, String> {

}
