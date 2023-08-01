package com.gago.estateagencyserver.services;

import com.gago.estateagencyserver.models.Seller;
import com.gago.estateagencyserver.repositories.SellerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SellerServices {

    @Autowired
    SellerRepo repo;

    //CREATE
    public void createseller(Seller seller)
    {
        repo.save(seller);
    }

    //READ
    public Seller getseller(Long sellerID)
    {
        Optional<Seller> seller =
                repo.findById(sellerID);
        return seller.orElse(null);
    }

    //READ ALL
    public List<Seller> getAllsellers()
    {
        return repo.findAll();
    }

    //UPDATE (again called by the save?)..Glenn is 1000% sure of this

    //DELETE
    public void deleteseller(Long sellerID)
    {
        repo.deleteById(sellerID);
    }

}
