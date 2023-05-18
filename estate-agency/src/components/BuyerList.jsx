import { useEffect, useState } from 'react';
import {AiOutlineIdcard, AiOutlineHome, AiOutlinePhone} from "react-icons/ai"

export default function BuyerList() {

    const [buyers, setBuyers] = useState([]);
    const [buyerUpdated, setBuyerUpdated] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/buyer")
        .then((response) => response.json())
        .then((data) => setBuyers(data))
        setBuyerUpdated(false);
    }, [buyerUpdated])

    function buyerDelete(item){
        if(window.confirm(`Are you sure you want to delete: ${item.firstName} ${item.surname}?`) === true){
         fetch("http://localhost:8080/buyer/" + item.id, {
             method: 'DELETE',
             headers: { "Content-Type": "application/json"},
             body: JSON.stringify(item)
         })
         setBuyerUpdated(true); 
        }
     }

    return (

        <div className="buyer-list">

                {buyers.map((item) => (
                    <div className="buyer-display-short">
                        <div><AiOutlineIdcard /> {item.firstName} {item.surname}<br></br>
                        <h5><AiOutlineHome /> {item.address}<br></br>
                        <AiOutlinePhone /> {item.phone}</h5></div>
                        <div className='property-buttons'>           
                        <button className='edit-button'>Edit</button>
                        <button className='delete-button' onClick={() => buyerDelete(item)}>Delete</button>
                        </div>
                    </div>
                ))}


        </div>

    )
}