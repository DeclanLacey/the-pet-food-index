package com.thepetfoodindex.thepetfoodindex.repository;

import com.thepetfoodindex.thepetfoodindex.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}
