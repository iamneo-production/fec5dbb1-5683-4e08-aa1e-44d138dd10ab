package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.Volunteer;


public interface VolunteerRepo extends JpaRepository<Volunteer, Long>{

}
