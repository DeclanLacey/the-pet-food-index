package com.thepetfoodindex.thepetfoodindex.service;

import com.thepetfoodindex.thepetfoodindex.model.User;
import org.springframework.stereotype.Component;

public interface UserService {
    public User saveUser(User user);
}
