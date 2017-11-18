package com.dr.in.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.dr.in.model.CustomUserDetail;
import com.dr.in.model.User;

@Service
public class CustomUserDetailsService implements UserDetailsService{
	
	@Autowired
	UserService userService;

	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		User user =this.userService.getUser(userName);
		
		if(user==null){
			throw new  UsernameNotFoundException("No User present with this username");
		}
		return new CustomUserDetail(user);
	}

}
