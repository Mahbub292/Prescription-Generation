package com.example.prescription_backend.model;


import lombok.Data;

@Data
public class UpdatePrescription {

    private long id;
    private String prescriptionDate;
    private String patientName;
    private long patientAge;
    private String patientGender;
    private String diagnosis;
    private String medicines;
    private String nextVisitDate;
    
}
