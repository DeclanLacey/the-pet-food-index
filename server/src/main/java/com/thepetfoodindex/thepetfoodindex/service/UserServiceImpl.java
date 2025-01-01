package com.thepetfoodindex.thepetfoodindex.service;

import com.thepetfoodindex.thepetfoodindex.model.User;
import com.thepetfoodindex.thepetfoodindex.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;


    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }
}
