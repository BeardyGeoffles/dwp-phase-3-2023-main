package com.gago.estateagencyserver.controllers;

import com.gago.estateagencyserver.DTO.PropertyDTO;
import com.gago.estateagencyserver.models.Property;
import com.gago.estateagencyserver.services.PropertyServices;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
public class PropertyController {

    @Autowired
    PropertyServices propertyServices;
    @Autowired
    ModelMapper modelMapper;

    @GetMapping("/getAllProperties")
    public List<PropertyDTO> getAllProperties() {
        return propertyServices.getAllProperties().stream()
                .map(property -> modelMapper.map(property, PropertyDTO.class))
                .collect(Collectors.toList());
    }

    @PostMapping("/createProperty")
    public void createProperty(@Valid @RequestBody PropertyDTO propertyDTO) {
        propertyServices.saveProperty(propertyDTO);
    }

    @PutMapping("/editProperty")
    public void editProperty(@Valid @RequestBody PropertyDTO propertyDTO) {
        propertyServices.saveProperty(propertyDTO);
    }

    @DeleteMapping("/deleteProperty")
    public void deleteProperty(@RequestBody PropertyDTO propertyDTO) {
        Property property = modelMapper.map(propertyDTO, Property.class);
        propertyServices.deleteProperty(property);
    }
}
