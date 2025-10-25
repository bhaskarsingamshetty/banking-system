package com.example.BankBackend.repository;

import com.example.BankBackend.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepo extends JpaRepository<Users,Integer> {
    Users findByEmail(String email);

    boolean existsByAccountNumber(String accountNumber);

    Users findByAccountNumber(String accountNumber); // ✅ ADD THIS METHOD
}