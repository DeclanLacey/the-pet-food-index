package com.thepetfoodindex.thepetfoodindex.controller;

import com.thepetfoodindex.thepetfoodindex.model.User;
import com.thepetfoodindex.thepetfoodindex.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public void register(@RequestBody @Valid User user) {
        System.out.println(user.toString());
        userService.saveUser(user);
    }


}
