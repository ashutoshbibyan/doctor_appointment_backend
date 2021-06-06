package com.dr.in.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.encoding.PasswordEncoder;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

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
		//	.antMatchers("/api/private/dr/*").hasRole("DOCTOR")
		//	.antMatchers("/dr/*").hasRole("DOCTOR")
			//.antMatchers("/patient/*").hasRole("PATIENT")
			//.antMatchers("/api/private/patient/*").hasRole("PATIENT")
			.antMatchers("/dr/signup").permitAll()
				// .antMatchers("/api/**").permitAll()
				.antMatchers("/api/public/**").permitAll()
				
				.antMatchers("/user/login").permitAll()
				.and()
			
				.formLogin().successHandler(mySuccessHandler)
				.loginPage("/user/login")
				.failureUrl("/user/login?error=true")
	
				.usernameParameter("userName")
				.passwordParameter("password")
				.and()
				.logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutSuccessUrl("/login")
				.and()
				.csrf()
				.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
	}
	
	
	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
	    return new BCryptPasswordEncoder();
	}
	
	 public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {    
		 //auth.inMemoryAuthentication().withUser("user").password("password").roles("USER");
		 auth.userDetailsService(this.userDetailService).passwordEncoder(passwordEncoder());
		 
		 
	 } 
}
