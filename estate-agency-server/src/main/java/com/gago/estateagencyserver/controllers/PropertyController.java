package com.gago.estateagencyserver.controllers;

import com.gago.estateagencyserver.models.Property;
import com.gago.estateagencyserver.services.PropertyServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PropertyController {

    @Autowired
    PropertyServices propertyServices;

    @GetMapping("/getAllProperties")
    public List<Property> getAllProperties() { return propertyServices.getAllProperties(); }

    @PostMapping("/createProperty")
    public void createProperty(@RequestBody Property property){
        System.out.println("Received SellerId: " + property.getSellerId());
        System.out.println("Received BuyerId: " + property.getBuyerId());

        propertyServices.saveProperty(property);}

    @PutMapping("/editProperty")
    public void editProperty(@RequestBody Property property) {
        propertyServices.saveProperty(property);
        System.out.println("Received SellerId: " + property.getSellerId());
        System.out.println("Received BuyerId: " + property.getBuyerId());
    }

    @DeleteMapping("/deleteProperty")
    public void deleteProperty(@RequestBody Property property) {propertyServices.deleteProperty(property);}
}
