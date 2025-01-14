package com.thepetfoodindex.thepetfoodindex.controller;

import com.thepetfoodindex.thepetfoodindex.model.PetType;
import com.thepetfoodindex.thepetfoodindex.service.PetTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/pets")
@CrossOrigin
public class PetTypeController {

    private final PetTypeService petTypeService;

    @Autowired
    public PetTypeController(PetTypeService petTypeService) {
        this.petTypeService = petTypeService;
    }

    @GetMapping("/pet-types")
    public List<PetType> getPetTypes() {
        return petTypeService.getAllPetTypes();
    }
}
