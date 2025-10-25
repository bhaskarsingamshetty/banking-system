package com.example.BankBackend.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.example.BankBackend.model.Users;

import java.util.Collection;
import java.util.Collections;

public class CustomUserDetails implements UserDetails {

    private Users user;

    public CustomUserDetails(Users user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // If you have roles, you can return them here.
        // For now, return an empty list.
        return Collections.emptyList();
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        // Assuming you're using email as username
        return user.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;  // Account is always valid
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;  // Account is never locked
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;  // Credentials are always valid
    }

    @Override
    public boolean isEnabled() {
        return true;  // Account is always enabled
    }
}
