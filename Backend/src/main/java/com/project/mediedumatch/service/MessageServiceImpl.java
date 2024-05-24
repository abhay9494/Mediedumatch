//package com.project.mediedumatch.service;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.project.mediedumatch.model.Message;
//import com.project.mediedumatch.repository.MessageRepository;
//
//@Service
//public class MessageServiceImpl implements MessageService {
//    
//    @Autowired
//    private MessageRepository messageRepository;
//    
//    @Override
//    public Message saveMessage(Message message) {
//        return messageRepository.save(message);
//    }
//    
//    @Override
//    public List<Message> getAllMessages() {
//        return messageRepository.findAll();
//    }
//}
