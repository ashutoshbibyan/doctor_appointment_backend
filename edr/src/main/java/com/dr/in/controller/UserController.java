package com.dr.in.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dr.in.model.FormResult;
import com.dr.in.model.Principal;
import com.dr.in.model.User;
import com.dr.in.model.UserFile;
import com.dr.in.services.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
	@PostMapping(path="/api/public/signup/user")
	public FormResult userSignup(@RequestBody User user){
		
	  return this.userService.insertUser(user);
	}
	
	/** uploadImage method takes the multipart document as an parameter and save the 
	 *  image uploaded by the user 
	 *  @param MultipartFile (multiparfile object )
	 *  @return FormResult (object of the formresult class)*/
	
	@PostMapping(path="/api/private/upload/image")
	public FormResult uploadImage(@RequestBody MultipartFile img , Principal currentUser ){
		
		return this.userService.uploadImage (img,currentUser.getName());
	}
	
	
	/** getImages method send the list of images from the current user 
	 *  @return List<String> (list of image paths )*/
	
	@GetMapping(path="/api/private/user/get/images")
	public Page<UserFile> getImages( @RequestParam int pageNo , @RequestParam int pageSize , Principal currentUser){
		return this.userService.getImages(currentUser.getName(),pageNo, pageSize);
	}

}
