package com.dr.in.model;

import java.time.Instant;

import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Component;

import com.querydsl.core.annotations.QueryEntity;

@QueryEntity
@Component
public class UserFile {

	@Id
	private String fileId;
	private String fileName;
	private String path;
	private String fileType;
	private String userId;
	private Instant createdAt;
	
	
	private long fileSize;
	
	

	public Instant getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Instant createdAt) {
		this.createdAt = createdAt;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getFileId() {
		return fileId;
	}

	public void setFileId(String fileId) {
		this.fileId = fileId;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public long getFileSize() {
		return fileSize;
	}

	public void setFileSize(long fileSize) {
		this.fileSize = fileSize;
	}
	
	
	
}
