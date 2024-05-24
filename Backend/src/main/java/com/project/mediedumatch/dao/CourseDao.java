package com.project.mediedumatch.dao;

import com.project.mediedumatch.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;



public interface CourseDao extends JpaRepository<Course,String> {

}
