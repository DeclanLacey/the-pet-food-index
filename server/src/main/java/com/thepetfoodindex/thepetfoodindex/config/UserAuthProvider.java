package com.thepetfoodindex.thepetfoodindex.config;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.thepetfoodindex.thepetfoodindex.service.UserService;
import com.thepetfoodindex.thepetfoodindex.dto.UserDto;
import com.thepetfoodindex.thepetfoodindex.util.InvalidTokenException;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.*;


@Component
public class UserAuthProvider {

    @Value("${security.jwt.token.secret-key:secret-value}")
    private String secretKey;
    private final UserService userService;

    public UserAuthProvider( UserService userService) {
        this.userService = userService;
    }

    @PostConstruct
    protected void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public String createToken(String login, long validityInMilliseconds, String tokenType) {
        Date now = new Date();
        Date validity = new Date(now.getTime() + validityInMilliseconds);
        return JWT.create()
                .withIssuer(login)
                .withIssuedAt(now)
                .withExpiresAt(validity)
                .withClaim("token_type", tokenType)
                .sign(Algorithm.HMAC256(secretKey));
    }

    public Map<String, String> createTokens(String login) {
        String accessToken = createToken(login, 300_000, "access");  // 1 hour validity
        String refreshToken = createToken(login, 7 * 24 * 60 * 60 * 1000L, "refresh");  // 1 week validity

        Map<String, String> tokens = new HashMap<>();
        tokens.put("accessToken", accessToken);
        tokens.put("refreshToken", refreshToken);
        return tokens;
    }

    public Authentication validateToken(String token) {
        JWTVerifier verifier = JWT.require(Algorithm.HMAC256(secretKey)).build();
        DecodedJWT decoded = verifier.verify(token);
        String tokenType = decoded.getClaim("token_type").asString();

        // If it's a refresh token, do not return an Authentication object
        if ("refresh".equals(tokenType)) {
            throw new InvalidTokenException("This is a refresh token and cannot be used for authentication.");
        }
        UserDto user = userService.findByEmail(decoded.getIssuer());

        return new UsernamePasswordAuthenticationToken(user, null, Collections.emptyList());
    }

    public DecodedJWT validateRefreshToken(String token) {
        JWTVerifier verifier = JWT.require(Algorithm.HMAC256(secretKey)).build();

        DecodedJWT decoded = verifier.verify(token);

        String tokenType = decoded.getClaim("token_type").asString();

        if (decoded.getExpiresAt().before(new Date())) {
            throw new InvalidTokenException("Refresh token has expired.");
        }

        if (!"refresh".equals(tokenType)) {
            throw new InvalidTokenException("This is not a valid refresh token.");
        }

        return decoded; // Return the decoded refresh token
    }

//    public void blacklistToken(String token) {
//        // Store the token in Redis or another store with an expiration matching its expiry time
//        redisTemplate.opsForValue().set(token, "blacklisted", tokenExpiryTime, TimeUnit.MILLISECONDS);
//    }
//
//    public boolean isTokenBlacklisted(String token) {
//        return redisTemplate.hasKey(token);
//    }
}
