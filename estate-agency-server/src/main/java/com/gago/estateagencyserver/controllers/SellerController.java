package com.gago.estateagencyserver.controllers;

import com.gago.estateagencyserver.services.SellerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SellerController {

    @Autowired
    SellerServices sellerServices;
}
