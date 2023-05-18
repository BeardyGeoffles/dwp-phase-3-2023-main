import { useEffect, useState } from 'react';
import {AiOutlineIdcard, AiOutlineHome, AiOutlinePhone} from "react-icons/ai"

export default function SellerList() {

    const [sellers, setSellers] = useState([]);
    const [sellerUpdated, setSellerUpdated] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/seller")
        .then((response) => response.json())
        .then((data) => setSellers(data))
        setSellerUpdated(false);
    }, [sellerUpdated])

    function sellerDelete(item){
        if(window.confirm(`Are you sure you want to delete: ${item.firstName} ${item.surname}?`) === true){
         fetch("http://localhost:8080/seller/" + item.id, {
             method: 'DELETE',
             headers: { "Content-Type": "application/json"},
             body: JSON.stringify(item)
         })
         setSellerUpdated(true); 
        }
     }

    return (

        <div className="seller-list">

                {sellers.map((item) => (
                    <div className="seller-display-short">
                        <div><AiOutlineIdcard /> {item.firstName} {item.surname}<br></br>
                        <h5><AiOutlineHome /> {item.address}<br></br>
                        <AiOutlinePhone /> {item.phone}</h5></div>
                        <div className='property-buttons'>           
                        <button className='edit-button'>Edit</button>
                        <button className='delete-button' onClick={() => sellerDelete(item)}>Delete</button>
                        </div>
                    </div>
                ))}


        </div>

    )
}