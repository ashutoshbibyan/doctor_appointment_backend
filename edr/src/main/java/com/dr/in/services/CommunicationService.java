package com.dr.in.services;




import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.dr.in.model.MsgResponse;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;



@Service
public class CommunicationService {
	
	  	  
	  private static final String MSG91_URL = "https://control.msg91.com/api/";
	  private static final String SEND_PATH = "sendotp.php";
	  private static final String RETRY_PATH = "retryotp.php";
	  private static final String VERIFY_PATH = "verifyRequestOTP.php";
	  
	  private final String authKey="212555ArVxvTRz5ae22bb4";
	 
	  private String senderId="EDROTP";
	  
	  @Autowired
	  private RestTemplate restTemplate;
	  
	  
	  
	  

	  


	/** sendPostRequest method takes two parameter one is the url and another is the list of 
	   *  namevaluepair which are the list of parameters for post request 
	   *  @param String (url of the post request )
	   *  @param List<NameValuePair> (List of NameValuePair object )
	   *  @return MsgResponse (object of MsgResponse Class)
	   *  */
	  
	  public MsgResponse sendPostRequest(String url, MultiValueMap<String,String> map){
		  
		 
		  
		  HttpHeaders headers = new HttpHeaders();
		  headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		  
		  
		 
		 
		  
		 
		  HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(map, headers);
		 
		  
		  
		  ResponseEntity<String> response = this.restTemplate.postForEntity(url, request, String.class);
		
	      
		  ObjectMapper objectMapper= new ObjectMapper();
		 
		  MsgResponse msgResponse = null;
		try {
			msgResponse = objectMapper.readValue(response.getBody(), MsgResponse.class);
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 
//		  MsgResponse msgResponse=null;
//		  CloseableHttpClient httpClient = HttpClients.createDefault();
//			 
//		  HttpPost httpPost= new HttpPost(url);
//		  
//		  
//		  try {
//				
//				httpPost.setEntity(new UrlEncodedFormEntity(params, "UTF-8"));
//				
//				
//	
//				
//				//Execute and get the response.
//				 
//				CloseableHttpResponse response = httpClient.execute(httpPost);
//				HttpEntity entity = response.getEntity();
//
//				if (entity != null) {
//				   // InputStream instream = entity.getContent();
//				    try {
//				    				    	
//				    	ObjectMapper objectMapper= new ObjectMapper();
//				    	// convert response to msgResponse object 
//				    	msgResponse =objectMapper.readValue(response.getEntity().getContent(), MsgResponse.class);
//				    	
//				       
//				    } finally {
//				        // instream.close();
//				    	response.close();
//				    	
//				    }
//				}
//				 
//				
//			}catch (Exception e) {
//				// TODO: handle exception
//				System.out.println(e.getMessage());
//			}
//		 
		  
		  
			  return msgResponse;
			  
		  
		  
	  }
	  
	  
	  /** sendOtp method takes only one parameter which is the mobile no to which otp has 
	   *  to send 
	   *  @param String (mobile no to which otp is send  )
	   *  @return MsgResponse (object of the class MsgResponse )*/
	  public MsgResponse sendOtp(String mobileNo){
		  
		 String url=this.MSG91_URL+this.SEND_PATH; 
		 
		 
		 MultiValueMap<String, String> map= new LinkedMultiValueMap<>();
		  map.add("authkey", this.authKey);
		  map.add("message", "Your verification OTP code is ##OTP##.It Will Expire "
		 		+ "in 24 Hours Don't Share it with anyone .");
		  map.add("sender", this.senderId);
		  
		  map.add("mobile", mobileNo);
		
		 // map.add("otp_expiry", "1440");
		 
		 return this.sendPostRequest(url, map);
		  
	  }
	  
	  
	 /** sendOtpAgain method takes two parameter one is the mobileNo and another is 
	  *  retryType which tell how to send otp in sms or voice call 
	  *  @param String ( mobile no to which otp is send again)
	  *  @param String ( retrytype which could be voice or text)
	  *  @param MsgResponse (object of the MsgResponse class ) */ 
	 public MsgResponse sendOtpAgain(String mobileNo , String retryType){
		 
		 String url=this.MSG91_URL+this.RETRY_PATH;
		 
		 MultiValueMap<String, String> map= new LinkedMultiValueMap<>();
		  map.add("authkey", this.authKey);
		  map.add("mobile", mobileNo);
		  map.add("retrytype", retryType);
		 
		
		 
		 return this.sendPostRequest(url, map);
		 
	 }
	 
	 
	 /** varifyOtp method takes two parameter one is the mobile no and the another is 
	  *  the otp and it return the MsgResponse object 
	  *  @param String (mobile no to be varified )
	  *  @param String (otp entered by user )
	  *  @return MsgResponse (object of the MsgResponse class)*/
	 
	 public MsgResponse varifyOtp(String mobileNo,String otp){
		 
		 String url = this.MSG91_URL+this.VERIFY_PATH;
		 
		 
		 MultiValueMap<String, String> map= new LinkedMultiValueMap<>();
		  map.add("authkey", this.authKey);
		  map.add("mobile", mobileNo);
		  map.add("otp", otp);
		 
		 		 
		 
		 return this.sendPostRequest(url, map);
		 
	 }
	  
	
	

}
