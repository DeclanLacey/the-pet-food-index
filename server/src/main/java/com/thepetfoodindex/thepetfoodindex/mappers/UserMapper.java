package com.thepetfoodindex.thepetfoodindex.mappers;

import com.thepetfoodindex.thepetfoodindex.dto.SignUpDto;
import com.thepetfoodindex.thepetfoodindex.dto.UserDto;
import com.thepetfoodindex.thepetfoodindex.model.User;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class UserMapper {

    // Method to map User to UserDto using the constructor
    public UserDto toUserDto(User user) {
        if (user == null) {
            return null;
        }

        // Construct the UserDto using the constructor that accepts arguments
        return new UserDto(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                null, // Set token value as needed
                new Date() // Set registrationDate as the current date or adjust as needed
        );
    }

    // Method to map SignUpDto to User while ignoring the password field
    public User signUpToUser(SignUpDto userDto) {
        if (userDto == null) {
            return null;
        }

        User user = new User();
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());
        // Password is ignored as per requirement
        // user.setPassword(userDto.getPassword()); // Ignored

        return user;
    }
}
