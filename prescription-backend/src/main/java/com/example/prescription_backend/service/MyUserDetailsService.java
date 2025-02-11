package com.example.prescription_backend.service;

import com.example.prescription_backend.repository.*;
import com.example.prescription_backend.model.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepo userRepo;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findByName(username);
        if (user == null) {
            System.out.println("MyUserDetailsService:User Not Found");
            throw new UsernameNotFoundException("user not found");
        }
        
        return new UserPrincipal(user);
    }
}
