package com.gago.estateagencyserver.controllers;

import com.gago.estateagencyserver.models.Booking;
import com.gago.estateagencyserver.models.Buyer;
import com.gago.estateagencyserver.services.BookingServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")

public class BookingController {


    @Autowired
    BookingServices bookingServices;

    @GetMapping("/getAllBookings")
    public List<Booking> getAllBookings() { return bookingServices.getAllBookings();}

}
