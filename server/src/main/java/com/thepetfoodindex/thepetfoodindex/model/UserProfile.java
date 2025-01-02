package com.thepetfoodindex.thepetfoodindex.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "user_profile")
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userProfileId;

    @OneToOne
    @JoinColumn(name = "user_profile_id")
    @MapsId
    private User userId;

    @OneToMany(targetEntity = AvoidIngredients.class, cascade = CascadeType.ALL, mappedBy = "UserProfile")
    private List<AvoidIngredients> avoidIngredients;

    public UserProfile() {

    }

    public UserProfile(User userId) {
        this.userId = userId;

    }

    public UserProfile(int userProfileId, List<AvoidIngredients> avoidIngredients, User userId) {
        this.userProfileId = userProfileId;
        this.avoidIngredients = avoidIngredients;
        this.userId = userId;
    }

    public List<AvoidIngredients> getAvoidIngredients() {
        return avoidIngredients;
    }

    public void setAvoidIngredients(List<AvoidIngredients> avoidIngredients) {
        this.avoidIngredients = avoidIngredients;
    }

    public int getUserProfileId() {
        return userProfileId;
    }

    public void setUserProfileId(int userProfileId) {
        this.userProfileId = userProfileId;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "UserProfile{" +
                "userProfileId=" + userProfileId +
                ", userId=" + userId +
                ", avoidIngredients=" + avoidIngredients +
                '}';
    }
}
