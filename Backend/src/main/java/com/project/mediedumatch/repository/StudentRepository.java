package com.project.mediedumatch.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.mediedumatch.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {

//	Object findByEmail(String email);
//	Optional<Student> findByEmail(String email);
	
    Student findByEmail(String string);

}