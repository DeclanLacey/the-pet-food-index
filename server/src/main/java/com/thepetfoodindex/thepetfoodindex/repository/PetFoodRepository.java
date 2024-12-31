package com.thepetfoodindex.thepetfoodindex.repository;

import com.thepetfoodindex.thepetfoodindex.model.PetFood;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PetFoodRepository extends JpaRepository<PetFood, Integer> {

}
