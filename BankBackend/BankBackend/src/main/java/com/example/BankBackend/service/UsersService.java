package com.example.BankBackend.service;

import com.example.BankBackend.model.Account;
import com.example.BankBackend.model.Users;
import com.example.BankBackend.repository.AccountRepo;
import com.example.BankBackend.repository.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class UsersService {

    @Autowired
    private UsersRepo usersRepo;
    @Autowired
    private AccountRepo accRepo;
    public List<Users> getUsers() {
        return usersRepo.findAll();
    }

    public Users getUserById(int id) {
        return usersRepo.findById(id).orElse(null);
    }

    public String addUser(Users u) {
        // Step 1: Generate unique account number
        String accountNumber = generateUniqueAccountNumber();
        u.setAccountNumber(accountNumber);

        // Step 2: Save user
        Users savedUser = usersRepo.save(u);


//        // Step 3: Create and set up a new Account object
        Account account = new Account();
        account.setAccountNumber(accountNumber); // Set account number
        account.setUser(savedUser);              // Link the user

//        // Step 4: Save the account (other fields will take default values)
        accRepo.save(account);

        return "User and Account added successfully!";
    }


    public void deleteUser(int id) {
        usersRepo.deleteById(id);
    }

    public String generateUniqueAccountNumber() {
        String accountNumber;
        Random random = new Random();

        do {
            accountNumber = String.valueOf(1000000000L + (long) (random.nextDouble() * 9000000000L));
        } while (usersRepo.existsByAccountNumber(accountNumber));

        return accountNumber;
    }
}
