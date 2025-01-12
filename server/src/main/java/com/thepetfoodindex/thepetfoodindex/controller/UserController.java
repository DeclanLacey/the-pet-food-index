package com.thepetfoodindex.thepetfoodindex.controller;

import com.auth0.jwt.exceptions.JWTVerificationException;
import com.thepetfoodindex.thepetfoodindex.config.UserAuthProvider;
import com.thepetfoodindex.thepetfoodindex.dto.CredentialsDto;
import com.thepetfoodindex.thepetfoodindex.dto.SignUpDto;
import com.thepetfoodindex.thepetfoodindex.dto.UserDto;
import com.thepetfoodindex.thepetfoodindex.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    private final UserService userService;
    private final UserAuthProvider userAuthProvider;

    @Autowired
    public UserController(UserService userService, UserAuthProvider userAuthProvider ) {
        this.userService = userService;
        this.userAuthProvider = userAuthProvider;
    }

//    @PostMapping("/login")
//    public ResponseEntity<UserDto> login(@Valid @RequestBody CredentialsDto credentialsDto) {
//        UserDto user = userService.login(credentialsDto);
//        user.setAccessToken(userAuthProvider.createTokens(user.getEmail()));
//        user.setRefreshToken(userAuthProvider.createTokens(user.getEmail()));
//        return new ResponseEntity<>(user, HttpStatus.OK);
//    }

//    @PostMapping("/register")
//    public ResponseEntity<UserDto> register(@Valid @RequestBody SignUpDto signUpDto) {
//        UserDto user = userService.register(signUpDto);
//        user.setToken(userAuthProvider.createTokens(user.getEmail()));
//        user.setAccessToken(userAuthProvider.createTokens(user.getEmail()));
//        user.setRefreshToken(userAuthProvider.createTokens(user.getEmail()));
//        return ResponseEntity.created(URI.create("/users/" + user.getId())).body(user);
//    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@Valid @RequestBody CredentialsDto credentialsDto) {
        UserDto user = userService.login(credentialsDto);

        // Generate access and refresh tokens
        Map<String, String> tokens = userAuthProvider.createTokens(user.getEmail());

        // Prepare response
        Map<String, Object> response = new HashMap<>();
        response.put("user", user);
        response.put("accessToken", tokens.get("accessToken"));
        response.put("refreshToken", tokens.get("refreshToken"));

        return new ResponseEntity<>(response, HttpStatus.OK);
    }


    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> register(@Valid @RequestBody SignUpDto signUpDto) {
        UserDto user = userService.register(signUpDto);

        // Generate access and refresh tokens
        Map<String, String> tokens = userAuthProvider.createTokens(user.getEmail());

        // Prepare response
        Map<String, Object> response = new HashMap<>();
        response.put("user", user);
        response.put("accessToken", tokens.get("accessToken"));
        response.put("refreshToken", tokens.get("refreshToken"));

        return ResponseEntity.created(URI.create("/users/" + user.getId())).body(response);
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<Map<String, String>> refreshToken(@RequestParam String refreshToken) {
        try {
            Authentication authentication = userAuthProvider.validateToken(refreshToken);
            String login = authentication.getName();

            // Validate refresh token, then generate a new access token
            Map<String, String> newTokens = userAuthProvider.createTokens(login);

            return ResponseEntity.ok(newTokens);
        } catch (JWTVerificationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping("/profile")
    public ResponseEntity<UserDto> getProfile(Authentication authentication) {
        UserDto user = (UserDto) authentication.getPrincipal();
        return ResponseEntity.ok(user);
    }
}
