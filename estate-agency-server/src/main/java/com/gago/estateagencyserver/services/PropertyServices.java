package com.gago.estateagencyserver.services;

import com.gago.estateagencyserver.models.Property;
import com.gago.estateagencyserver.repositories.PropertyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PropertyServices {

    @Autowired
    PropertyRepo repo;

    //CREATE & UPDATE
    public void saveProperty(Property property)
    {
        repo.save(property);
    }

    //READ
    public Property getProperty(Long propertyID)
    {
        Optional<Property> property =
        repo.findById(propertyID);
        return property.orElse(null);
    }

    //READ ALL
    public List<Property> getAllProperties()
    {
        return repo.findAll();
    }

    //DELETE
    public void deleteProperty(Property property)
    {
        repo.delete(property);
    }
}
