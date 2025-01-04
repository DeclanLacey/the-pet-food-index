package com.thepetfoodindex.thepetfoodindex.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "user_profile")
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userAccountId;

    @OneToOne
    @JoinColumn(name = "user_account_id")
    @MapsId
    private User userId;

    @OneToMany(targetEntity = AvoidIngredients.class, cascade = CascadeType.ALL, mappedBy = "userProfile")
    private List<AvoidIngredients> avoidIngredients;

    public UserProfile() {

    }

    public UserProfile(User userId) {
        this.userId = userId;

    }

    public UserProfile(int userAccountId, User userId, List<AvoidIngredients> avoidIngredients) {
        this.userAccountId = userAccountId;
        this.userId = userId;
        this.avoidIngredients = avoidIngredients;
    }

    public int getUserAccountId() {
        return userAccountId;
    }

    public void setUserAccountId(int userAccountId) {
        this.userAccountId = userAccountId;
    }

    public List<AvoidIngredients> getAvoidIngredients() {
        return avoidIngredients;
    }

    public void setAvoidIngredients(List<AvoidIngredients> avoidIngredients) {
        this.avoidIngredients = avoidIngredients;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }
}
