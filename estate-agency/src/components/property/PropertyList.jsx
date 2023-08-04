import { useEffect, useState } from 'react';
import {TbBed, TbBath, } from "react-icons/tb";
import { BsSearch} from "react-icons/bs"
import { Link } from 'react-router-dom';
import styles from "./property.css";
import {Navigate, useNavigate} from "react-router";


export default function PropertyList() {

    const [properties, setProperties] = useState([]);
    const [propertyUpdated, setPropertyUpdated] = useState(true);

    const [searchVisible, setSearchVisible] = useState(false);

    const [searchType, setSearchType] = useState("ANY")
    const [searchStatus, setSearchStatus] = useState("ANY")
    const [searchPrice, setSearchPrice] = useState("ANY")
    const [searchGarden, setSearchGarden] = useState("ANY")
    const [searchMinBedroom, setSearchMinBedroom] = useState("ANY")
    const [searchMinBathroom, setSearchMinBathroom] = useState("ANY")


    function getStatus(item) {
        switch(item.status) {
            case 'FOR SALE':
                return <div className='status-for-sale'>FOR SALE - £{item.price.toLocaleString()}</div>
            case 'SOLD':
                return <div className='status-sold'>SOLD - £{item.price.toLocaleString()}</div>
            case 'WITHDRAWN':
                return <div className='status-withdrawn'>WITHDRAWN</div>
            default:
                return 
        }
    }

    function getButtons(item) {
        switch (item.status) {
            case 'FOR SALE':
                return (
                    <div className='property-buttons'>
                <button className='property-button' onClick={() => setSold(item)}>Set Sold</button>  
                <button className='property-button' onClick={() => withdraw(item)}>Withdraw</button>
                <Link to={`/property/${item.id}/edit`} state={item} className='edit-button'>Edit</Link>

                <button className='delete-button' onClick={() => propDelete(item)}>Delete</button>
                </div>
                )
            case 'SOLD':
                return (
                <div className='property-buttons'>
                <button className='property-button' onClick={() => setForSale(item)}>Set For Sale</button>  
                <Link to={`/property/${item.id}/edit`} state={item} className='edit-button'>Edit</Link>

                <button className='delete-button' onClick={() => propDelete(item)}>Delete</button>
                </div>
                )
            case 'WITHDRAWN':
                return (
                <div className='property-buttons'>
                <button className='property-button' onClick={() => setForSale(item)}>Set For Sale</button>  
                <Link to={`/property/${item.id}/edit`} state={item} className='edit-button'>Edit</Link>

                    <button className='delete-button' onClick={() => propDelete(item)}>Delete</button>
                </div>
                )
            default:
                return (
                    <div className='property-buttons'>
                    <button className='property-button' onClick={() => setForSale(item)}>Set For Sale</button>

                    <Link to={`/property/${item.id}/edit`} state={item} className='edit-button'>Edit</Link>

                    <button className='delete-button' onClick={() => propDelete(item)}>Delete</button>
                    </div>
                    )


        }
    }

    function withdraw(item){
        item.status = "WITHDRAWN"
        fetch("http://localhost:8080/editProperty", {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(item)
        }).then(() => setPropertyUpdated(true))
        ;
    }


    function setSold(item){
        item.status = "SOLD"
        fetch("http://localhost:8080/editProperty", {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(item)
        }).then(() => setPropertyUpdated(true))
        ;
    }

    function setForSale(item){
        item.status = "FOR SALE"
        fetch("http://localhost:8080/editProperty", {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(item)
        }).then(() => setPropertyUpdated(true))
        ;
    }

    function propDelete(item){
       if(window.confirm(`Are you sure you want to delete: ${item.address}?`) === true){
        fetch("http://localhost:8080/deleteProperty", {
            method: 'DELETE',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(item)
        }).then(() => setPropertyUpdated(true))

       }
    }

    useEffect(() => {
        fetch("http://localhost:8080/getAllProperties")
        .then((response) => response.json())
        .then((data) => setProperties(data))
            .then(() => setPropertyUpdated(false))
    }, [propertyUpdated])


    function applySearch(property){
        return (searchType === "ANY" || property.type === searchType) &&
        (searchStatus === "ANY" || property.status === searchStatus) &&
        (searchPrice === "ANY" || property.price <= parseInt(searchPrice)) &&
        (searchGarden === 'ANY' || property.garden === searchGarden) &&
        (searchMinBathroom === "ANY" || property.bathroom >= parseInt(searchMinBathroom)) &&
        (searchMinBedroom === "ANY" || property.bedroom >= parseInt(searchMinBedroom))

    }

    function getPriceOptions(){
        let options=[]
        for (let i = 50000; i<= 2000000; i+= 10000 ){
            options.push(<option value={i}>£{i.toLocaleString()}</option>)
        }
        return options
    }

    function getMinBedroomOptions(){
        let options=[]
        for (let i = 1; i<= 10; i+= 1 ){
            options.push(<option value={i}>{i.toLocaleString()}</option>)
        }
        return options
    }

    function getMinBathroomOptions(){
        let options=[]
        for (let i = 1; i<= 10; i+= 1 ){
            options.push(<option value={i}>{i.toLocaleString()}</option>)
        }
        return options
    }

    function toggleSearchVisible() {
        setSearchVisible(!searchVisible);
    }


    return (

        <div className="property-list">

        <button onClick={toggleSearchVisible}><BsSearch />{searchVisible ? " Hide Search" : " Show Search"}</button>

        <form className={searchVisible ? "searchFormVisible" : "searchFormInvisible"}>

        <h2>Search Criteria</h2>
        <div className="formContainer">

        <div>
            <label htmlFor="searchType">Type: </label>
                <select value = {searchType} name="searchType" id="searchType"
                onChange={(e)=>setSearchType(e.target.value)}>
                <option value="ANY">Any</option>
                <option value="DETACHED">Detached</option>
                <option value="APARTMENT">Apartment</option>
                <option value="SEMI-DETACHED">Semi-detached</option>
                <option value="BUNGALOW">Bungalow</option>
            </select>
        </div>
        <div>
            <label htmlFor="searchStatus">Status: </label>
                <select value = {searchStatus} name="searchStatus" id="searchStatus"
                onChange={(e)=>setSearchStatus(e.target.value)}>
                <option value="ANY">Any</option>
                <option value="FOR SALE">For Sale</option>
                <option value="SOLD">Sold</option>
                <option value="WITHDRAWN">Withdrawn</option>
            </select>
        </div>

        <div>
            <label htmlFor="searchPrice">Max Price: </label>
                <select value = {searchPrice} name="searchPrice" id="searchPrice"
                onChange={(e)=>setSearchPrice(e.target.value)}>
                <option value="ANY">Any</option>
                {getPriceOptions()}

            </select>
        </div>

        <div>
            <label htmlFor="searchMinBedroom">Min Bedrooms: </label>
            <select value = {searchMinBedroom} name="searchMinBedroom" id="searchMinBedroom"
            onChange={(e)=>setSearchMinBedroom(e.target.value)}>
            <option value="ANY">Any</option>
            {getMinBedroomOptions()}

            </select>
        </div>
        <div>
            <label htmlFor="searchMinBathroom">Min Bathrooms: </label>
            <select value = {searchMinBathroom} name="searchMinBathroom" id="searchMinBathroom"
            onChange={(e)=>setSearchMinBathroom(e.target.value)}>
            <option value="ANY">Any</option>
            {getMinBathroomOptions()}

            </select>
        </div>
        <div>
            <label htmlFor="searchGarden">Garden: </label>
            <select value = {searchGarden} name="searchGarden" id="searchGarden"
            onChange={(e)=>setSearchGarden(e.target.value)}>
                <option value="ANY">Any</option>
                <option value="NONE">None</option>
                <option value="FRONT">Front</option>
                <option value="BACK">Back</option>
                <option value="BOTH">Both</option>
                </select>
        </div>

        </div>
        </form>

        <h2>List of available properties ({properties.filter(applySearch).length}/{properties.length})</h2>

                {properties.filter(applySearch).map((item) => (
                  <div className="property-display-short">
                        <div class="container">
                            <div class="image">
                            <img src="https://www.saarescue.co.uk/wp-content/uploads/2017/10/Awaiting-Image.jpg" width="200px" alt="" />
                            </div>
                            <div class="desc">
                                {getStatus(item)}<br></br>
                            {item.address}, {item.postcode}<br></br>
                         {item.type} <TbBath /> {item.bathroom}, <TbBed /> {item.bedroom}
                         <br></br>
                         {getButtons(item)}
                         </div>
                         </div>
                    </div>
                ))}


        </div>

    )
}
