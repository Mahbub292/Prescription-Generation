package com.example.prescription_backend.repository;
import com.example.prescription_backend.model.*;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PrescriptionRepo extends JpaRepository<Prescription, Long>{
    
}
