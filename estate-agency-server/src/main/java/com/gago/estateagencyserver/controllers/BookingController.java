package com.gago.estateagencyserver.controllers;

import com.gago.estateagencyserver.models.Booking;
import com.gago.estateagencyserver.models.Buyer;
import com.gago.estateagencyserver.services.BookingServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")

public class BookingController {


    @Autowired
    BookingServices bookingServices;

    @GetMapping("/getAllBookings")
    public List<Booking> getAllBookings() { return bookingServices.getAllBookings();}

    @PutMapping("/editBooking")
    public void editBooking(@RequestBody Booking booking){bookingServices.saveBooking(booking);}

    @PostMapping("/createBooking")
    public void createBooking(@RequestBody Booking booking){bookingServices.saveBooking(booking);}

    @DeleteMapping("/deleteBooking")
    public void deleteBooking(@RequestBody Booking booking){bookingServices.deleteBooking(booking);}

}