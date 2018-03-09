package com.dr.in.services;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.dr.in.model.FormResult;
import com.dr.in.model.QUserFile;
import com.dr.in.model.User;
import com.dr.in.model.UserFile;
import com.dr.in.repository.UserFileRepository;
import com.dr.in.repository.UserRepository;
import com.querydsl.core.types.Predicate;

@Service
public class UserService {
	
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

	/** upload image method takes the multipartfile as an parameter and save it online 
	 *  @param MultipartFile (object of the multipartfile)
	 *  @return FormResult (object of the form result )
	 * @throws IOException */
	
	public FormResult uploadImage(MultipartFile img, String userId)  {
		
		String UPLOADED_FOLDER="/home/ashu/git/edr/edr/src/main/webapp/assets/upload/";
		
          
                
            	byte[] bytes;
            	
            	
				try {
					
					bytes = img.getBytes();
					Path path = Paths.get(UPLOADED_FOLDER + img.getOriginalFilename());
					
	                Files.write(path, bytes);
	                
	                UserFile userFile= new UserFile();
	                
	                userFile.setCreatedAt(Instant.now());
	                userFile.setFileName(img.getOriginalFilename());
	                userFile.setFileSize(img.getSize());
	                userFile.setFileType(img.getContentType());
	                userFile.setPath("../assets/upload/"+img.getOriginalFilename());
	                userFile.setUserId(userId);
	                this.formResult=this.saveUserFile(userFile);                
	                
	               	} 
				
				
				catch (IOException e) {
					
					this.formResult.setError(true);
					this.formResult.setMessage("something went wrong while saving file try again");
					this.formResult.setResult(false);
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

   
}
