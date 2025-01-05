package com.thepetfoodindex.thepetfoodindex.controller;

import com.thepetfoodindex.thepetfoodindex.config.UserAuthProvider;
import com.thepetfoodindex.thepetfoodindex.dto.CredentialsDto;
import com.thepetfoodindex.thepetfoodindex.dto.SignUpDto;
import com.thepetfoodindex.thepetfoodindex.dto.UserDto;
import com.thepetfoodindex.thepetfoodindex.model.User;
import com.thepetfoodindex.thepetfoodindex.repository.UserProfileRepository;
import com.thepetfoodindex.thepetfoodindex.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    private final UserService userService;
    private final UserAuthProvider userAuthProvider;
    private final UserProfileRepository userProfileRepository;

    @Autowired
    public UserController(UserService userService, UserAuthProvider userAuthProvider, UserProfileRepository userProfileRepository) {
        this.userService = userService;
        this.userAuthProvider = userAuthProvider;
        this.userProfileRepository = userProfileRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@Valid @RequestBody CredentialsDto credentialsDto) {
        UserDto user = userService.login(credentialsDto);
        user.setToken(userAuthProvider.createToken(user.getEmail()));
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@Valid @RequestBody SignUpDto signUpDto) {
        UserDto user = userService.register(signUpDto);
        user.setToken(userAuthProvider.createToken(user.getEmail()));
        return ResponseEntity.created(URI.create("/users/" + user.getId())).body(user);
    }

//    @PostMapping("/register")
//    public ResponseEntity<String> register(@RequestBody @Valid User user) {
//        System.out.println(user.toString());
//        Optional<User> optionalUser = userService.findByEmail(user.getEmail());
//
//        if (optionalUser.isPresent()) {
//            return ResponseEntity.status(HttpStatus.CONFLICT).body("User with this email already exists.");
//        }
//
//        userService.saveUser(user);
//        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully.");
//    }


}
