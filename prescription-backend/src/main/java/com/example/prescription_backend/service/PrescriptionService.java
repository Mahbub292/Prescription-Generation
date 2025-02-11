package com.example.prescription_backend.service;

import com.example.prescription_backend.repository.*;
import com.example.prescription_backend.model.*;

import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PrescriptionService {

    List<Prescription> prescriptions = new ArrayList<>();

    @Autowired
    private PrescriptionRepo prescriptionRepo;

    public String addPrescription(Prescription prescription){
        prescriptionRepo.save(prescription);
        return "Prescription Add";
    }

    public List<Prescription> getPrescriptions(){
        prescriptions = prescriptionRepo.findAll();
        return prescriptions;
    }

    public Prescription getPrescriptionById(long id){
        Prescription prescription = prescriptionRepo.findById(id).get();
        return prescription;
    }

    public boolean deletePrscription(long id){
        Prescription prescription = prescriptionRepo.findById(id).get();
        prescriptionRepo.delete(prescription);
        return true;
    }

    public String updatePrescription(long id, UpdatePrescription updatePrescription){
        Prescription prescription = prescriptionRepo.findById(id).get();

        prescription.setPrescriptionDate(updatePrescription.getPrescriptionDate());
        prescription.setPatientName(updatePrescription.getPatientName());
        prescription.setPatientAge(updatePrescription.getPatientAge());
        prescription.setPatientGender(updatePrescription.getPatientGender());
        prescription.setDiagnosis(updatePrescription.getDiagnosis());
        prescription.setMedicines(updatePrescription.getMedicines());
        prescription.setNextVisitDate(updatePrescription.getNextVisitDate());
       
        prescriptionRepo.save(prescription);
        return "Update succesfully";

    }
}
