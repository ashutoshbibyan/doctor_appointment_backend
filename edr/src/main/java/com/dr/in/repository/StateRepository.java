package com.dr.in.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.dr.in.model.State;

public interface StateRepository extends MongoRepository<State, String> {

	@Query(fields="{stateId:1,stateName:1}")
	public List<State> findAllBy(); 
}
