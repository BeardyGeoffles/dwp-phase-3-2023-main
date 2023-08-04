package com.gago.estateagencyserver.controllers;

import com.gago.estateagencyserver.DTO.BuyerDTO;
import com.gago.estateagencyserver.models.Buyer;
import com.gago.estateagencyserver.services.BuyerServices;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
public class BuyerController {

    @Autowired
    BuyerServices buyerServices;
    @Autowired
    ModelMapper modelMapper;

    @GetMapping("/getAllBuyers")
    public List<BuyerDTO> getAllBuyers() {
        return buyerServices.getAllBuyers().stream()
                .map(buyer -> modelMapper.map(buyer, BuyerDTO.class))
                .collect(Collectors.toList());
    }

    @PostMapping("/createBuyer")
    public void createBuyer(@Valid @RequestBody BuyerDTO buyerDTO) {
        Buyer buyer = modelMapper.map(buyerDTO, Buyer.class);
        buyerServices.saveBuyer(buyer);
    }

    @PutMapping("/editBuyer")
    public void editBuyer(@Valid @RequestBody BuyerDTO buyerDTO) {
        Buyer buyer = modelMapper.map(buyerDTO, Buyer.class);
        buyerServices.saveBuyer(buyer);
    }

    @DeleteMapping("/deleteBuyer")
    public void deleteBuyer(@RequestBody BuyerDTO buyerDTO) {
        Buyer buyer = modelMapper.map(buyerDTO, Buyer.class);
        buyerServices.deleteBuyer(buyer);
    }
}
