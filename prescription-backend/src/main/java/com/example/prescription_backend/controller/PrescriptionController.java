package com.example.prescription_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.prescription_backend.model.*;
import com.example.prescription_backend.service.*;


import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Enumeration;
import jakarta.servlet.http.HttpServletRequest;


@RestController
public class PrescriptionController {

    @Autowired
    private PrescriptionService prescriptionService;
    
    @PostMapping("/prescription")
    public String addPrescription(@RequestBody Prescription prescription){
        return prescriptionService.addPrescription(prescription);
    }

    @GetMapping("/prescription")
    public List<Prescription> getPrescriptions(HttpServletRequest request){

        // System.out.println("=== Incoming Request Headers ===");
        
        // Enumeration<String> headerNames = request.getHeaderNames();
        // while (headerNames.hasMoreElements()) {
        //     String headerName = headerNames.nextElement();
        //     System.out.println(headerName + ": " + request.getHeader(headerName));
        // }

        return prescriptionService.getPrescriptions();
    }
    @GetMapping("/prescription/{id}")
    public Prescription getPrescriptionById(@PathVariable long id){
        return prescriptionService.getPrescriptionById(id);
    }


    @DeleteMapping("/prescription/{id}")
    public String deletePrescription(@PathVariable long id){
        if(prescriptionService.deletePrscription(id)){
            return "Delete Succesfully";
        }
        return "User Not Found";
    }

    @PutMapping("/prescription/{id}")
    public String updatePrescription(@PathVariable long id,@RequestBody UpdatePrescription updatePrescription){
        return prescriptionService.updatePrescription(id, updatePrescription);
    }
}
