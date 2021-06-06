package com.dr.in.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.dr.in.model.Disease;

public interface DiseaseRepository extends MongoRepository<Disease,String> {

	
	@Query(fields="{diseaseName:1,diseaseId:1}")
	public List<Disease> findAllBy(Sort sort);
}
