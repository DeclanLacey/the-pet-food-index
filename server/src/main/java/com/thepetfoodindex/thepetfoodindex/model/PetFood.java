package com.thepetfoodindex.thepetfoodindex.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
import org.springframework.stereotype.Component;

@Entity
@Data
@Component
@Table(name = "pet_foods")
public class PetFood {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotEmpty
    private String name;

    @NotEmpty
    private int k_cal_per_cup;

    private int k_cal_per_kg;

    private int k_cal_per_lb;

    @NotEmpty
    private int crude_protein;

    @NotEmpty
    private int crude_fat;

    @NotEmpty
    private int crude_fiber;

    @NotEmpty
    private int moisture;

    private int ash;

    private int calcium;

    private int sodium;

    private int phosphorus;

    private int potassium;

    @NotEmpty
    private String ingredients;

    @NotEmpty
    private boolean includes_grain;

    @ManyToOne()
    @JoinColumn(name = "pet_type_id", referencedColumnName = "id")
    private PetType petType;

    @ManyToOne()
    @JoinColumn(name = "brand_id", referencedColumnName = "id")
    private PetFoodBrand brand;

}
