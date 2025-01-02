package com.thepetfoodindex.thepetfoodindex.repository;


import com.thepetfoodindex.thepetfoodindex.model.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserProfileRepository extends JpaRepository<UserProfile, Integer> {

}
