package com.project.mediedumatch.model;

import javax.validation.constraints.*;
import lombok.*;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.time.temporal.Temporal;
import java.util.List;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Entity
public class Student {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    @Column(unique = true, nullable = false, updatable = false)
    private String email;
    
//  @GeneratedValue(generator = "uuid")
//  @GenericGenerator(name = "uuid", strategy = "uuid2")
//  private String id;
    
    @NotBlank(message = "Name is required")
    private String name;
    
    @NotBlank(message = "Password is required")
    @Size(min = 8, message = "Password must be at least 8 characters long")
    private String password;
    
    private boolean active;
    
    private String otp;
    
    private LocalDateTime otpGeneratedTime;
    
//    @OneToMany(mappedBy = "student")
//    private List<Message> messages;

//    public List<Message> getMessages() {
//		return messages;
//	}
//
//	public void setMessages(List<Message> messages) {
//		this.messages = messages;
//	}
//
//	public Student(String name, String email, String password) {
//		super();
//		this.name = name;
//		this.email = email;
//		this.password = password;
//	}
//    
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//	public String getEmail() {
//		return email;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//	public void setOtp(String otp) {
//		// TODO Auto-generated method stub
//		
//	}
//
//	public void setOtpGeneratedTime(LocalDateTime now) {
//		// TODO Auto-generated method stub
//		
//	}
//
//	public Object getOtp() {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	public void setActive(boolean b) {
//		// TODO Auto-generated method stub
//		
//	}
//
//	public boolean isActive() {
//		// TODO Auto-generated method stub
//		return false;
//	}
//
//	public Temporal getOtpGeneratedTime() {
//		// TODO Auto-generated method stub
//		return null;
//	}
}