package com.example.demo.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Models.Volunteer;
import com.example.demo.Repositories.VolunteerRepo;
import com.example.demo.Services.VolunteerServices;

@CrossOrigin
@RestController
public class VolunteerController {
	@Autowired
	VolunteerRepo Repo;
	@Autowired
	VolunteerServices service;
	@GetMapping("/getVolunteer")
	public List <Volunteer> getList(){
		return Repo.findAll();
	}
	@GetMapping("/Volunteer/{id}")
	public Volunteer getVolunteer(@PathVariable Long id) {
		return service.getVolunteerById(id);
	}
	@PostMapping("/Volunteer/post")
	public Volunteer create(@RequestBody Volunteer a) {
		return Repo.save(a);
	}
	@DeleteMapping("/Volunteer/delete/{id}")
	public String delete(@PathVariable Long id) {
		Repo.deleteById(id);
		return "Volunteer with ID " + id + " deleted successfully.";
	}
}
