package com.example.prescription_backend.model;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="prescription")
public class Prescription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
 
    private String prescriptionDate;
    
    private String patientName;
    
    private long patientAge;

    private String patientGender;

    private String diagnosis;

    private String medicines;

    private String nextVisitDate;

}
