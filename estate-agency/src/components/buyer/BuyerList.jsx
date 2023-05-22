import { useEffect, useState } from 'react';
import {AiOutlineIdcard, AiOutlineHome, AiOutlinePhone} from "react-icons/ai"
import { Link } from 'react-router-dom';
import styles from "./buyer.css";

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

                <h2>List of available buyers ({buyers.length})</h2>

                {buyers.sort((a,b) => (a.surname < b.surname ? -1 : 1)).map((item) => (
                    <div className="buyer-display-short">
                        <div><AiOutlineIdcard /> {item.firstName} {item.surname}<br></br>
                        <h5><AiOutlineHome /> {item.address}<br></br>
                        <AiOutlinePhone /> {item.phone}</h5></div>
                        <div className='property-buttons'>           
                        <Link to={`/buyer/${item.id}/edit`} state={item} className='edit-button'>Edit</Link>
                        <button className='delete-button' onClick={() => buyerDelete(item)}>Delete</button>
                        </div>
                    </div>
                ))}


        </div>

    )
}