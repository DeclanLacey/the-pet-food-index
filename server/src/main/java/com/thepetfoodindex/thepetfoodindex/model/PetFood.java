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

    private int kCalPerCup;

    private int kCalPerKg;

    private int kCalPerLb;

    private int crudeProtein;

    private int crudeFat;

    private int crudeFiber;

    private int moisture;

    private int ash;

    private int calcium;

    private int sodium;

    private int phosphorus;

    private int potassium;

    private String ingredients;

    private boolean includesGrain;

    @ManyToOne()
    @JoinColumn(name = "pet_type_id", referencedColumnName = "id")
    private PetType petType;

    @ManyToOne()
    @JoinColumn(name = "brand_id", referencedColumnName = "id")
    private PetFoodBrand brand;



}
