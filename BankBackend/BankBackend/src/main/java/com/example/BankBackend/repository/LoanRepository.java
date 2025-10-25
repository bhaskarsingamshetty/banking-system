package com.example.BankBackend.repository;

import com.example.BankBackend.model.Loan;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface LoanRepository extends JpaRepository<Loan, Long> {
    // ✅ Find by the 'accountNumber' field within the nested 'user' object
    List<Loan> findByUser_AccountNumber(String accountNumber);
}