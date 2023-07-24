package com.example.demo.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Models.OpportunityPage;
import com.example.demo.Repositories.OpportunityPageRepo;

@Service
public class OpportunityPageService {
	@Autowired
    private OpportunityPageRepo opportunityRepository;

    public List<OpportunityPage> getAllOpportunities() {
        return opportunityRepository.findAll();
    }

    public OpportunityPage getOpportunityById(Long id) {
        Optional<OpportunityPage> opportunity = opportunityRepository.findById(id);
        return opportunity.orElse(null);
    }

    public OpportunityPage createOpportunity(OpportunityPage opportunity) {
        return opportunityRepository.save(opportunity);
    }

    public void deleteOpportunity(Long id) {
        opportunityRepository.deleteById(id);
    }
}
