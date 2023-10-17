package com.qmul.XYZClinicalTrailServer.model;

import java.util.*;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Patients")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Setter
@Getter
@ToString

public class Trail {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long patient_id;

    private String name;
    private Integer age;
    private String gender;
    private String condition;

    private Date recruitmentDate;
    private String location;
    private String registeredGP;
    private String phoneNumber;

    public Date getRecruitmentDate() {
        return recruitmentDate;
    }

    public void setRecruitmentDate(Date recruitmentDate) {
        this.recruitmentDate = recruitmentDate;
    }

    public String getRegisteredGP() {
        return registeredGP;
    }

    public void setRegisteredGP(String registeredGP) {
        this.registeredGP = registeredGP;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

}
