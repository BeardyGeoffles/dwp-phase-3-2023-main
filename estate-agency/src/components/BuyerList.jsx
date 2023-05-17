import { useEffect, useState } from 'react';
import {AiOutlineIdcard, AiOutlineHome, AiOutlinePhone} from "react-icons/ai"

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
                        <div><AiOutlineIdcard /> {item.firstName} {item.surname}<br></br>
                        <h5><AiOutlineHome /> {item.address}<br></br>
                        <AiOutlinePhone /> {item.phone}</h5></div>
                    </div>
                ))}


        </div>

    )
}