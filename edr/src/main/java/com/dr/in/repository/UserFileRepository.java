package com.dr.in.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;

import com.dr.in.model.UserFile;

public interface UserFileRepository extends MongoRepository<UserFile, String> ,QueryDslPredicateExecutor<UserFile>{

}
