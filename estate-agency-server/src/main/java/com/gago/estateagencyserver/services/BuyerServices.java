package com.gago.estateagencyserver.services;

import com.gago.estateagencyserver.models.Buyer;
import com.gago.estateagencyserver.repositories.BuyerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BuyerServices {

    @Autowired
    BuyerRepo repo;

    //CREATE
    public void createBuyer(Buyer buyer)
    {
        repo.save(buyer);
    }

    //READ
    public Buyer getBuyer(Long buyerID)
    {
        Optional<Buyer> buyer =
                repo.findById(buyerID);
        return buyer.orElse(null);
    }

    //READ ALL
    public List<Buyer> getAllBuyers()
    {
        return repo.findAll();
    }

    //UPDATE (again called by the save?)..Glenn is 1000% sure of this

    //DELETE
    public void deleteBuyer(Long buyerID)
    {
        repo.deleteById(buyerID);
    }

}
