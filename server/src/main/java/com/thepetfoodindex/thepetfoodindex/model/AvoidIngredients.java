package com.thepetfoodindex.thepetfoodindex.model;

import jakarta.persistence.*;

@Entity
@Table(name = "avoid_ingredients")
public class AvoidIngredients {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_profile")
    private UserProfile userProfile;

    public AvoidIngredients() {}

    public AvoidIngredients(int id, String name, UserProfile userProfile) {
        this.id = id;
        this.name = name;
        this.userProfile = userProfile;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public UserProfile getUserProfile() {
        return userProfile;
    }

    public void setUserProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
    }

    @Override
    public String toString() {
        return "AvoidIngredients{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", userProfile=" + userProfile +
                '}';
    }
}
