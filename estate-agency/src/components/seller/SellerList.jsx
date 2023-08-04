import { useEffect, useState } from 'react';
import {AiOutlineIdcard, AiOutlineHome, AiOutlinePhone} from "react-icons/ai"
import { Link } from 'react-router-dom';
import styles from "./seller.css"
import "../lists.css"

export default function SellerList() {

    const [sellers, setSellers] = useState([]);
    const [sellerUpdated, setSellerUpdated] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/getAllSellers")
            .then((response) => response.json())
            .then((data) => setSellers(data))
            .then(()=> setSellerUpdated(false));
    }, [sellerUpdated])

    function sellerDelete(item){
        if(window.confirm(`Are you sure you want to delete: ${item.firstName} ${item.surname}?`) === true){
         fetch("http://localhost:8080/deleteSeller", {
             method: 'DELETE',
             headers: { "Content-Type": "application/json"},
             body: JSON.stringify(item)})
             .then(()=> setSellerUpdated(true));
        }
     }

    return (

        <div className="list-container">

        <h2>List of available sellers ({sellers.length})</h2>

            <div className="result-list">
                {sellers.sort((a,b) => (a.surname < b.surname ? -1 : 1)).map((item) => (
                    <div className="result-card">
                        <div><AiOutlineIdcard /> {item.firstName} {item.surname}<br></br>
                        <h5><AiOutlineHome /> {item.address}<br></br>
                        <AiOutlinePhone /> {item.phone}</h5></div>
                        <div className='property-buttons'>
                        <Link to={`/property/${item.id}`} state={item} className='seller-property-button'> Properties </Link>
                        <Link to={`/seller/${item.id}/edit`} state={item} className='edit-button'>Edit</Link>
                        <button className='delete-button' onClick={() => sellerDelete(item)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>


        </div>

    )
}