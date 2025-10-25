package com.example.BankBackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data  // Generates getters, setters, toString, equals, hashCode automatically
@NoArgsConstructor  // No-argument constructor
@AllArgsConstructor  // All-argument constructor
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    @Column(nullable = false)
    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false)
    private String password;  // Hashed password (BCrypt)

    @Column(unique = true, nullable = false)
    private String accountNumber;  // Added account number field
}
