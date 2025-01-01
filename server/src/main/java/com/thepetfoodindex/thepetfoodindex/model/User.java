package com.thepetfoodindex.thepetfoodindex.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "first_name")
    private String first_name;

    @Column(name = "last_name")
    private String last_name;

    @Column(name = "user_name")
    private String user_name;

    @Column(name = "password")
    private String password;

    @ManyToMany
    @JoinTable(
            name = "user_favorites", // The name of the join table
            joinColumns = @JoinColumn(name = "user_id"), // Foreign key for User
            inverseJoinColumns = @JoinColumn(name = "pet_food_id") // Foreign key for Item
    )
    private Set<PetFood> favorite_pet_foods = new HashSet<>();

    @Override
    public String toString() {
        return "User{id=" + id + ", first_name='" + first_name + "', last_name='" + last_name + "', user_name='" + user_name + "', password='" + password + "'}";
    }
}
