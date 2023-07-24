package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class User {
	@Id
	
	private String username;
	private String email;
	private long phoneno;
	private String password;
	private String confirmPassword;

	public User(String username, String email, long phoneno, String password, String confirmPassword) {
		super();
		this.username = username;
		this.email = email;
		this.phoneno = phoneno;
		this.password = password;
		this.confirmPassword = confirmPassword;
	}
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public long getPhoneno() {
		return phoneno;
	}


	public void setPhoneno(long phoneno) {
		this.phoneno = phoneno;
	}


	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "user [name=" + username + ", phoneno=" + phoneno + ", email=" + email + ", password=" + password +", confirmPassword=" + confirmPassword
				+ "]";
	}


	
	
	
}
