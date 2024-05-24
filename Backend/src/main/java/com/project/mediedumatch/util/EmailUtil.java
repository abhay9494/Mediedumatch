package com.project.mediedumatch.util;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
//import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
//import org.springframework.core.io.ClassPathResource;
//import org.springframework.core.io.Resource;

@Component
public class EmailUtil {

  @Autowired
  private JavaMailSender javaMailSender;
  
  @Value("${spring.mail.username}") 
  private String emailUsername;

  public void sendOtpEmail(String email, String otp) throws MessagingException {
	    MimeMessage mimeMessage = javaMailSender.createMimeMessage();
	    MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
	    mimeMessageHelper.setTo(email);
	    mimeMessageHelper.setFrom(emailUsername);
	    mimeMessageHelper.setSubject("MediEduMatch - Verify OTP");
	    
//	    Resource resource = new ClassPathResource("mediedumatch.png");
//	    mimeMessageHelper.addInline("mediEduMatchLogo", resource);

	    String htmlContent = """
	        <html>
	        <head>
	            <style>
	                body {
	                    font-family: Arial, sans-serif;
	                    margin: 0;
	                    padding: 0;
	                }
	                .container {
	                    max-width: 600px;
	                    margin: auto;
	                    padding: 20px;
	                }
	                .logo {
	                    text-align: center;
	                    margin-bottom: 20px;
	                }
	                .logo img {
	                    width: 150px;
	                }
	                .content {
	                    background-color: #f4f4f4;
	                    padding: 20px;
	                    border-radius: 10px;
	                }
	                .otp {
	                    font-size: 18px;
	                    margin-bottom: 20px;
	                }
	                .verify-link {
	                    display: block;
	                    text-align: center;
	                    font-size: 16px;
	                    text-decoration: none;
	                    background-color: #007bff;
	                    color: #ffffff;
	                    padding: 10px 20px;
	                    border-radius: 5px;
	                    margin-top: 20px;
	                }
	                .footer {
	                    margin-top: 20px;
	                    text-align: center;
	                    font-size: 14px;
	                }
	            </style>
	        </head>
	        <body>
	            <div class="container">
	                <div class="content">
	                    <p>Dear User,</p>
	                    <p>We have received a request to verify your account on MediEduMatch. Please use the following OTP:</p>
	                    <p class="otp"><strong>%s</strong></p>
	                    <p>If you didn't request this, you can safely ignore this email.</p>
	                    <a href="http://localhost:8080/verify-account?email=%s&otp=%s" class="verify-link" target="_blank">Verify Account</a>
	                </div>
	                <div class="footer">
	                    <p>Best Regards,</p>
	                    <p>The MediEduMatch Team</p>
	                </div>
	            </div>
	        </body>
	        </html>
	        """.formatted(otp, email, otp);

	    mimeMessageHelper.setText(htmlContent, true);

	    javaMailSender.send(mimeMessage);
	}
  
  public void sendWelcomeEmail(String email) throws MessagingException {
	    MimeMessage mimeMessage = javaMailSender.createMimeMessage();
	    MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
	    mimeMessageHelper.setTo(email);
	    mimeMessageHelper.setFrom(emailUsername);
	    mimeMessageHelper.setSubject("Welcome to MediEduMatch");
	    
	    String htmlContent = """
	        <html>
	        <head>
	            <style>
	                body {
	                    font-family: Arial, sans-serif;
	                    margin: 0;
	                    padding: 0;
	                }
	                .container {
	                    max-width: 600px;
	                    margin: auto;
	                    padding: 20px;
	                }
	                .content {
	                    background-color: #f4f4f4;
	                    padding: 20px;
	                    border-radius: 10px;
	                }
	                .welcome-message {
	                    font-size: 18px;
	                    margin-bottom: 20px;
	                }
	                .footer {
	                    margin-top: 20px;
	                    text-align: center;
	                    font-size: 14px;
	                }
	            </style>
	        </head>
	        <body>
	            <div class="container">
	                <div class="content">
	                    <p class="welcome-message">Dear User,</p>
	                    <p class="welcome-message">Welcome to MediEduMatch!</p>
	                    <p class="welcome-message">We're glad to have you as a member of our community.</p>
	                    <p class="welcome-message">If you have any questions or need assistance, feel free to contact us.</p>
	                </div>
	                <div class="footer">
	                    <p>Best Regards,</p>
	                    <p>The MediEduMatch Team</p>
	                </div>
	            </div>
	        </body>
	        </html>
	        """;

	    mimeMessageHelper.setText(htmlContent, true);

	    javaMailSender.send(mimeMessage);
	  }
  
  public void sendEmail2(String email, String title, String body, String email1, String phoneNo, String message)
			throws MessagingException {
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
		mimeMessageHelper.setTo(email);
		mimeMessageHelper.setFrom(emailUsername);
		mimeMessageHelper.setSubject(title);

		String htmlContent = String.format("""
				<html>
				<head>
				</head>
				<body>
				    <div class="container">
				        <div class="content">
				            <p>Dear Admin,</p>
				            <p>You have a %s</p>
				            <p>From %s</p>
				            </br>
				            <p>Email: %s</p>
				            <p>Phone Number: %s</p>
				            <p>Message: %s</p>
				        </div>
				    </div>
				</body>
				</html>
				""", title, body, email1, phoneNo, message);

		mimeMessageHelper.setText(htmlContent, true);

		javaMailSender.send(mimeMessage);
	}
  
//  public void sendEmail3(String email, String title, String state, String district, String checkin, String checkout)
//			throws MessagingException {
//		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
//		MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
//		mimeMessageHelper.setTo(email);
//		mimeMessageHelper.setFrom(emailUsername);
//		mimeMessageHelper.setSubject(title);
//
//		String htmlContent = String.format("""
//				<html>
//				<head>
//				</head>
//				<body>
//				    <div class="container">
//				        <div class="content">
//				            <p>Dear Admin,</p>
//				            <p>You have a %s</p>
//				            <p>Destination -</p>
//				            <p>State: %s</p>
//				            <p>District: %s</p>
//				            <p>Checkin: %s</p>
//				            <p>CheckOut: %s</p>
//				        </div>
//				    </div>
//				</body>
//				</html>
//				""", title, title, state, district, checkin, checkout);
//
//		mimeMessageHelper.setText(htmlContent, true);
//
//		javaMailSender.send(mimeMessage);
//	}
  
}
