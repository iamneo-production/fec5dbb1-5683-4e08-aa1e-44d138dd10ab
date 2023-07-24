package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Models.Volunteer;
import com.example.demo.Repositories.VolunteerRepo;

@Service
public class VolunteerServices {
	@Autowired
	VolunteerRepo Repo;
	public Volunteer getVolunteerById(Long id){
		return Repo.findById(id).get();
	}

	public String deletedetails(Long id) {
		Repo.deleteById(id);;
		return "Deleted";
	}
}
