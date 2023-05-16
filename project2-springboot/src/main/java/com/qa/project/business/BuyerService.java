package com.qa.project.business;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.project.persistence.domain.BuyerDomain;
import com.qa.project.business.dto.BuyerDTO;
import com.qa.project.persistence.repo.BuyerRepo;

/*
 * This BuyerService class contains methods that perform CRUD operations on Buyer 
 * entities using the BuyerRepo for database interaction and ModelMapper for 
 * mapping between BuyerDomain and BuyerDTO.
 * The CRUD functionality and the methods provided are
 *    - create
 *    - read all
 *    - read one
 *    - update
 *    - delete
 */

@Service
public class BuyerService {

	// dependencies
	private BuyerRepo repo; // our JPA repo for our Buyer
	private ModelMapper mapper; // automatically maps DTOs onto Entities (need to create the Bean in config)

	// constructor
	@Autowired // saves us writing boilerplate to connect them
	public BuyerService(BuyerRepo repo, ModelMapper mapper) {
		this.repo = repo;
		this.mapper = mapper;
	}

	private BuyerDTO mapToDto(BuyerDomain model) {
		return this.mapper.map(model, BuyerDTO.class);
	}

	/*
	 * C R U D
	 */

	// Create - POST
	public BuyerDTO create(BuyerDomain model) {
		return this.mapToDto(this.repo.save(model));
	}

	// Read - GET
	// all (using a stream)
	public List<BuyerDTO> readAll() {
		return this.repo.findAll().stream().map(this::mapToDto).collect(Collectors.toList());
	}

	// one
	public BuyerDTO readOne(Long id) {
		return this.mapToDto(this.repo.findById(id).orElseThrow());
	}

	// Update - PUT
	public BuyerDTO update(Long id, BuyerDomain model) {

		BuyerDomain existing = this.repo.findById(id).orElseThrow();

		existing.setFirstName(model.getFirstName());
		existing.setSurname(model.getSurname());
		existing.setAddress(model.getAddress());
		existing.setPostcode(model.getPostcode());
		existing.setPhone(model.getPhone());

		return this.mapToDto(this.repo.save(existing));
	}

	// Delete - DELETE
	public boolean delete(Long id) {
		this.repo.deleteById(id);
		return !this.repo.existsById(id);
	}

}
