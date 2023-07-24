package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
@Entity
public class Volunteer {
	@Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Long id;

	  private String name;
	  private String email;
	  private String skills;
	  private String interests;
	  private String availability;
	  
	  @Lob
	  private byte[] resume;

	  public Volunteer(String name, String email, String skills, String interests, String availability, byte[] resume) {
	    this.name = name;
	    this.email = email;
	    this.skills = skills;
	    this.interests = interests;
	    this.availability = availability;
	    this.resume = resume;
	  }

	  public Volunteer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
	    return id;
	  }

	  public void setId(Long id) {
	    this.id = id;
	  }

	  public String getName() {
	    return name;
	  }

	  public void setName(String name) {
	    this.name = name;
	  }

	  public String getEmail() {
	    return email;
	  }

	  public void setEmail(String email) {
	    this.email = email;
	  }

	  public String getSkills() {
	    return skills;
	  }

	  public void setSkills(String skills) {
	    this.skills = skills;
	  }

	  public String getInterests() {
	    return interests;
	  }

	  public void setInterests(String interests) {
	    this.interests = interests;
	  }

	  public String getAvailability() {
	    return availability;
	  }

	  public void setAvailability(String availability) {
	    this.availability = availability;
	  }

	  public byte[] getResume() {
	    return resume;
	  }

	  public void setResume(byte[] resume) {
	    this.resume = resume;
	  }
}
