package com.project.mediedumatch.dto;


import com.fasterxml.jackson.annotation.JsonProperty;

//import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
//import org.hibernate.annotations.IdGeneratorType;

@Getter
@Setter
public class ContactUsDto {

    private String email;
    private String name;

    @JsonProperty("phone_no")
    private String phoneNo;
    private String message;

}
