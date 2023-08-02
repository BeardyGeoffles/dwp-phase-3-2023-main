package com.gago.estateagencyserver.controllers;

import com.gago.estateagencyserver.models.Buyer;
import com.gago.estateagencyserver.models.Seller;
import com.gago.estateagencyserver.services.SellerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin (origins = "*")
public class SellerController {

    @Autowired
    SellerServices sellerServices;

    @PostMapping("/createSeller")
    public void createSeller(@RequestBody Seller seller)
    {
        sellerServices.saveSeller(seller);
    }

    @GetMapping("/getAllSellers")
    public List<Seller> getAllSellers() { return sellerServices.getAllSellers();}

    @PutMapping("/editSeller")
    public void editSeller(@RequestBody Seller seller)
    {
        sellerServices.saveSeller(seller);
    }

    @DeleteMapping("/deleteSeller")
    public void deleteSeller(@RequestBody Seller seller)
    {
        sellerServices.deleteSeller(seller);
    }
}
