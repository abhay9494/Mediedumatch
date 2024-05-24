//package com.project.mediedumatch.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.project.mediedumatch.util.EmailUtil;
//import com.project.mediedumatch.util.JwtUtil;
//import com.project.mediedumatch.util.JwtUtils;
//import com.project.mediedumatch.util.OtpUtil;
//import com.project.mediedumatch.dto.LoginDto;
//import com.project.mediedumatch.dto.RegisterDto;
//import com.project.mediedumatch.model.JwtRequest;
//import com.project.mediedumatch.model.LoginRequest;
//import com.project.mediedumatch.model.Student;
//import com.project.mediedumatch.repository.ContactRepository;
//import com.project.mediedumatch.repository.StudentRepository;
//
//import jakarta.mail.MessagingException;
//
//import java.time.Duration;
//import java.time.LocalDateTime;
//import java.util.List;
//
//@Service
//public class StudentServiceImpl implements StudentService {
//
//    @Autowired
//    private StudentRepository studentRepository;
//    
//    @Autowired
//    private OtpUtil otpUtil;
//    
//    @Autowired
//    private EmailUtil emailUtil;
//    
//    @Autowired
//    JwtUtil jwt;
//    
//    @Autowired
//    ContactRepository contactRepository;
//    
//    private static final int OTP_EXPIRY_MINUTES = 10;  
//
////    @Override
////    public Student saveStudent(Student student) {
////        return studentRepository.save(student);
////    }
//
////    @Override
////    public List<Student> getAllStudents() {
////        return studentRepository.findAll();
////    }
//    
////    public String register(RegisterDto registerDto) {
////        String otp = otpUtil.generateOtp();
////        try {
////          emailUtil.sendOtpEmail(registerDto.getEmail(), otp);
////        } 
////        catch (MessagingException e) {
////          throw new RuntimeException("Unable to send otp please try again");
////        }
////        Student student = new Student();
////        student.setName(registerDto.getName());
////        student.setEmail(registerDto.getEmail());
////        student.setPassword(registerDto.getPassword());
////        student.setOtp(otp);
////        student.setOtpGeneratedTime(LocalDateTime.now());
////        studentRepository.save(student);
////        return "Student registration successful";
////      }
//    
////    public String verifyAccount(String email, String otp) {
////        Student student = studentRepository.findByEmail(email)
////            .orElseThrow(() -> new RuntimeException("Student not found with this email: " + email));
////        if (student.getOtp().equals(otp) && Duration.between(student.getOtpGeneratedTime(),
////            LocalDateTime.now()).getSeconds() < (1 * 600)) {
////          student.setActive(true);
////          studentRepository.save(student);
////          return "OTP verified you can login";
////        }
////        return "Please regenerate otp and try again";
////      }
//    
////    public String regenerateOtp(String email) {
////        Student student = studentRepository.findByEmail(email)
////            .orElseThrow(() -> new RuntimeException("Student not found with this email: " + email));
////        String otp = otpUtil.generateOtp();
////        try {
////          emailUtil.sendOtpEmail(email, otp);
////        } 
////        catch (MessagingException e) {
////          throw new RuntimeException("Unable to send otp please try again");
////        }
////        student.setOtp(otp);
////        student.setOtpGeneratedTime(LocalDateTime.now());
////        studentRepository.save(student);
////        return "Email sent... please verify account within 10 minute";
////      }
//    
////    public String login(LoginDto loginDto) {
////        Student student = studentRepository.findByEmail(loginDto.getEmail())
////            .orElseThrow(
////                () -> new RuntimeException("Student not found with this email: " + loginDto.getEmail()));
////        if (!loginDto.getPassword().equals(student.getPassword())) {
////          return "Password is incorrect";
////        } 
////        else if (!student.isActive()) {
////          return "your account is not verified";
////        } 
////        else {
////          sendWelcomeEmail(student.getEmail());
////          return "Login successful";
////        }
////      }
//    
//    public boolean authenticate(String token, JwtRequest user) {
//        return this.jwt.validateToken(token, user);
//    }
//
//    public String createToken(JwtRequest user) {
//        return this.jwt.generateToken(user);
//    }
//    
//    public String login(LoginRequest log) throws Exception {
//        try {
//            UserModel user = userRepository.findByEmail(log.getEmail());
//            if (user == null) {
//                throw new Exception("User not found");
//            }
//            // Check if the provided password matches the stored password
//            if (!user.getPassword().equals(log.getPassword())) {
//                throw new Exception("Wrong password");
//            }
//            // If the email and password match, create and return a JWT token
//            JwtRequest jwtRequest = new JwtRequest(log.getEmail(), user.getId());
//            sendWelcomeEmail(user.getEmail());
//            return createToken(jwtRequest);
//        } catch (Exception e) {
//            // e.printStackTrace();
//            throw new Exception("Login failed: " + e.getMessage());
//        }
//    }
//    
//    public void sendWelcomeEmail(String email) {
//    	try {
//    	      emailUtil.sendWelcomeEmail(email);
//    	    } catch (MessagingException e) {
//    	      throw new RuntimeException("Unable to send welcome email");
//    	    }
//    }
//    
//    public String register(UserModel user) throws Exception {
//        UserModel check= userRepository.findByEmail(user.getEmail());
//        if(check!=null){
//            throw new Exception("User Already Exists");
//        }
//        String otp = otpUtil.generateOtp();
//        try {
//            emailUtil.sendOtpEmail(user.getEmail(), otp);
//        } catch (MessagingException e) {
//            throw new RuntimeException("Unable to send otp please try again");
//        }
//        user.setOtp(otp);
//        user.setActive(false);
//        user.setOtpGeneratedTime(LocalDateTime.now());
//        userRepository.save(user);
//        return "User registration successful";
//    }
//    
//    public String verifyAccount(String email, String otp) throws Exception {
//
//        UserModel user = userRepository.findByEmail(email);
//        if (user == null) {
//            throw new RuntimeException("User not found with this email: " + email);
//        }
//        try {
//            if (user.getOtp().equals(otp) && user.getOtpGeneratedTime().plusMinutes(5).isAfter(LocalDateTime.now())) {
//                user.setActive(true);
//                UserModel s = userRepository.save(user);
//                JwtRequest jwtRequest= new JwtRequest(s.getEmail(), s.getId());
//                String JWTTOKEN=jwt.generateToken(jwtRequest);
//                return JWTTOKEN;
//            }
//        } catch (Exception e) {
//            throw new Exception("Error SigningUp: " + e.getMessage());
//        }
//        
//        return null;
//        // return "Please regenerate otp and try again";
//    }
//    
//    public String regenerateOtp(String email) {
//        UserModel user = userRepository.findByEmail(email);
//
//        if (user == null) {
//            throw new RuntimeException("User not found with this email: " + email);
//        }
//        String otp = otpUtil.generateOtp();
//        try {
//            emailUtil.sendOtpEmail(email, otp);
//        } catch (MessagingException e) {
//            throw new RuntimeException("Unable to send otp please try again");
//        }
//        user.setOtp(otp);
//        user.setOtpGeneratedTime(LocalDateTime.now());
//        userRepository.save(user);
//        return "Email sent... please verify account within 1 minute";
//    }
//    
//    public ContactModel getContact(ContactModel contact) throws Exception {
//        try {
//            return contactRepository.save(contact);
//        } catch (Exception e) {
//            throw new Exception("Error saving contact: " + e.getMessage());
//        }
//    }
//
//	@Override
//	public Student saveStudent(Student student) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public List<Student> getAllStudents() {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public String register(RegisterDto registerDto) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public String login(LoginDto loginDto) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//}