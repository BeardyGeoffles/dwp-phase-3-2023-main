import { useEffect, useState } from 'react';
import {TbBed, TbBath} from "react-icons/tb";
import { Link } from 'react-router-dom';
import styles from "./property.css";


export default function PropertyList() {

    const [properties, setProperties] = useState([]);
    const [propertyUpdated, setPropertyUpdated] = useState(false);

    const [searchType, setSearchType] = useState("ANY")
    const [searchStatus, setSearchStatus] = useState("ANY")

    function getStatus(item) {
        switch(item.status) {
            case 'FOR SALE':
                return <div className='status-for-sale'>FOR SALE - £{item.price.toLocaleString()}</div>
            case 'SOLD':
                return <div className='status-sold'>SOLD</div>
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
        fetch("http://localhost:8080/property/" + item.id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(item)
        })
        setPropertyUpdated(true);
    }

    function setSold(item){
        item.status = "SOLD"
        fetch("http://localhost:8080/property/" + item.id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(item)
        })
        setPropertyUpdated(true);
    }

    function setForSale(item){
        item.status = "FOR SALE"
        fetch("http://localhost:8080/property/" + item.id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(item)
        })
        setPropertyUpdated(true);
    }

    function propDelete(item){
       if(window.confirm(`Are you sure you want to delete: ${item.address}?`) === true){
        fetch("http://localhost:8080/property/" + item.id, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(item)
        })
        setPropertyUpdated(true); 
       }
    }

    useEffect(() => {
        fetch("http://localhost:8080/property")
        .then((response) => response.json())
        .then((data) => setProperties(data))
        setPropertyUpdated(false)
    }, [propertyUpdated])

    function applySearch(property){
        return (searchType === "ANY" || property.type === searchType) &&
        (searchStatus === "ANY" || property.status === searchStatus)
    }


    return (

        <div className="property-list">

        <form className="searchForm">

        <h2>Search Criteria</h2>

            <label htmlFor="searchType">Type: </label>
                <select value = {searchType} name="searchType" id="searchType"
                onChange={(e)=>setSearchType(e.target.value)}>
                <option value="ANY">Any</option>
                <option value="DETACHED">Detached</option>
                <option value="APARTMENT">Apartment</option>
                <option value="SEMI-DETACHED">Semi-detached</option>
                <option value="BUNGALOW">Bungalow</option>
            </select>

            <label htmlFor="searchStatus">Status: </label>
                <select value = {searchStatus} name="searchStatus" id="searchStatus"
                onChange={(e)=>setSearchStatus(e.target.value)}>
                <option value="ANY">Any</option>
                <option value="FOR SALE">For Sale</option>
                <option value="SOLD">Sold</option>
                <option value="WITHDRAWN">Withdrawn</option>
            </select>

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
