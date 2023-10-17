package com.qmul.XYZClinicalTrailServer;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.qmul.XYZClinicalTrailServer.model.Trail;
import com.qmul.XYZClinicalTrailServer.repo.TrailRepo;

@DataJpaTest
public class TrailRepoTests {

    @Autowired
    private TrailRepo trailRepo;

    // API endpoint testing for POST method
    @Test
    public void testPostRecord() {
        Trail trail = Trail.builder()
                .name("John Smith")
                .age(45)
                .gender("Male")
                .condition("Hypertension")
                .recruitmentDate(Date.valueOf("2023-08-05"))
                .location("London")
                .registeredGP("ABC Clinic")
                .phoneNumber("0123123123").build();

        Trail data = trailRepo.save(trail);
        assertNotNull(data.getPatient_id());
    }

    // API endpoint testing for GET method
    @Test
    public void testGetAllRecord() {
        Trail trail = Trail.builder()
                .name("John Smith")
                .age(45)
                .gender("Male")
                .condition("Hypertension")
                .recruitmentDate(Date.valueOf("2023-08-05"))
                .location("London")
                .registeredGP("ABC Clinic")
                .phoneNumber("0123123123").build();

        trailRepo.save(trail);
        List<Trail> getAllData = trailRepo.findAll();
        assertTrue(getAllData.size() > 0);
    }

    // API endpoint testing for UPDATE method
    @Test
    public void testUpdateRecord() {

        // initial data
        Trail trail = Trail.builder()
                .name("John Smith")
                .age(45)
                .gender("Male")
                .condition("Hypertension")
                .recruitmentDate(Date.valueOf("2023-08-05"))
                .location("London")
                .registeredGP("ABC Clinic")
                .phoneNumber("0123123123").build();

        Trail data = trailRepo.save(trail);

        Optional<Trail> getInitialData = trailRepo.findById(data.getPatient_id());
        assertTrue(getInitialData.isPresent());

        // update data

        Trail updatedTrail = getInitialData.get();
        updatedTrail.setAge(46);
        updatedTrail.setRegisteredGP("XYZ clinic");

        assertAll("newData",
                () -> assertEquals(updatedTrail.getPatient_id(), data.getPatient_id()),
                () -> assertEquals(46, updatedTrail.getAge()),
                () -> assertEquals("XYZ clinic", updatedTrail.getRegisteredGP()));

    }

    // API endpoint testing for DELETE method

    @Test
    public void testDeleteRecord() {
        Trail trail = Trail.builder()
                .name("John Smith")
                .age(45)
                .gender("Male")
                .condition("Hypertension")
                .recruitmentDate(Date.valueOf("2023-08-05"))
                .location("London")
                .registeredGP("ABC Clinic")
                .phoneNumber("0123123123").build();

        Trail data = trailRepo.save(trail);

        trailRepo.deleteById(data.getPatient_id());
        Optional<Trail> deletedData = trailRepo.findById(data.getPatient_id());

        assertFalse(deletedData.isPresent());
    }

}
