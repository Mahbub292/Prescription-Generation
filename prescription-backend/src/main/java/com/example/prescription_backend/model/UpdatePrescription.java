package com.example.prescription_backend.model;


import java.time.LocalDate;

import lombok.Data;

@Data
public class UpdatePrescription {

    private long id;
    private LocalDate prescriptionDate;
    private String patientName;
    private long patientAge;
    private String patientGender;
    private String diagnosis;
    private String medicines;
    private LocalDate nextVisitDate;
    
}
