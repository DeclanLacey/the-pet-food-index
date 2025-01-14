package com.thepetfoodindex.thepetfoodindex.repository;


import com.thepetfoodindex.thepetfoodindex.model.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, Integer> {

}
