package com.qmul.XYZClinicalTrailServer.model;

import java.util.*;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

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

}
