package com.thepetfoodindex.thepetfoodindex.service;

import com.thepetfoodindex.thepetfoodindex.model.User;
import com.thepetfoodindex.thepetfoodindex.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void saveUser(User user) {
        user.setRegistrationDate(new Date(System.currentTimeMillis()));
        userRepository.save(user);
    }
}
