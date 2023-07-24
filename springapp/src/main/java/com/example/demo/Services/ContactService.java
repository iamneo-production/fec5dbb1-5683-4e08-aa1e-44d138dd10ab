package com.example.demo.Services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Models.Contact;
import com.example.demo.Repositories.ContactRepo;

@Service
public class ContactService {
	@Autowired
	ContactRepo Repo;
	public String updateDetails(Contact a) {
		Repo.save(a);
		return "Updated";
	}
	public String deletedetails(Long id) {
		Repo.deleteById(id);
		return "Deleted";
	}
}
