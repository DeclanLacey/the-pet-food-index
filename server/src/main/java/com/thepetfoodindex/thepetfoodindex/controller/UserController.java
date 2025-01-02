package com.thepetfoodindex.thepetfoodindex.controller;

import com.thepetfoodindex.thepetfoodindex.model.User;
import com.thepetfoodindex.thepetfoodindex.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody @Valid User user) {
        System.out.println(user.toString());
        Optional<User> optionalUser = userService.findByEmail(user.getEmail());

        if (optionalUser.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User with this email already exists.");
        }

        userService.saveUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully.");
    }


}
