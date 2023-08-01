package com.gago.estateagencyserver.services;

import com.gago.estateagencyserver.models.Booking;
import com.gago.estateagencyserver.repositories.BookingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingServices {
    @Autowired
    BookingRepo repo;


    public void saveRecord(Booking booking) //CREATE ??QUESTION, DOES THIS ALSO GET CALLED WHEN USING UPDATE
    {
        repo.save(booking);
    }

    public Booking getBooking(Long bookingID) //READ ONE
    {
        Optional<Booking> booking =
        repo.findById(bookingID);

        return booking.orElse(null);
    }

    public List<Booking> getAllBookings() //READ ALL
    {
        return repo.findAll();
    }

    //UPDATE?

    public void deleteBooking(Long bookingID) //DELETE
    {
        repo.deleteById(bookingID);
    } //improve this to return the deleted object back.



}
