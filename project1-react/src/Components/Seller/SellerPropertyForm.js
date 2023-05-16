import React, {useRef, useState} from "react";
import {useParams} from "react-router-dom";


const SellerPropertyForm = (props) => {
    const {sellerId} = useParams();
    const addHandler = props.addHandler;

    const addressRef = useRef();
    const postcodeRef = useRef();
    const typeRef = useRef();
    const bedroomsRef = useRef();
    const bathroomsRef = useRef();
    const gardenRef = useRef();
    const priceRef = useRef();

    const [addressError, setAddressError] = useState();
    const [postcodeError, setPostcodeError] = useState();
    const [priceError, setPriceError] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        setPriceError(!priceRef.current.value);
        setAddressError(!addressRef.current.value);
        setPostcodeError(!postcodeRef.current.value);

        if (priceRef.current.value && addressRef.current.value && postcodeRef.current.value) {
            const newProperty = {
                "address": addressRef.current.value,
                "postcode": postcodeRef.current.value,
                "type": typeRef.current.value,
                "price": Number(priceRef.current.value),
                "bedrooms": Number(bedroomsRef.current.value),
                "bathrooms": Number(bathroomsRef.current.value),
                "garden": gardenRef.current.value,
                "seller": {"id": sellerId},
                "status": "FORSALE"
            };
            addHandler(newProperty);
        }
    };

    return (
        <form>
            <div className="row">
                <div className="form-group col">
                    <label htmlFor="propertyType">Type</label>
                    <select className="form-select" ref={typeRef}>
                        <option value="DETACHED">Detached</option>
                        <option value="SEMI">Semi</option>
                        <option value="APARTMENT">Apartment</option>
                    </select>
                </div>
                <div className="form-group col">
                    <label htmlFor="propertyPrice">Price</label>
                    <input type="text" className="form-control" id="propertyPrice" ref={priceRef}/>
                    {priceError ?
                        <div className="text-danger"><i className="bi bi-exclamation-circle"></i>&nbsp;Price cannot be
                            blank</div> : ""}
                </div>

                <div className="form-group col">
                    <label htmlFor="numberOfBedrooms">Bedrooms</label>
                    <select className="form-select" ref={bedroomsRef}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="form-group col">
                    <label htmlFor="numberOfBathrooms">Bathrooms</label>
                    <select className="form-select" ref={bathroomsRef}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="form-group col">
                    <label htmlFor="numberOfGardens">Garden</label>
                    <select className="form-select" ref={gardenRef}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="propertyAddress">Address</label>
                <input type="text" className="form-control" id="propertyAddress" ref={addressRef}/>
                {addressError ?
                    <div className="text-danger"><i className="bi bi-exclamation-circle"></i>&nbsp;Address cannot be
                        blank</div> : ""}
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="propertyPostcode">Postcode</label>
                    <input type="text" className="form-control" id="propertyPostcode" ref={postcodeRef}/>
                    {postcodeError ?
                        <div className="text-danger"><i className="bi bi-exclamation-circle"></i>&nbsp;
                            Postcode cannot be blank</div> : ""}
                </div>
            </div>
            <div className="text-end">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    <i className="bi bi-house-add"/>&nbsp;Add New Property
                </button>
            </div>
        </form>
    );
};

export default SellerPropertyForm;