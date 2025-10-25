package com.example.BankBackend.model;

public class LoginResponse {
    private String token;
    private String accountNumber;

    public LoginResponse(String token, String accountNumber) {
        this.token = token;
        this.accountNumber = accountNumber; // ✅ Fixed
    }

    public String getToken() {
        return token;
    }

    public String getAccountNumber() {
        return accountNumber;
    }
}
