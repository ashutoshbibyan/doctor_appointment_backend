package com.dr.in.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dr.in.model.FormResult;
import com.dr.in.model.User;
import com.dr.in.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private User user;
	
	@Autowired
	private FormResult formResult;
	
	/** insertUser enter the use in the database */
	public FormResult insertUser(User user){
		
		
		this.user=this.getUser(user.getEmail());
		
		// if user is null that means its not in the database
		if(this.user==null){
			
			List<String> roles = new ArrayList<>();
			
			roles.add(user.getRole());
			
			user.setRoles(roles);
			
			this.user=this.userRepository.insert(user);
			
			if(this.user!=null){
				this.formResult.setResult(true);
				this.formResult.setMessage("User is inserted");
			}
			else{
				this.formResult.setResult(false);
				this.formResult.setMessage("User is not inserted");
			}
		}
		
		else{
			this.formResult.setResult(false);
			this.formResult.setMessage("User Already Exist");
		}
		
		
		
		return this.formResult;
		
	}
	
	public User getUser(String userId){
		
		return this.userRepository.findOne(userId);
		
	}
}
