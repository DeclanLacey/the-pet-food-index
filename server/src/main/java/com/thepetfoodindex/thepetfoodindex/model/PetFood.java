package com.thepetfoodindex.thepetfoodindex.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.List;

@Entity
@Data
@Component
public class PetFood {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private int k_cal_per_cup;

    private int k_cal_per_kg;

    private int k_cal_per_lb;

    private int crude_protein;

    private int crude_fat;

    private int crude_fiber;

    private int moisture;

    private int ash;

    private int calcium;

    private int sodium;

    private int phosphorus;

    private int potassium;

    private String ingredients;

    private boolean includes_grain;

    @ManyToOne()
    @JoinColumn(name = "pet_type_id", referencedColumnName = "id")
    private PetType petType;

    @ManyToOne()
    @JoinColumn(name = "brand_id", referencedColumnName = "id")
    private PetFoodBrand brand;

}
