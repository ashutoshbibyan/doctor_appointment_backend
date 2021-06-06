package com.dr.in.services;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.mongodb.MongoClientURI;

@Service
public class AmazonS3Service {

	private AmazonS3 s3client;

    @Value("${endpointUrl}")
    private String endpointUrl;
    @Value("${bucketName}")
    private String bucketName;
    @Value("${accessKey}")
    private String accessKey;
    @Value("${secretKey}")
    private String secretKey;
    
    
    @PostConstruct
    private void initializeAmazon() {
       AWSCredentials credentials = new BasicAWSCredentials(this.accessKey, this.secretKey);
       this.s3client = new AmazonS3Client(credentials);
}
    
    
    private File convertMultiPartToFile(MultipartFile file) {
        File convFile =null;
        final String dirPath = System.getProperty("java.io.tmpdir");
        FileOutputStream fos;
		try {
			convFile= new File(dirPath+"/"+file.getOriginalFilename());
			fos = new FileOutputStream(convFile);
			fos.write(file.getBytes());
	        fos.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("INPUT OUTPUT ERROR WHILE UPLOADING FILE");
			e.printStackTrace();
		}
        
        return convFile;
    }

    
    private String generateFileName(MultipartFile multiPart) {
        return new Date().getTime() + "-" + multiPart.getOriginalFilename().replace(" ", "_");
    }
    
    
    private void uploadFileTos3bucket(String fileName, File file) {
        s3client.putObject(new PutObjectRequest(bucketName, fileName, file)
                .withCannedAcl(CannedAccessControlList.PublicRead));
        
    }
    
    
    public String uploadFile(MultipartFile multipartFile) {

        String fileUrl = "";
        try {
            File file = convertMultiPartToFile(multipartFile);
            String fileName = generateFileName(multipartFile);
            fileUrl = endpointUrl + "/" + bucketName + "/" + fileName;
            
            uploadFileTos3bucket(fileName, file);
            file.delete();
        } catch (Exception e) {
          System.out.println("Error while putting object");
           e.printStackTrace();
        }
        return fileUrl;
    }
    
    
    public String deleteFileFromS3Bucket(String fileUrl) {
        String fileName = fileUrl.substring(fileUrl.lastIndexOf("/") + 1);
        s3client.deleteObject(new DeleteObjectRequest(bucketName + "/", fileName));
        return "Successfully deleted";
    }

}
