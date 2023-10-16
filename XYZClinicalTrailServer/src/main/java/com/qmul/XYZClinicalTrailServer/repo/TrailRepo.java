package com.qmul.XYZClinicalTrailServer.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qmul.XYZClinicalTrailServer.model.Trail;

@Repository
public interface TrailRepo extends JpaRepository<Trail, Long> {

}
