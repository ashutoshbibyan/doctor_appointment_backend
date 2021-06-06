package com.dr.in.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dr.in.model.Speciality;

public interface SpecialityRepository extends MongoRepository<Speciality, String>{

}
