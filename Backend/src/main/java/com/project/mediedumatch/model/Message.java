//package com.project.mediedumatch.model;
//
//import jakarta.persistence.*;
//
//@Entity
//public class Message {
//	@Id
//	private String email;
//    
//    private String firstName;
//    
//    private String lastName;
//    
//    private Long phone;
//    
//    private String message;
//    
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "student_email", referencedColumnName = "email")
//    private Student student;
//
//	public Message() {
//		super();
//		// TODO Auto-generated constructor stub
//	}
//
//	public Student getStudent() {
//		return student;
//	}
//
//	public void setStudent(Student student) {
//		this.student = student;
//	}
//
//	public Message(String email, String firstName, String lastName, Long phone, String message, Student student) {
//		super();
//		this.email = email;
//		this.firstName = firstName;
//		this.lastName = lastName;
//		this.phone = phone;
//		this.message = message;
//		this.student = student;
//	}
//
//	public String getFirstName() {
//		return firstName;
//	}
//
//	public void setFirstName(String firstName) {
//		this.firstName = firstName;
//	}
//
//	public String getLastName() {
//		return lastName;
//	}
//
//	public void setLastName(String lastName) {
//		this.lastName = lastName;
//	}
//
//	public String getEmail() {
//		return email;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//	public Long getPhone() {
//		return phone;
//	}
//
//	public void setPhone(Long phone) {
//		this.phone = phone;
//	}
//
//	public String getMessage() {
//		return message;
//	}
//
//	public void setMessage(String message) {
//		this.message = message;
//	}
//}
