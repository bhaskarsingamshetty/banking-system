package com.example.BankBackend.service;

import com.example.BankBackend.model.Account;
import com.example.BankBackend.model.Users;
import com.example.BankBackend.repository.AccountRepo;
import com.example.BankBackend.repository.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountService {

    @Autowired
    private AccountRepo repo;

    @Autowired
    private UsersRepo urepo;

    public String getAccountNumber(String email) {
        Users user = urepo.findByEmail(email);
        if (user != null) {
            return user.getAccountNumber();
        } else {
            return "User not found";
        }
    }

    public Integer getBalanceByAccountNumber(String accountNumber) {
        Optional<Account> account = repo.findByAccountNumber(accountNumber);
        return account.map(Account::getAmount).orElse(null);
    }
}
