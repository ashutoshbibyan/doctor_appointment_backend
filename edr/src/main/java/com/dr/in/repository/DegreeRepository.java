package com.dr.in.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dr.in.model.Degree;

public interface DegreeRepository extends MongoRepository<Degree, String>{

}
