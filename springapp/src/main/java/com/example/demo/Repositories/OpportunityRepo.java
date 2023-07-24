package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.Opportunity;

public interface OpportunityRepo extends JpaRepository<Opportunity, Long> {

}
