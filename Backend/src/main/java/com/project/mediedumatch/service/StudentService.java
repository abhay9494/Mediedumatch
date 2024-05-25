package com.project.mediedumatch.service;

//import java.util.List;
//
//import com.project.mediedumatch.dto.LoginDto;
//import com.project.mediedumatch.dto.RegisterDto;
//import com.project.mediedumatch.model.Student;
//
//public interface StudentService {
//    public Student saveStudent(Student student);
//    public List<Student> getAllStudents();
//    String register(RegisterDto registerDto);
//    String verifyAccount(String email, String otp);
//    String regenerateOtp(String email);
//    String login(LoginDto loginDto);
//}

//import java.time.*;
//import java.util.List;
//import java.util.*;
//import ch.qos.logback.core.util.Duration;
// import com.example.registerapp.util.EmailUtil;
// import com.medlink.registerapp.util.OtpUtil;
//import com.project.mediedumatch.dto.RegisterDto;
import com.project.mediedumatch.model.ContactModel;

//import org.hibernate.type.descriptor.java.LocalDateJavaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.mediedumatch.repository.ContactRepository;

import com.project.mediedumatch.model.JwtRequest;
import com.project.mediedumatch.model.LoginRequest;
import com.project.mediedumatch.model.Student;
import com.project.mediedumatch.repository.StudentRepository;
import com.project.mediedumatch.util.JwtUtil;
import com.project.mediedumatch.util.EmailUtil;
import com.project.mediedumatch.util.OtpUtil;

import jakarta.mail.MessagingException;
//import java.time.LocalDate;
//import java.util.Optional;
import java.time.LocalDateTime;

@Service
public class StudentService {
    @Autowired
    StudentRepository studentRepository;

    @Autowired
    private OtpUtil otpUtil;

    @Autowired
    private EmailUtil emailUtil;

    @Autowired
    JwtUtil jwt;

    @Autowired
    ContactRepository contactRepository;

    public boolean authenticate(String token, JwtRequest student) {
        return this.jwt.validateToken(token, student);
    }

    public String createToken(JwtRequest student) {
        return this.jwt.generateToken(student);
    }

    public String login(LoginRequest log) throws Exception {
        try {
            Student student = studentRepository.findByEmail(log.getEmail());
            if (student == null) {
                throw new Exception("Student not found");
            }
            // Check if the student's account is active
            if (!student.isActive()) {
                throw new Exception("Account is not activated. Please verify your account.");
            }
            // Check if the provided password matches the stored password
            if (!student.getPassword().equals(log.getPassword())) {
                throw new Exception("Wrong password");
            }
            // If the email and password match, create and return a JWT token
            // JwtRequest jwtRequest = new JwtRequest(log.getEmail(), student.getId());
            JwtRequest jwtRequest = new JwtRequest(student.getEmail(), student.getId(), student.getName());
            sendWelcomeEmail(student.getEmail());
            return createToken(jwtRequest);
        } catch (Exception e) {
            // e.printStackTrace();
            throw new Exception("Login failed:,,,,,,,,,,, " + e.getMessage());
        }
    }

    public void sendWelcomeEmail(String email) {
        try {
            emailUtil.sendWelcomeEmail(email);
        } catch (MessagingException e) {
            throw new RuntimeException("Unable to send welcome email");
        }
    }

    // public String signUp(Student student) throws Exception {
    // try {
    // if (studentRepository.findByEmail(student.getEmail()) != null) {
    // throw new Exception("Student Already Exists");
    // }
    // Student s = studentRepository.save(student);
    // JwtRequest u = new JwtRequest(s.getEmail(), s.getId());
    // return createToken(u);
    // } catch (Exception e) {
    // throw new Exception("Error SigningUp: " + e.getMessage());
    // }
    // }

    public String register(Student student) throws Exception {
        Student check = studentRepository.findByEmail(student.getEmail());
        if (check != null) {
            throw new Exception("Student Already Exists");
        }
        String otp = otpUtil.generateOtp();
        try {
            emailUtil.sendOtpEmail(student.getEmail(), otp);
        } catch (MessagingException e) {
            throw new RuntimeException("Unable to send otp please try again");
        }
        student.setOtp(otp);
        student.setActive(false);
        student.setOtpGeneratedTime(LocalDateTime.now());
        studentRepository.save(student);
        return "Student registration successful";
    }

    public String verifyAccount(String email, String otp) throws Exception {

        Student student = studentRepository.findByEmail(email);
        if (student == null) {
            throw new RuntimeException("Student not found with this email: " + email);
        }
        try {
            if (student.getOtp().equals(otp)
                    && student.getOtpGeneratedTime().plusMinutes(5).isAfter(LocalDateTime.now())) {
                student.setActive(true);
                Student s = studentRepository.save(student);
                JwtRequest jwtRequest = new JwtRequest(s.getEmail(), s.getId());
                String JWTTOKEN = jwt.generateToken(jwtRequest);
                return JWTTOKEN;
            }
        } catch (Exception e) {
            throw new Exception("Error SigningUp: " + e.getMessage());
        }

        return null;
        // return "Please regenerate otp and try again";
    }

    public String regenerateOtp(String email) {
        Student student = studentRepository.findByEmail(email);

        if (student == null) {
            throw new RuntimeException("Student not found with this email: " + email);
        }
        String otp = otpUtil.generateOtp();
        try {
            emailUtil.sendOtpEmail(email, otp);
        } catch (MessagingException e) {
            throw new RuntimeException("Unable to send otp please try again");
        }
        student.setOtp(otp);
        student.setOtpGeneratedTime(LocalDateTime.now());
        studentRepository.save(student);
        return "Email sent... please verify account within 1 minute";
    }

    public ContactModel getContact(ContactModel contact) throws Exception {
        try {
            return contactRepository.save(contact);
        } catch (Exception e) {
            throw new Exception("Error saving contact: " + e.getMessage());
        }
    }
}
