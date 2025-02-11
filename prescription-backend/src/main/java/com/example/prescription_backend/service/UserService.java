package com.example.prescription_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.example.prescription_backend.model.*;
import com.example.prescription_backend.repository.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private JWTService jwtService;

    @Autowired
    AuthenticationManager authManager;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(10);

    public String addUser(User user){
        user.setPassword(encoder.encode(user.getPassword()));
        userRepo.save(user);
        return "User Regesiterd";
    }

    public String verify(User user) {
        Authentication authentication = authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getName(), user.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(user.getName());
        } else {
            return "fail";
        }
    }
}
