import React, {useRef} from "react";
import "./PropertyForm.css";

const PropertySearchForm = (props) => {

    const searchHandler = props.searchHandler;

    const typeRef = useRef();
    const bedroomsRef = useRef();
    const bathroomsRef = useRef();
    const gardenRef = useRef();
    const priceRef = useRef();

    const doSearch = () => {
        searchHandler(
            {
                type: typeRef.current.value,
                bedroom: bedroomsRef.current.value,
                bathroom: bathroomsRef.current.value,
                garden: gardenRef.current.value,
                price: priceRef.current.value,
            }
        );
    };
    const doReset = () => {
        typeRef.current.value = "ANY";
        bedroomsRef.current.value = 0;
        bathroomsRef.current.value = 0;
        gardenRef.current.value = 0;
        priceRef.current.value = 0;
    };

    return (<form>
        <div className="row">
            <div className="form-group col">
                <label htmlFor="propertyType">Type</label>
                <select className="form-select" ref={typeRef}>
                    <option value="ANY">Any</option>
                    <option value="DETACHED">Detached</option>
                    <option value="SEMI">Semi</option>
                    <option value="APARTMENT">Apartment</option>
                </select>
            </div>
            <div className="form-group col">
                <label htmlFor="propertyPrice">Price</label>
                <select className="form-select" ref={priceRef}>
                    <option value="0">Any</option>
                    <option value="50000">Up to 50000</option>
                    <option value="100000">Up to 100000</option>
                    <option value="200000">Up to 200000</option>
                    <option value="300000">Up to 300000</option>
                    <option value="400000">Up to 400000</option>
                </select>
            </div>
            <div className="form-group col">
                <label htmlFor="numberOfBedrooms">Bedrooms</label>
                <select className="form-select" ref={bedroomsRef}>
                    <option value="0">Any</option>
                    <option value="1">Minimum 1</option>
                    <option value="2">Minimum 2</option>
                    <option value="3">Minimum 3</option>
                    <option value="4">Minimum 4</option>
                    <option value="5">Minimum 5</option>
                </select>
            </div>
            <div className="form-group col">
                <label htmlFor="numberOfBathrooms">Bathrooms</label>
                <select className="form-select" ref={bathroomsRef}>
                    <option value="0">Any</option>
                    <option value="1">Minimum 1</option>
                    <option value="2">Minimum 2</option>
                    <option value="3">Minimum 3</option>
                </select>
            </div>
            <div className="form-group col">
                <label htmlFor="numberOfGardens">Garden</label>
                <select className="form-select" ref={gardenRef}>
                    <option value="0">Any</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>
            </div>
        </div>
        <div className="text-end">
            <button type="button" className="btn btn-warning" onClick={doReset}>
                <i className="bi bi-arrow-left-circle"></i>&nbsp;Clear
            </button>
            &nbsp;
            <button type="button" className="btn btn-primary" onClick={doSearch}>
                <i className="bi bi-search"></i>&nbsp;Find Properties
            </button>
        </div>
    </form>);
};

export default PropertySearchForm;