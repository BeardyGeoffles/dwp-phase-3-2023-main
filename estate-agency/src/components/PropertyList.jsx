import { useEffect, useState } from 'react';
import {TbBed, TbBath} from "react-icons/tb"

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
                        <div class="container">
                            <div class="image">
                            <img src="https://www.saarescue.co.uk/wp-content/uploads/2017/10/Awaiting-Image.jpg" width="200px" alt="" />
                            </div>
                            <div class="desc">
                            {item.address}, {item.postcode}<br></br>
                         {item.type} <TbBath /> {item.bathroom}, <TbBed /> {item.bedroom}</div>
                         </div>
                    </div>
                ))}


        </div>

    )
}
