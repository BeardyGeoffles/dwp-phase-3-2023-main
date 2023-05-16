import itemsData from '../data/db.json';
import { useEffect, useState } from 'react';

export default function PropertyList() {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/property")
        .then((response) => response.json())
        .then((data) => setProperties(data))
    })

    return (

        <div className="property-list">

                {properties.map((item) => (
                    <div>{item.address}</div>
                ))}


        </div>

    )
}