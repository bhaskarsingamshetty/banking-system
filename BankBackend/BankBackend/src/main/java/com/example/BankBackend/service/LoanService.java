package com.example.BankBackend.service;

import com.example.BankBackend.model.Loan;
import com.example.BankBackend.model.Users;
import com.example.BankBackend.repository.LoanRepository;
import com.example.BankBackend.repository.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional; // Import Optional

@Service
public class LoanService {

    @Autowired
    private LoanRepository loanRepository;

    @Autowired
    private UsersRepo usersRepo;

    /**
     * Applies for a new loan for a specific user, identified by account number.
     * @param loan The loan details (amount, type) from the request.
     * @param accountNumber The account number of the user applying for the loan.
     * @return The saved Loan object.
     */
    public Loan applyForLoan(Loan loan, String accountNumber) { // ✅ Changed userId to accountNumber
        // 1. Find the user who is applying by their account number
        Users user = usersRepo.findByAccountNumber(accountNumber);
        if (user == null) {
            throw new RuntimeException("User not found with account number: " + accountNumber);
        }

        // 2. Link the user to the loan
        loan.setUser(user);

        // 3. Set default values for a new loan application
        loan.setStatus("PENDING"); // All new loans start as PENDING

        if (loan.getLoanType().equalsIgnoreCase("PERSONAL")) {
            loan.setInterestRate(12.5);
            loan.setDueDate(LocalDate.now().plusYears(5));
        } else if (loan.getLoanType().equalsIgnoreCase("HOME")) {
            loan.setInterestRate(8.75);
            loan.setDueDate(LocalDate.now().plusYears(20));
        } else {
            loan.setInterestRate(10.0); // Default for other types
            loan.setDueDate(LocalDate.now().plusYears(3));
        }

        // 4. Save the new loan application to the database
        return loanRepository.save(loan);
    }

    /**
     * Gets all loans associated with a specific user by account number.
     * @param accountNumber The account number of the user.
     * @return A list of the user's loans.
     */
    public List<Loan> getLoansByAccountNumber(String accountNumber) { // ✅ Renamed method
        // Check if user exists first
        if (!usersRepo.existsByAccountNumber(accountNumber)) { // ✅ Use existing check
            throw new RuntimeException("User not found with account number: " + accountNumber);
        }

        // Use the updated repository method
        return loanRepository.findByUser_AccountNumber(accountNumber); // ✅ Use new repo method
    }
}