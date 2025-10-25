package com.example.BankBackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Entity
@Table(name = "loans")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Loan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long loanId;

    // ✅ This is the updated part
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Users user; // Changed from Long userId to Users user

    @Column(nullable = false)
    private String loanType; // e.g. Home, Personal, Education

    @Column(nullable = false)
    private Double amount;

    private Double interestRate;

    private String status; // e.g. PENDING, APPROVED, REJECTED

    private LocalDate dueDate;
}