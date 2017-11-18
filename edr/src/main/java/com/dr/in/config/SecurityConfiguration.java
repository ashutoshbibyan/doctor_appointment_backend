package com.dr.in.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

import com.dr.in.services.CustomUserDetailsService;

@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
	
	@Autowired
	CustomUserDetailsService userDetailService;
	
	@Autowired
	MySuccessHandler mySuccessHandler;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			
			.authorizeRequests()
			.antMatchers("/api/private/**").permitAll()
			.antMatchers("/dr/signup").permitAll()
				.antMatchers("/api/**").permitAll()
				.antMatchers("/api/public/**").permitAll()
				
				.antMatchers("/user/signin").permitAll()
				.and()
				
				.formLogin().successHandler(mySuccessHandler)
				.loginPage("/user/login")
				.usernameParameter("userName")
				.passwordParameter("password")
				.and()
				.csrf()
				.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
	}
	
	
	 public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {    
		 //auth.inMemoryAuthentication().withUser("user").password("password").roles("USER");
		 auth.userDetailsService(this.userDetailService);
	 } 
}
