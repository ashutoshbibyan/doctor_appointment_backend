package com.dr.in.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;

import com.dr.in.model.Appointment;

public interface AppointmentRepository extends MongoRepository<Appointment,String>,
QueryDslPredicateExecutor<Appointment>{
	
}