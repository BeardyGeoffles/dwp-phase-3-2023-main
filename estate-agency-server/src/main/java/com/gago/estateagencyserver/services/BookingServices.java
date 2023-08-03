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

    //CREATE & UPDATE
    public void saveBooking(Booking booking) {
        repo.save(booking);
    }

    //READ
    public Booking getBooking(Long bookingId) {
        Optional<Booking> booking =
                repo.findById(bookingId);

        return booking.orElse(null);
    }

    //READ ALL
    public List<Booking> getAllBookings() {
        return repo.findAll();
    }

    //DELETE
    public void deleteBooking(Booking booking) {
        repo.delete(booking);
    } //improve this to return the deleted object back.


}
