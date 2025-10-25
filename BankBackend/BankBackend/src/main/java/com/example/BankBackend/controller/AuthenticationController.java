package com.example.BankBackend.controller;

import com.example.BankBackend.model.AuthRequest;
import com.example.BankBackend.model.LoginResponse;
import com.example.BankBackend.model.Users;
import com.example.BankBackend.repository.UsersRepo;
import com.example.BankBackend.security.JwtUtil;
import com.example.BankBackend.security.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UsersRepo usersRepo;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody AuthRequest authRequest) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword())
            );

            UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getEmail());
            String token = jwtUtil.generateToken(userDetails.getUsername());

            // ✅ Fetch user to get account number
            Users user = usersRepo.findByEmail(authRequest.getEmail());
            String accountNumber = user.getAccountNumber();

            return new LoginResponse(token,accountNumber);

        } catch (AuthenticationException e) {
            throw new RuntimeException("Invalid username or password");
        }
    }
}
