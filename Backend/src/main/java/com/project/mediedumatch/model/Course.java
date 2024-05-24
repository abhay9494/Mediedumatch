package com.project.mediedumatch.model;

//import org.springframework.data.annotation.Id;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Course {
    @Id
    private String college_name;
    private String state;
    private int general_rank ;
    private int general_score;
    private int obc_rank;
    private int obc_score;
    private int sc_rank;
    private int sc_score;
    private int st_rank;
    private int st_score;



    public Course(String college_name, String state, int general_rank, int general_score, int obc_rank, int obc_score,
                  int sc_rank, int sc_score, int st_rank, int st_score) {
        super();
        this.college_name = college_name;
        this.state = state;
        this.general_rank = general_rank;
        this.general_score = general_score;
        this.obc_rank = obc_rank;
        this.obc_score = obc_score;
        this.sc_rank = sc_rank;
        this.sc_score = sc_score;
        this.st_rank = st_rank;
        this.st_score = st_score;
    }

    public Course() {
        super();
        // TODO Auto-generated constructor stub
    }

    public String getCollege_name() {
        return college_name;
    }

    public void setCollege_name(String college_name) {
        this.college_name = college_name;
    }

    public Integer getGeneral_rank() {
        return general_rank;
    }

    public void setGeneral_rank(int general_rank) {
        this.general_rank = general_rank;
    }

    public int getGeneral_score() {
        return general_score;
    }

    public void setGeneral_score(int general_score) {
        this.general_score = general_score;
    }

    public Integer  getSc_rank() {
        return sc_rank;
    }

    public void setSc_rank(int sc_rank) {
        this.sc_rank = sc_rank;
    }

    public int getSc_score() {
        return sc_score;
    }

    public void setSc_score(int sc_score) {
        this.sc_score = sc_score;
    }

    public Integer  getSt_rank() {
        return st_rank;
    }

    public void setSt_rank(int st_rank) {
        this.st_rank = st_rank;
    }

    public int getSt_score() {
        return st_score;
    }

    public void setSt_score(int st_score) {
        this.st_score = st_score;
    }

    public Integer getObc_rank() {
        return obc_rank;
    }

    public void setObc_rank(int obc_rank) {
        this.obc_rank = obc_rank;
    }

    public int getObc_score() {
        return obc_score;
    }

    public void setObc_score(int obc_score) {
        this.obc_score = obc_score;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }








}
