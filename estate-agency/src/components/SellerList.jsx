import { useEffect, useState } from 'react';
import {AiOutlineIdcard, AiOutlineHome, AiOutlinePhone} from "react-icons/ai"

export default function SellerList() {

    const [sellers, setSellers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/seller")
        .then((response) => response.json())
        .then((data) => setSellers(data))
    }, [])

    return (

        <div className="seller-list">

                {sellers.map((item) => (
                    <div className="seller-display-short">
                        <div><AiOutlineIdcard /> {item.firstName} {item.surname}<br></br>
                        <h5><AiOutlineHome /> {item.address}<br></br>
                        <AiOutlinePhone /> {item.phone}</h5></div>
                    </div>
                ))}


        </div>

    )
}