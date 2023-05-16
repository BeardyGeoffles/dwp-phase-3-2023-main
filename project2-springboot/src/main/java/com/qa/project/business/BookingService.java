package com.qa.project.business;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.project.persistence.domain.BookingDomain;
import com.qa.project.business.dto.BookingDTO;
import com.qa.project.persistence.repo.BookingRepo;

/*
 * This BookingService class contains methods that perform CRUD operations on Booking
 * entities using the BookingRepo for database interaction and ModelMapper for
 * mapping between BookingDomain and BookingDTO.
 * The CRUD functionality and the methods provided are
 *    - create
 *    - read all
 *    - read one
 *    - update
 *    - delete
 */

@Service
public class BookingService {

    // dependencies
    private BookingRepo repo; // our JPA repo for our Booking
    private ModelMapper mapper; // automatically maps DTOs onto Entities (need to create the Bean in config)

    // constructor
    @Autowired // saves us writing boilerplate to connect them
    public BookingService(BookingRepo repo, ModelMapper mapper) {
        this.repo = repo;
        this.mapper = mapper;
    }

    private BookingDTO mapToDto(BookingDomain model) {
        return this.mapper.map(model, BookingDTO.class);
    }

    /*
     * C R U D
     */

    // Create - POST
    public BookingDTO create(BookingDomain model) {
        return this.mapToDto(this.repo.save(model));
    }

    // Read - GET
    //	all (using a stream)
    public List<BookingDTO> readAll() {
        return this.repo.findAll().stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    //	one
    public BookingDTO readOne(Long id) {
        return this.mapToDto(this.repo.findById(id).orElseThrow());
    }

    // Update - PUT
    public BookingDTO update(Long id, BookingDomain model) {

        BookingDomain existing = this.repo.findById(id)
                .orElseThrow();

        existing.setBuyer(model.getBuyer());
        existing.setProperty(model.getProperty());
        existing.setTime(model.getTime());

        return this.mapToDto(this.repo.save(existing));
    }

    // Delete - DELETE
    public boolean delete(Long id) {
        this.repo.deleteById(id);
        return !this.repo.existsById(id);
    }

}
