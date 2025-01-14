package com.thepetfoodindex.thepetfoodindex.repository;

import com.thepetfoodindex.thepetfoodindex.model.PetType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PetTypeRepository extends JpaRepository<PetType, Integer> {

    List<PetType> findAll();

//    public PetType findById(int id);
}
