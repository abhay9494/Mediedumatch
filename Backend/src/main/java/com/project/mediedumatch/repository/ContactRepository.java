package com.project.mediedumatch.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.mediedumatch.model.ContactModel;


@Repository
public interface ContactRepository extends JpaRepository<ContactModel,Long> {

}
