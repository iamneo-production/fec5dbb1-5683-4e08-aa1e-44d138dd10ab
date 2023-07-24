package com.example.demo.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Models.Opportunity;
import com.example.demo.Repositories.OpportunityRepo;

@Service
public class OpportunityService {
	@Autowired
    private OpportunityRepo opportunityRepository;


    public List<Opportunity> getAllOpportunities() {
        return opportunityRepository.findAll();
    }

    public Opportunity getOpportunityById(Long id) {
        Optional<Opportunity> opportunity = opportunityRepository.findById(id);
        return opportunity.orElse(null);
    }

    public Opportunity createOpportunity(Opportunity opportunity) {
        return opportunityRepository.save(opportunity);
    }

    public void deleteOpportunity(Long id) {
        opportunityRepository.deleteById(id);
    }
}
