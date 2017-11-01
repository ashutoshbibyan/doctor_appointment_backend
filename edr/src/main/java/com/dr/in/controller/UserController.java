package com.dr.in.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dr.in.model.FormResult;
import com.dr.in.model.User;
import com.dr.in.services.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
	@PostMapping(path="/api/public/signup/user")
	public FormResult userSignup(@RequestBody User user){
		
	  return this.userService.insertUser(user);
	}

}
