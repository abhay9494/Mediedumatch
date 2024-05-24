package com.project.mediedumatch.repository;



import com.project.mediedumatch.model.ContactUsForm;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactUsFormRepository extends JpaRepository<ContactUsForm,Integer> {

    Optional<ContactUsForm> findByEmail(String email);
}
