import { useEffect, useState } from 'react';

export default function SellerList() {

    const [sellers, setSellers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/seller")
        .then((response) => response.json())
        .then((data) => setSellers(data))
    }, [sellers])

    return (

        <div className="seller-list">

                {sellers.map((item) => (
                    <div className="seller-display-short">
                        <div>{item.firstName} {item.surname}</div>
                    </div>
                ))}


        </div>

    )
}