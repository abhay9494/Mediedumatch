package com.project.mediedumatch.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.mediedumatch.dto.ContactUsDto;
import com.project.mediedumatch.dto.LoginDto;
import com.project.mediedumatch.dto.RegisterDto;
import com.project.mediedumatch.model.ErrorResponse;
import com.project.mediedumatch.model.LoginRequest;
import com.project.mediedumatch.model.LoginResponse;
import com.project.mediedumatch.model.Student;
import com.project.mediedumatch.service.ContactUsService;
//import com.project.mediedumatch.service.MessageService;
import com.project.mediedumatch.service.StudentService;
import java.util.List;

@RestController
@RequestMapping
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;
    
//    @Autowired
//    private MessageService messageService;
    
    @Autowired
    private LoginResponse loginResponseObject;
    
    @Autowired
    private ContactUsService contactUsService;

//    @PostMapping("/add")
//    public ResponseEntity<String> addStudent(@RequestBody Student student) {
//        try {
//            studentService.saveStudent(student);
//            return ResponseEntity.ok("New student is added");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding student: " + e.getMessage());
//        }
//    }

//    @GetMapping("/getAll")
//    public ResponseEntity<List<Student>> getAllStudents() {
//        try {
//            List<Student> students = studentService.getAllStudents();
//            return ResponseEntity.ok(students);
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
//        }
//    }
    
//    @PostMapping("/message")
//    public ResponseEntity<String> sendMessage(@RequestBody Student student) {
//        try {
//            // Save the student data to the database
//            studentService.saveStudent(student);
//            return ResponseEntity.ok("Message sent successfully");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                .body("Error sending message: " + e.getMessage());
//        }
//    }  
    
//  @PostMapping("/register")
//  public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) {
//    return new ResponseEntity<>(studentService.register(registerDto), HttpStatus.OK);
//  }

//  @PutMapping("/verify-account")
//  public ResponseEntity<String> verifyAccount(@RequestParam String email,
//      @RequestParam String otp) {
//    return new ResponseEntity<>(studentService.verifyAccount(email, otp), HttpStatus.OK);
//  }
    
 @PutMapping("/regenerate-otp")
 public ResponseEntity<String> regenerateOtp(@RequestParam String email) {
   return new ResponseEntity<>(studentService.regenerateOtp(email), HttpStatus.OK);
 }
  
//  @PutMapping("/login")
//  public ResponseEntity<String> login(@RequestBody LoginDto loginDto) {
//    return new ResponseEntity<>(studentService.login(loginDto), HttpStatus.OK);
//  }
  
  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody LoginRequest student) {
      try {
          loginResponseObject = new LoginResponse(studentService.login(student), 200);
          return ResponseEntity.ok().body(loginResponseObject);
      } catch (Exception e) {
        ErrorResponse errorResponse;
        if (e.getMessage().contains("Account is not activated")) {
            errorResponse = new ErrorResponse(HttpStatus.FORBIDDEN.value(), "Account is not activated. Please verify your account.");
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(errorResponse);
        } else if (e.getMessage().contains("Wrong password")) {
            errorResponse = new ErrorResponse(HttpStatus.UNAUTHORIZED.value(), "Wrong password. Please try again.");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
        } else if (e.getMessage().contains("Student not found")) {
            errorResponse = new ErrorResponse(HttpStatus.NOT_FOUND.value(), "Student not found. Please check your credentials and try again.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        } else {
            errorResponse = new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Login failed. Please check your credentials and try again.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
      }
  }
  
  @PostMapping("/register")
  public ResponseEntity<?> register(@RequestBody Student student) {
      try {

          System.out.println(student);
          String response = studentService.register(student);
          ErrorResponse successResponse = new ErrorResponse(200, response);
          return ResponseEntity.ok().body(successResponse);
      } catch (Exception ex) {
          System.out.println(ex);
          // System.out.print= ex.getMessage();
          String response = ex.getMessage();
          ErrorResponse errorResponse = new ErrorResponse(500, "Registration failed. Please try again later.");
          return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
      }
  }
  
  @PutMapping("/verify-account")
  public ResponseEntity<?> verifyAccount(@RequestParam String email,
          @RequestParam String otp) {
      try {
          String token = studentService.verifyAccount(email, otp);
          if (token == null) {
              throw new Exception("Incorrect OTP. Please try again.");
          }
          LoginResponse responseModel = new LoginResponse(token, 200);
          return ResponseEntity.ok().body(responseModel);
      } catch (Exception ex) {
          String response = ex.getMessage();
          ErrorResponse errorResponse = new ErrorResponse(500, response);
          return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
      }
  }
  
  @PostMapping("/contactUs")
  public ResponseEntity<String> contactUs(@RequestBody ContactUsDto contactUsDto) {
      System.out.println(contactUsDto);
      return new ResponseEntity<>(contactUsService.sendForm(contactUsDto), HttpStatus.OK);
  }
}