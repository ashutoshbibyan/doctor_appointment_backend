package com.dr.in.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;

import com.dr.in.model.Doctor;
import com.querydsl.core.types.Predicate;

public interface DoctorRepository extends MongoRepository<Doctor, String> ,QueryDslPredicateExecutor<Doctor>{
	
	
	@Query(fields="{appointments:0}")
	public Doctor findOnePublicDoctorBydocId(String docId);

	@Query(value="{state:?0,city:?1}",fields="{appointments:0}")
	public List<Doctor> findAllByStateAndCity(String state,String city);
	
	
}