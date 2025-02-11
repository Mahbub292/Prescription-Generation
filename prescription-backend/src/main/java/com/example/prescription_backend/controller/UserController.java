package com.example.prescription_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.prescription_backend.service.UserService;
import com.example.prescription_backend.model.*;

@RestController
public class UserController {

    @Autowired
    private UserService userService;
    
    @GetMapping("/hi")
    public String hi(){
        return "hi";
    }

    @PostMapping("/register")
    public String register(@RequestBody User user){
        return userService.addUser(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user){
        return userService.verify(user);
    }
 }
