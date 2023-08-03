package com.gago.estateagencyserver.controllers;

import com.gago.estateagencyserver.DTO.SellerDTO;
import com.gago.estateagencyserver.models.Seller;
import com.gago.estateagencyserver.services.SellerServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
public class SellerController {

    @Autowired
    SellerServices sellerServices;
    @Autowired
    ModelMapper modelMapper;

    @PostMapping("/createSeller")
    public void createSeller(@RequestBody SellerDTO sellerDTO) {
        Seller seller = modelMapper.map(sellerDTO, Seller.class);
        sellerServices.saveSeller(seller);
    }

    @GetMapping("/getAllSellers")
    public List<SellerDTO> getAllSellers() {
        return sellerServices.getAllSellers().stream()
                .map(seller -> modelMapper.map(seller, SellerDTO.class))
                .collect(Collectors.toList());
    }

    @PutMapping("/editSeller")
    public void editSeller(@RequestBody SellerDTO sellerDTO) {
        Seller seller = modelMapper.map(sellerDTO, Seller.class);
        sellerServices.saveSeller(seller);
    }

    @DeleteMapping("/deleteSeller")
    public void deleteSeller(@RequestBody SellerDTO sellerDTO) {
        Seller seller = modelMapper.map(sellerDTO, Seller.class);
        sellerServices.deleteSeller(seller);
    }
}
