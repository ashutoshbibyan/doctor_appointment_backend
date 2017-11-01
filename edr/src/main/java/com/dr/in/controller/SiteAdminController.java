package com.dr.in.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dr.in.model.Disease;
import com.dr.in.model.FormResult;
import com.dr.in.model.State;
import com.dr.in.services.CommonServices;

@RestController
public class SiteAdminController {
	
	
	@Autowired
	private CommonServices commonServices;
	
	
	@PostMapping(path="/api/private/admin/disease/add")
	public FormResult addDisease( @RequestBody Disease disease){
	     return this.commonServices.addDisease(disease);
	}
	
	@PostMapping(path="/api/private/admin/state/add")
	public FormResult addState(@RequestBody State state){
		return this.commonServices.addState(state);
		
	}
	
	
	@GetMapping(path="/api/public/state/all")
	public List<State> getAllState(){
		return this.commonServices.getAllState();
	}
}
