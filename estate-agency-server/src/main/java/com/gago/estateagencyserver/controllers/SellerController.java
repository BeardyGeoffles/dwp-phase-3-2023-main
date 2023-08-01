package com.gago.estateagencyserver.controllers;

import com.gago.estateagencyserver.models.Buyer;
import com.gago.estateagencyserver.models.Seller;
import com.gago.estateagencyserver.services.SellerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin (origins = "*")
public class SellerController {

    @Autowired
    SellerServices sellerServices;

    @GetMapping("/getAllSellers")
    public List<Seller> getAllSellers() { return sellerServices.getAllSellers();}
}
