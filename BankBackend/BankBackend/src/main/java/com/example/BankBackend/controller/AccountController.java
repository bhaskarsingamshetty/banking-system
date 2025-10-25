package com.example.BankBackend.controller;

import com.example.BankBackend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class AccountController {
    @Autowired
    AccountService service;
    @GetMapping("/account/{Email}")
    public String GetAccNum(@PathVariable String Email)
    {
       return service.getAccountNumber(Email);
    }
    @GetMapping("/account/balance/{accountNumber}")
    public Integer getBalance(@PathVariable String accountNumber) {
        return service.getBalanceByAccountNumber(accountNumber);
    }

}
