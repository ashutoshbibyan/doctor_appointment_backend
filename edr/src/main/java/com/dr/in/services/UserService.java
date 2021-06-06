package com.dr.in.services;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Instant;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.auth.profile.ProfileCredentialsProvider;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.dr.in.model.FormResult;
import com.dr.in.model.MsgResponse;
import com.dr.in.model.QUserFile;

import com.dr.in.model.User;
import com.dr.in.model.UserFile;
import com.dr.in.repository.UserFileRepository;
import com.dr.in.repository.UserRepository;
import com.querydsl.core.types.Predicate;



@Service
public class UserService {
	
	@Autowired
	AmazonS3Service amazonS3Service;
	
    
	@Autowired
	CommunicationService communicationService;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired 
	private UserFileRepository userFileRepository;
	
	@Autowired 
	private UserFile userFile;
	
	@Autowired
	private User user;
	
	@Autowired
	private FormResult formResult;
	
	
	
	/** convertMultiPartToFile method takes a multipartfile file and convert it into 
	 * a file object and return it 
	 * @param MultipartFile (multipartfile object)
	 * @return File (File object)
	 * @throws IOException */
	
	private File convertMultiPartToFile(MultipartFile file) throws IOException {
	    File convFile = new File(file.getOriginalFilename());
	    FileOutputStream fos = new FileOutputStream(convFile);
	    fos.write(file.getBytes());
	    fos.close();
	    return convFile;
	}
	
	
	
	
	/** saveUserFile method takes the UserFile object and save it into database 
	 *  @param UserFile (object of userfile class)
	 *  @return FormResult (object of formresult class)*/
	
	public FormResult saveUserFile(UserFile userFile){
		
		this.userFile=this.userFileRepository.save(userFile);
		
		if(this.userFile!=null){
			this.formResult.setResult(true);
			this.formResult.setError(false);
			this.formResult.setMessage("file is saved");
		}
		
		else{
			this.formResult.setError(true);
			this.formResult.setResult(false);
			this.formResult.setMessage("error while saving file try again ");
		}
		
		
		return this.formResult;
	}
	
	
	
	
	/** insertUser enter the use in the database */
	public FormResult insertUser(User user){
		
		this.user=this.getUser(user.getMobileNo());
		
		// if user is null that means its not in the database
		if(this.user==null){
			
			List<String> roles = new ArrayList<>();
			
			BCryptPasswordEncoder passwordEncoder= new BCryptPasswordEncoder();
			
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			
			roles.add(user.getRole());
			
			user.setRoles(roles);

			user.setEnabled(true);
			
			this.user=this.userRepository.insert(user);
			
			if(this.user!=null){
				
			   // this.sendOtp(this.user.getMobileNo());
								
				this.formResult.setResult(true);
				this.formResult.setError(false);
				this.formResult.setMessage("User is inserted");
			}
			else{
				this.formResult.setResult(false);
				this.formResult.setError(true);
				this.formResult.setMessage("User is not inserted");
			}
		}
		
		else{
			this.formResult.setResult(false);
			this.formResult.setError(true);
			this.formResult.setMessage("User Already Exist");
		}
		
		
		
		return this.formResult;
		
	}
	
	public User getUser(String mobileNo){
		
		return this.userRepository.findOneBymobileNo(mobileNo);
		
	}

	/** upload image method takes the multipartfile as an parameter and save it online 
	 *  @param MultipartFile (object of the multipartfile)
	 *  @return FormResult (object of the form result )
	 * @throws IOException */
	
	public FormResult uploadImage(MultipartFile img, String userId){
		
		
		
		String fileUrl=this.amazonS3Service.uploadFile(img);
		
		if(fileUrl.isEmpty()){
			
			this.formResult.setError(true);
			this.formResult.setResult(false);
			this.formResult.setMessage("Something Went Wrong While Saving File");
			
		}
		else{
			UserFile userFile= new UserFile();
		      
	        userFile.setCreatedAt(Instant.now());
	        userFile.setFileName(img.getOriginalFilename());
	        userFile.setFileSize(img.getSize());
	        userFile.setFileType(img.getContentType());
	        userFile.setPath(fileUrl);
	        userFile.setUserId(userId);
	        this.formResult=this.saveUserFile(userFile);    
		}
		
		
            return this.formResult;
        }

	
	/** getImages method takes one parameter which is the user id 
	 *  and return the list of images path for that user 
	 *  @param String (User id of the user  )
	 *  @return List<String> (list of images path)*/
	public Page<UserFile> getImages(String userId , int pageNo ,int pageSize) {
		
		QUserFile qUserFile= new QUserFile("userfile");
		
		Predicate predicate= qUserFile.userId.eq(userId);
		
		
		
		Pageable page = new PageRequest(pageNo, pageSize,Direction.DESC,"createdAt");
		
		return this.userFileRepository.findAll(predicate,page);
	}

	
	
	/** sendOtp method takes only one parameter which is the mobileno of the 
	 *  user and send an otp to that no it return the msgResponse object 
	 *  as the reponse 
	 *  @param String (mobile no in string )
	 *  @return MsgResponse (object of the MsgResponse)*/
	
	public MsgResponse sendOtp(String mobileNo){
		MsgResponse msgResponse = this.communicationService.sendOtp(mobileNo);
		System.out.println(msgResponse.getMessage());
		return msgResponse;
	}
   
	
	/**sendOtpAgain method take two parameter one is the mobile no and another is the 
	 * retryType it could be voice or text and it send MsgResponse object as response
	 * @param String (mobile no in string format )
	 * @return FormResult(object of the FormResult)*/
	public FormResult sendOtpAgain(String mobileNo , String retryType){
		
		MsgResponse response= this.communicationService.sendOtpAgain(mobileNo, retryType);
		System.out.println(response.getMessage());
		
		if(response.getType().equals("success")){
			this.formResult.setError(false);
			this.formResult.setResult(true);
			this.formResult.setMessage("Otp is Resend to Your No ");
		}
		
		else {
			this.formResult.setError(true);
			this.formResult.setResult(false);
			this.formResult.setMessage("Error while trying to resend otp try again");
		}
		
		return this.formResult;
		
	}
	
	
	/**varifyMobileNo method takes three  parameter one is userid , the mobile no and other is the 
	 * otp and return the MsgResponse object in return 
	 * @param String (mobile no to be varified )
	 * @param Strign (otp entered by user )
	 * @return FormResult (object of FormResult class )*/
	
	public FormResult varifyMobileNo( String mobileNo ,String otp){
		
		MsgResponse response=this.communicationService.varifyOtp(mobileNo, otp);
		
		if(response!=null){
			System.out.println(response.getMessage());
			System.out.println(otp);
			if(response.getType().equals("success")){
				
				this.user= this.getUser(mobileNo);
				
				this.user.setEnabled(true);
				this.user.setMobileNoVarified(true);
				
				this.userRepository.save(this.user);
				
				this.formResult.setResult(true);
				this.formResult.setError(false);
				this.formResult.setMessage("Phone no is varified and Account is Enabled");
				
			}
			
			else {
				
				this.formResult.setError(true);
				this.formResult.setResult(false);
				this.formResult.setMessage("Error while varifying Mobile No");
				
			}
		}
		else{
			this.formResult.setError(true);
			this.formResult.setResult(false);
			this.formResult.setMessage("Error while varifying Mobile No (null)");
		}
		
		
		
		
		return this.formResult;
	}
	
	
	
}
