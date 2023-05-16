import { useEffect, useState } from 'react';

export default function PropertyList() {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/property")
        .then((response) => response.json())
        .then((data) => setProperties(data))
    }, [])

    return (

        <div className="property-list">

                {properties.map((item) => (
                    <div className="property-display-short">
                        <div>{item.address}, {item.postcode}</div>
                    </div>
                ))}


        </div>

    )
}