package com.example.BankBackend.controller;

import com.example.BankBackend.model.Users;
import com.example.BankBackend.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;




import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class UsersController {
    @Autowired
    UsersService service;

    @GetMapping("/users")
    public List<Users> getUsers(){
        return service.getUsers();
    }

    @GetMapping("/user/{id}")
    public Users getById(@PathVariable int id){
        return service.getUserById(id);
    }

    @PostMapping("/users")
    public ResponseEntity<String> addUser(@RequestBody Users user) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);
        service.addUser(user);
        return ResponseEntity.status(201).body("User created successfully");
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id){
        service.deleteUser(id);
        return ResponseEntity.status(201).body("data deleted successfully");
    }

}
