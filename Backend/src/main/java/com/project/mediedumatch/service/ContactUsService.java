package com.project.mediedumatch.service;


import com.project.mediedumatch.model.ContactUsForm;
import com.project.mediedumatch.repository.ContactUsFormRepository;
import com.project.mediedumatch.util.EmailUtil;

import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactUsService {

    private final ContactUsFormRepository contactUsFormRepository;

    @Autowired
    public ContactUsService(ContactUsFormRepository contactUsFormRepository) {
        this.contactUsFormRepository = contactUsFormRepository;
    }
    
    @Autowired
    private EmailUtil emailUtil;

    public String sendForm(com.project.mediedumatch.dto.ContactUsDto contactUsDto) {
        System.out.println(contactUsDto);

        try {
            emailUtil.sendEmail2("mediedumatch@gmail.com", "You have a new user complain","<h4>"+contactUsDto.getName()+"</h4></br>",contactUsDto.getEmail(),contactUsDto.getPhoneNo(),contactUsDto.getMessage());
        } catch (MessagingException e) {
            throw new RuntimeException("Unable to send otp please try again");
        }

     ContactUsForm form = new ContactUsForm();
        form.setName(contactUsDto.getName());
        form.setEmail(contactUsDto.getEmail());
        form.setMessage(contactUsDto.getMessage());
        form.setPhoneNo(contactUsDto.getPhoneNo());


        contactUsFormRepository.save(form);
        return "Form submission successful";
    }
}

