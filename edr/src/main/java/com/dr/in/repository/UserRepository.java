package com.dr.in.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dr.in.model.Doctor;
import com.dr.in.model.User;

public interface UserRepository extends MongoRepository<User,String> {
	
	public User findOneBymobileNo(String mobileNo);


}
