package com.project.mediedumatch.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.mediedumatch.service.*;
import com.project.mediedumatch.model.*;

@CrossOrigin
@RestController
public class CourseController {
    //	@Autowired
//	EmailService emailService;
    @Autowired
    private CourseService courseService;

//    @GetMapping("/home")
//    public String home() {
//        return "this is homepage";
//    }

    @GetMapping("/courses")
    public List<Course> getCourses(){

        return this.courseService.getCourses();

    }
    @GetMapping("/courses/{state}/{courseId}/{rank}")
    public List<Course> getCourse(@PathVariable String state ,@PathVariable String courseId, @PathVariable String rank) {
//	   emailService.sendEmail(email, "Ashutosh", rank);
        return this.courseService.getCourse(state,courseId, Long.parseLong(rank));
    }


//   @PostMapping("/courses")
//   public Course addCourse(@RequestBody Course course ) {
//
//	   return this.courseService.addCourse(course);
//   }
//   @PutMapping("/courses")
//   public Course updateCourse(@RequestBody Course course) {
//	   return this.courseService.updateCourse(course);
//   }
//   @DeleteMapping("/courses/{courseId}")
//   public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId){
//	   try {
//		   this.courseService.deleteCourse(Long.parseLong(courseId));
//		   return new ResponseEntity<>(HttpStatus.OK);
//	   } catch(Exception e) {
//		   return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//	   }
//   }
}

/*
 *
 * for (int i=0; i<colle.leng; i++){
 * if(cl[i].rank<1000){
 * new.push(clg[i]);
 * */
