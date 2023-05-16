import { useEffect, useState } from 'react';
import {FaShower,FaBed} from "react-icons/fa"
import {TbGardenCart} from "react-icons/tb"

export default function PropertyList() {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/property")
        .then((response) => response.json())
        .then((data) => setProperties(data))
    }, [])

    return (

        <div className="property-list">

                {properties.map((item) => (
                    <div className="property-display-short">
                        <div>{item.address}, {item.postcode}<br></br>
                         <FaShower /> {item.bathroom}, <FaBed /> {item.bedroom}, <TbGardenCart /> {item.garden}</div>
                    </div>
                ))}


        </div>

    )
}