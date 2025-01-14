package com.thepetfoodindex.thepetfoodindex.service;

import com.thepetfoodindex.thepetfoodindex.model.PetType;
import com.thepetfoodindex.thepetfoodindex.repository.PetTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetTypeService {

    private final PetTypeRepository petTypeRepository;

    public PetTypeService(PetTypeRepository petTypeRepository) {
        this.petTypeRepository = petTypeRepository;
    }

    public List<PetType> getAllPetTypes() {
        return petTypeRepository.findAll();
    }
}
