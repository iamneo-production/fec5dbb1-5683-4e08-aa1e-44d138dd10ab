package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Models.OpportunityPage;
import com.example.demo.Services.OpportunityPageService;

@RestController
@RequestMapping("/api/opportunitypage")
@CrossOrigin 
public class OpportunityPageController {
	@Autowired
    private OpportunityPageService opportunityService;

    @GetMapping
    public List<OpportunityPage> getAllOpportunities() {
        return opportunityService.getAllOpportunities();
    }

    @GetMapping("/{id}")
    public OpportunityPage getOpportunityById(@PathVariable Long id) {
        return opportunityService.getOpportunityById(id);
    }

    @PostMapping
    public OpportunityPage createOpportunity(@RequestBody OpportunityPage opportunity) {
        return opportunityService.createOpportunity(opportunity);
    }

    @DeleteMapping("/{id}")
    public void deleteOpportunity(@PathVariable Long id) {
        opportunityService.deleteOpportunity(id);
    }
}
