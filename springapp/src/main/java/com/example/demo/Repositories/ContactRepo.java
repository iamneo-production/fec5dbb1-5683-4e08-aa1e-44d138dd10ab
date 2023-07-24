package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.Contact;


public interface ContactRepo extends JpaRepository<Contact, Long>{

}
