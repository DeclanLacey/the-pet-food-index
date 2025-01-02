package com.thepetfoodindex.thepetfoodindex.service;

import com.thepetfoodindex.thepetfoodindex.model.User;
import com.thepetfoodindex.thepetfoodindex.model.UserProfile;
import com.thepetfoodindex.thepetfoodindex.repository.UserProfileRepository;
import com.thepetfoodindex.thepetfoodindex.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserProfileRepository userProfileRepository;

    @Autowired
    public UserService(UserRepository userRepository, UserProfileRepository userProfileRepository) {
        this.userRepository = userRepository;
        this.userProfileRepository = userProfileRepository;
    }

    public void saveUser(User user) {
        user.setRegistrationDate(new Date(System.currentTimeMillis()));
        userRepository.save(user);
        userProfileRepository.save(new UserProfile(user));
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }


}
