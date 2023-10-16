package com.qmul.XYZClinicalTrailServer.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qmul.XYZClinicalTrailServer.repo.TrailRepo;

@RestController
public class TrailController {

    @Autowired
    private TrailRepo trailRepo;

    // CRUD operations

    // API endpoint for Create
    @PostMapping("/addPatient")
    public void addPatient() {

    }

    // API endpoint for Read
    @GetMapping("/getAllPatientDetails")
    public void getAllPatientDetails() {

    }

    // API endpoint for Update
    @PutMapping("/getPatientById/{id}")
    public void getPatientById() {

    }

    // API endpoint for Delete
    @DeleteMapping("/deletePatientById/{id}")
    public void deletePatientById() {

    }
}
