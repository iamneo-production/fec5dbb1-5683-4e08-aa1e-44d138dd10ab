package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Models.Contact;
import com.example.demo.Repositories.ContactRepo;
import com.example.demo.Services.ContactService;

@CrossOrigin
@RestController
public class ContactController {
	@Autowired
	ContactService service;
	@Autowired
	ContactRepo Repo;
	
	
	@GetMapping("/getContact")
	public List <Contact> getList(){
		return Repo.findAll();
	}
	@PostMapping("/Contact/post")
	public Contact create(@RequestBody Contact a) {
		return Repo.save(a);
	}
	@PutMapping("/Contact/update")
	public String update(@RequestBody Contact a){
		return service.updateDetails(a);
	}
	@DeleteMapping("/Contact/delete/{email}")
	public String delete(@PathVariable Long id) {
		return service.deletedetails(id);
	}
}
