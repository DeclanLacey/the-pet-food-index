package com.thepetfoodindex.thepetfoodindex.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

        return httpSecurity
                .formLogin(httpForm -> {
                    httpForm.loginPage("/login");
                })
                .authorizeHttpRequests(registry -> {
                    registry.requestMatchers("/favorites").authenticated();
                    registry.requestMatchers("/users/add").permitAll();
                    registry.anyRequest().permitAll();
                })
                .csrf(AbstractHttpConfigurer::disable)

                .build();
    }
}
