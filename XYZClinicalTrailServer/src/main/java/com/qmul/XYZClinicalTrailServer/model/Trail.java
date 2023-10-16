package com.qmul.XYZClinicalTrailServer.model;

import java.util.*;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Patients")
@NoArgsConstructor
@AllArgsConstructor
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

    private Date recruitment_date;
    private String location;
    private String registered_gp;
    private String phone_number;

    public Date getRecruitmentDate() {
        return recruitment_date;
    }

    public void setRecruitmentDate(Date recruitment_date) {
        this.recruitment_date = recruitment_date;
    }

    public String getRegisteredGP() {
        return registered_gp;
    }

    public void setRegisteredGP(String registered_gp) {
        this.registered_gp = registered_gp;
    }

    public String getPhoneNumber() {
        return phone_number;
    }

    public void setPhoneNumber(String phone_number) {
        this.phone_number = phone_number;
    }

}
