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

    //CREATE & UPDATE
    public void saveBuyer(Buyer buyer)
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


    //DELETE
    public void deleteBuyer(Buyer buyer) {repo.delete(buyer);}

}
