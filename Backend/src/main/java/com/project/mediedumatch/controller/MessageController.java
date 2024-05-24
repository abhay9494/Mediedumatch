//package com.project.mediedumatch.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
////import org.springframework.web.bind.annotation.GetMapping;
////import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
////import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
////import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.project.mediedumatch.model.Message;
//import com.project.mediedumatch.service.MessageService;
//
////import io.jsonwebtoken.lang.Arrays;
////import java.util.*;
////import org.hibernate.mapping.Map;
//
//@RestController
//@RequestMapping("/message")
//@CrossOrigin
//public class MessageController {
//    
//    @Autowired
//    private MessageService messageService;
//    
//    @PostMapping("/send")
//    public ResponseEntity<String> sendMessage(@RequestBody Message message) {
//        try {
//            // Save the message data to the database
//            messageService.saveMessage(message);
//            return ResponseEntity.ok("Message sent successfully");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                .body("Error sending message: " + e.getMessage());
//        }
//    }
//}
