package com.qmul.XYZClinicalTrailServer.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qmul.XYZClinicalTrailServer.model.Trail;
import com.qmul.XYZClinicalTrailServer.repo.TrailRepo;

@RestController
@CrossOrigin("http://localhost:3000/")
public class TrailController {

    @Autowired
    private TrailRepo trailRepo;

    // CRUD operations

    // API endpoint for Create
    @PostMapping("/addPatient")
    public ResponseEntity<Trail> addPatient(@RequestBody Trail trail) {
        try {
            Trail patientObj = trailRepo.save(trail);
            return new ResponseEntity<>(patientObj, HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // API endpoint for Read
    @GetMapping("/getAllPatientDetails")
    public ResponseEntity<List<Trail>> getAllPatientDetails() {
        try {
            List<Trail> patientList = new ArrayList<>();
            trailRepo.findAll().forEach(patientList::add);

            if (patientList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(patientList, HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // API endpoint for update
    @PutMapping("/updatePatientById/{id}")
    public ResponseEntity<Trail> updatePatientById(@PathVariable Long id, @RequestBody Trail newPatientData) {
        try {
            Optional<Trail> oldPatientData = trailRepo.findById(id);

            if (oldPatientData.isPresent()) {
                Trail updatePatientData = oldPatientData.get();
                updatePatientData.setName(newPatientData.getName());
                updatePatientData.setAge(newPatientData.getAge());
                updatePatientData.setGender(newPatientData.getGender());
                updatePatientData.setCondition(newPatientData.getCondition());
                updatePatientData.setRecruitmentDate(newPatientData.getRecruitmentDate());
                updatePatientData.setLocation(newPatientData.getLocation());
                updatePatientData.setRegisteredGP(newPatientData.getRegisteredGP());
                updatePatientData.setPhoneNumber(newPatientData.getPhoneNumber());

                Trail patientObj = trailRepo.save(updatePatientData);

                return new ResponseEntity<>(patientObj, HttpStatus.OK);
            }

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // API endpoint for Delete
    @DeleteMapping("/deletePatientById/{id}")
    public ResponseEntity<HttpStatus> deletePatientById(@PathVariable Long id) {
        try {
            trailRepo.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
