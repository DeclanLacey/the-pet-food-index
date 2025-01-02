package com.thepetfoodindex.thepetfoodindex.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @JsonProperty("firstName")
    @Column(name = "first_name")
    @NotEmpty
    private String firstName;

    @JsonProperty("lastName")
    @Column(name = "last_name")
    @NotEmpty
    private String lastName;

    @JsonProperty("email")
    @Column(name = "email", unique = true)
    @NotEmpty
    private String email;

    @JsonProperty("password")
    @Column(name = "password")
    @NotEmpty
    private String password;

    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date registrationDate;

    @ManyToMany
    @JoinTable(
            name = "user_favorites", // The name of the join table
            joinColumns = @JoinColumn(name = "user_id"), // Foreign key for User
            inverseJoinColumns = @JoinColumn(name = "pet_food_id") // Foreign key for Item
    )
    private Set<PetFood> favoritePetFoods = new HashSet<>();

    public User() {

    }

    public User(String firstName, String lastName, String email, String password, Date registrationDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.registrationDate = registrationDate;
    }

    @Override
    public String toString() {
        return "User{id=" + id + ", first_name='" + firstName + "', last_name='" + lastName + "', user_name='" + email + "', password='" + password + "'}";
    }

    public Date getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(Date registrationDate) {
        this.registrationDate = registrationDate;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}

