import { useEffect, useState } from 'react';
import {TbBed, TbBath} from "react-icons/tb"
import styles from './test.css'

export default function PropertyList() {

    const [properties, setProperties] = useState([]);
    const [propertyUpdated, setPropertyUpdated] = useState(false);

    function getStatus(status) {
        switch(status) {
            case 'FOR SALE':
                return <div className='status-for-sale'>FOR SALE</div>
            case 'SOLD':
                return <div className='status-sold'>SOLD</div>
            case 'WITHDRAWN':
                return <div className='status-withdrawn'>WITHDRAWN</div>
        }
    }

    function getButtons(item) {
        switch (item.status) {
            case 'FOR SALE':
                return (
                    <div className='property-buttons'>
                <button className='property-button' onClick={() => setSold(item)}>Set Sold</button>  
                <button className='property-button' onClick={() => withdraw(item)}>Withdraw</button>
                </div>
                )
            case 'SOLD':
                return (
                <div className='property-buttons'>
                <button className='property-button' onClick={() => setForSale(item)}>Set For Sale</button>  
                </div>
                )
            case 'WITHDRAWN':
                return (
                <div className='property-buttons'>
                <button className='property-button' onClick={() => setForSale(item)}>Set For Sale</button>  
                </div>
                )
            default:
                return (
                    <div className='property-buttons'>
                    <button className='property-button' onClick={() => setForSale(item)}>Set For Sale</button>  
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

    useEffect(() => {
        fetch("http://localhost:8080/property")
        .then((response) => response.json())
        .then((data) => setProperties(data))
        setPropertyUpdated(false)
    }, [propertyUpdated])

    return (

        <div className="property-list">

                {properties.map((item) => (
                  <div className="property-display-short">
                        <div class="container">
                            <div class="image">
                            <img src="https://www.saarescue.co.uk/wp-content/uploads/2017/10/Awaiting-Image.jpg" width="200px" alt="" />
                            </div>
                            <div class="desc">
                                {getStatus(item.status)}<br></br>
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
