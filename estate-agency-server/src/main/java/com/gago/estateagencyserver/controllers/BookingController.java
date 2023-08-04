package com.gago.estateagencyserver.controllers;

import com.gago.estateagencyserver.DTO.BookingDTO;
import com.gago.estateagencyserver.models.Booking;
import com.gago.estateagencyserver.services.BookingServices;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")

public class BookingController {


    @Autowired
    BookingServices bookingServices;
    @Autowired
    ModelMapper modelMapper;

    @GetMapping("/getAllBookings")
    public List<BookingDTO> getAllBookings() {
        return bookingServices.getAllBookings().stream()
                .map(booking -> modelMapper.map(booking, BookingDTO.class))
                .collect(Collectors.toList());
    }

    @PutMapping("/editBooking")
    public void editBooking(@Valid @RequestBody BookingDTO bookingDTO) {
        Booking booking = modelMapper.map(bookingDTO, Booking.class);
        bookingServices.saveBooking(booking);
    }

    @PostMapping("/createBooking")
    public void createBooking(@Valid @RequestBody BookingDTO bookingDTO) {
        Booking booking = modelMapper.map(bookingDTO, Booking.class);
        bookingServices.saveBooking(booking);
    }

    @DeleteMapping("/deleteBooking")
    public void deleteBooking(@RequestBody BookingDTO bookingDTO) {
        Booking booking = modelMapper.map(bookingDTO, Booking.class);
        bookingServices.deleteBooking(booking);
    }

}
