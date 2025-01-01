package com.thepetfoodindex.thepetfoodindex.controller;

import com.thepetfoodindex.thepetfoodindex.model.User;
import com.thepetfoodindex.thepetfoodindex.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public void addUser(@RequestBody User user) {
        System.out.println(user.toString());
        userService.saveUser(user);
    }
}
