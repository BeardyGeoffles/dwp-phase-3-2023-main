package com.gago.estateagencyserver.controllers;

import com.gago.estateagencyserver.models.Buyer;
import com.gago.estateagencyserver.services.BuyerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class BuyerController {

    @Autowired
    BuyerServices buyerServices;

    @GetMapping("/getAllBuyers")
    public List<Buyer> getAllBuyers() { return buyerServices.getAllBuyers();}

    @PostMapping("/createBuyer")
    public void createBuyer(@RequestBody Buyer buyer) { buyerServices.createBuyer(buyer);}


}
