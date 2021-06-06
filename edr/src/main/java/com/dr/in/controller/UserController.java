package com.dr.in.controller;

import java.io.IOException;
import java.security.Principal;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dr.in.model.FormResult;
import com.dr.in.model.MsgResponse;
import com.dr.in.model.User;
import com.dr.in.model.UserFile;
import com.dr.in.services.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
	
	/** getCurrentUser method takes no parameter and return the current logged in user 
	 *  @return User (user class object )*/
	@GetMapping(path="/api/public/get/currentuser")
	public User getCurrentUser(Principal currentUser){
		
		User user= null;
		
		
		if(currentUser!=null){
			user=this.userService.getUser(currentUser.getName());
		}
		
		return user;
	}
	
	
	@PostMapping(path="/api/public/signup/user")
	public FormResult userSignup(@RequestBody User user , HttpServletResponse response){
	  user.setMobileNo("+91"+user.getMobileNo());	  	  
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
	
	/** sendOtpAgain method takes two parameter mobile no and the retrytype which could be voice or text 
	 *  and return the formresult 
	 *  @param String (mobile no )
	 *  @param String (retrytype could be boice or text )
	 *  @return FormResult (formresult class object ) */
	
    @GetMapping(path="/api/public/user/resend/otp")
    public FormResult sendOtpAgain(@RequestParam String mobileNo , @RequestParam String retryType){
    	mobileNo= "+91"+mobileNo;

    	return this.userService.sendOtpAgain(mobileNo, retryType);
    }
    
    
    /**varifyMobileNo method takes two parameter one is the mobile no and other is the otp 
     * it return the formresult object 
     * @param String (phone no )
     * @param String (otp entered by user )
     * @return FormResult (object of the formresult )*/
    
    @GetMapping(path="/api/public/user/mobileno/verify")
    public FormResult varifyMobileNo(@RequestParam String mobileNo , @RequestParam String otp){
    	mobileNo= "+91"+mobileNo;
    	return this.userService.varifyMobileNo(mobileNo, otp);
    }

}
