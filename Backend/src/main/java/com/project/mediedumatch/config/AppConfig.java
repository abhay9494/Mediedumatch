package com.project.mediedumatch.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.project.mediedumatch.model.LoginResponse;

@Configuration
public class AppConfig {
    @Bean
    public LoginResponse loginResponse() {
        return new LoginResponse();
    }
}