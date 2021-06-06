package com.dr.in.services;

import java.io.FileReader;
import java.util.List;

import com.dr.in.model.City;
import com.dr.in.model.Degree;
import com.dr.in.model.Disease;
import com.dr.in.model.Speciality;
import com.dr.in.model.State;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InitService {

    @Autowired
    private State state ;

    @Autowired 
    private City city ;

    @Autowired
    private Speciality speciality ;

    @Autowired
    private Degree degree ;

    @Autowired 
    private Disease disease ;


    public void InItStates(){

        city.setCityName("Kurukshetra");
        city.setCityPincode("13118");

        state.setStateName("Haryana");
        state.setStateId("1");
      
    }

    
}
