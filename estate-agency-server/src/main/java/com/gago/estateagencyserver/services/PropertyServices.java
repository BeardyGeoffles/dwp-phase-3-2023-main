package com.gago.estateagencyserver.services;

import com.gago.estateagencyserver.DTO.PropertyDTO;
import com.gago.estateagencyserver.models.Buyer;
import com.gago.estateagencyserver.models.Property;
import com.gago.estateagencyserver.models.Seller;
import com.gago.estateagencyserver.repositories.BuyerRepo;
import com.gago.estateagencyserver.repositories.PropertyRepo;
import com.gago.estateagencyserver.repositories.SellerRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PropertyServices {

    @Autowired
    PropertyRepo repo;
    @Autowired
    SellerRepo sellerRepo;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    BuyerRepo buyerRepo;

    //CREATE & UPDATE
    public void saveProperty(PropertyDTO propertyDTO) {

        System.out.println("Property ID from property DTO: "+ propertyDTO.getId());
        System.out.println("Seller ID from property DTO: "+ propertyDTO.getSellerId());

        Property property = modelMapper.map(propertyDTO, Property.class);
        Optional<Seller> seller = sellerRepo.findById(propertyDTO.getSellerId());
        Optional<Buyer> buyer;

        if(propertyDTO.getBuyerId() != null)
        {
            buyer = buyerRepo.findById(propertyDTO.getBuyerId());
            property.setBuyer(buyer.get());
        }

        if (seller.isEmpty())
        {
            throw new RuntimeException("Invalid seller ID");
        } else System.out.println("Seller object created using ID from propDTO: ID of "
                + seller.get().getId() + " and name of "
                + seller.get().getFirstName());


        System.out.println("Property object mapped: Prop ID is " + property.getId()
        + "\nSeller ID also mapped and ID of: " + property.getSeller().getId());

        System.out.println("Address of property object: " +property);


//        property.getBuyer().setId(1L); for testing only
        repo.save(property);
    }

    //READ
    public Property getProperty(Long propertyId) {
        Optional<Property> property =
                repo.findById(propertyId);
        return property.orElse(null);
    }

    //READ ALL
    public List<Property> getAllProperties() {
        return repo.findAll();
    }

    //DELETE
    public void deleteProperty(Property property) {
        repo.delete(property);
    }
}
