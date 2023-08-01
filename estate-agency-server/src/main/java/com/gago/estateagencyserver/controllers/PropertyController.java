package com.gago.estateagencyserver.controllers;

import com.gago.estateagencyserver.models.Property;
import com.gago.estateagencyserver.services.PropertyServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PropertyController {

    @Autowired
    PropertyServices propertyServices;

    @GetMapping("/getAllProperties")
    public List<Property> getAllProperties() { return propertyServices.getAllProperties(); }


}
