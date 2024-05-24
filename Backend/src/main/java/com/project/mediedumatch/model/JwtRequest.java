package com.project.mediedumatch.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class JwtRequest {
    private String email;
    private Long id;
    private String name;  // Include this if you want to add the name to the JWT token

    // Constructor
    public JwtRequest(String email, Long id) {
        this.email = email;
        this.id = id;
    }

    // Constructor including name
    // public JwtRequest(String email, Long id, String name) {
    //     this.email = email;
    //     this.id = id;
    //     this.name = name;
    // }

    // Getters and setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
