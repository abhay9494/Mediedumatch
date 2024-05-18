package com.medlink.dao;

import com.medlink.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;



public interface CourseDao extends JpaRepository<Course,String> {

}
