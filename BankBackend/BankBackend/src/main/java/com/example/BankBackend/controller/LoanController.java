package com.example.BankBackend.controller;

import com.example.BankBackend.model.Loan;
import com.example.BankBackend.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/loans")
@CrossOrigin(origins = "http://localhost:5173")
public class LoanController {

    @Autowired
    private LoanService loanService;

    /**
     * Endpoint to apply for a loan.
     * The user's account number is passed in the URL.
     * The loan details (amount, type) are in the request body.
     */
    @PostMapping("/apply/{accountNumber}") // ✅ Changed from userId
    public ResponseEntity<Loan> applyForLoan(@RequestBody Loan loan, @PathVariable String accountNumber) { // ✅ Changed from userId
        try {
            Loan newLoan = loanService.applyForLoan(loan, accountNumber); // ✅ Pass accountNumber
            return ResponseEntity.status(HttpStatus.CREATED).body(newLoan);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null); // User not found
        }
    }

    /**
     * Endpoint to get all loans for a specific user.
     */
    @GetMapping("/user/{accountNumber}") // ✅ Changed from userId
    public ResponseEntity<List<Loan>> getUserLoans(@PathVariable String accountNumber) { // ✅ Changed from userId
        try {
            List<Loan> loans = loanService.getLoansByAccountNumber(accountNumber); // ✅ Call renamed service method
            return ResponseEntity.ok(loans);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null); // User not found
        }
    }
}