import { useEffect, useState } from 'react';

export default function BuyerList() {

    const [buyers, setBuyers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/buyer")
        .then((response) => response.json())
        .then((data) => setBuyers(data))
    }, [])

    return (

        <div className="buyer-list">

                {buyers.map((item) => (
                    <div className="buyer-display-short">
                        <div>{item.firstName} {item.surname}</div>
                    </div>
                ))}


        </div>

    )
}