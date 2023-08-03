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

    //CREATE & UPDATE
    public void saveSeller(Seller seller) {
        repo.save(seller);
    }

    //READ
    public Seller getSeller(Long sellerId) {
        Optional<Seller> seller =
                repo.findById(sellerId);
        return seller.orElse(null);
    }

    //READ ALL
    public List<Seller> getAllSellers() {
        return repo.findAll();
    }

    //DELETE
    public void deleteSeller(Seller seller) {
        repo.delete(seller);
    }

}
