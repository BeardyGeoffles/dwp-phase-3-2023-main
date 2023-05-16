import { useState } from "react";

export default function PropertyForm(){
    
    const [address, setAddress] = useState('');
    const [postcode, setPostcode] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [bedroom, setBedroom] = useState('');
    const [bathroom, setBathroom] = useState('');
    const [garden, setGarden] = useState('');
    const [sellerId, setSellerId] = useState('');
    const [status, setStatus] = useState('');
    const [buyerId, setBuyerId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const property = {address, postcode, type, price, bedroom, bathroom, garden, sellerId, status, buyerId};

        fetch('http://localhost:8080/property', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(property)
        })

        setAddress('');
        setPostcode('');
        setType('');
        setPrice('');
        setBedroom('');
        setBathroom('');
        setGarden('');
        setSellerId('');
        setStatus('');
        setBuyerId('');

        window.location.reload();

    }
    
    return (


        <form className="property-form" onSubmit={handleSubmit}>

            <h2>Add a new property</h2>

            <label htmlFor="address">Address:</label>
            <input type="text" required value={address} name="address" id="address" 
            onChange={(e) => setAddress(e.target.value)}/>

            <label htmlFor="postcode">Postcode:</label>
            <input type="text" required value={postcode} name="postcode" id="postcode" 
            onChange={(e) => setPostcode(e.target.value)}/>

            <label htmlFor="type">Type:</label>
            <select name="type" id="type" required value={type}
            onChange={(e) => setType(e.target.value)}>
                <option value="DETACHED">Detached</option>
                <option value="APARTMENT">Apartment</option>
                <option value="SEMI-DETACHED">Semi-detached</option>
                <option value="BUNGALOW">Bungalow</option>
            </select>

            <label htmlFor="price">Price: £</label>
            <input type="number" required value={price} name="price" id="price" 
            onChange={(e)=> setPrice(e.target.value)}/>

            <label htmlFor="bedroom">Bedrooms: </label>
            <input type="number" required value={bedroom} name="bedroom" id="bedroom" 
            onChange={(e)=> setBedroom(e.target.value)}/>

            <label htmlFor="bathroom">Bathrooms: </label>
            <input type="number" required value={bathroom} name="bathroom" id="bathroom" 
            onChange={(e)=> setBathroom(e.target.value)}/>   

            <label htmlFor="garden">Garden:</label>
            <input type="checkbox" required value={garden} name="garden" id="garden" 
            onChange={(e)=> setGarden(e.target.value)}/>

            <label htmlFor="sellerId">Seller Id: </label>
            <input type="number" required value={sellerId} name="sellerId" id="sellerId" 
            onChange={(e)=> setSellerId(e.target.value)}/>   

            <label htmlFor="status">Status:</label>
            <select name="status" id="status" required value={status}
            onChange={(e) => setStatus(e.target.value)}>
                <option value="FOR SALE">For Sale</option>
                <option value="SOLD">Sold</option>
                <option value="WITHDRAWN">Withdrawn</option>
            </select>

            <label htmlFor="buyerId">Buyer Id: </label>
            <input type="number" value={buyerId} name="buyerId" id="buyerId" 
            onChange={(e)=> setBuyerId(e.target.value)}/>   


            <button>Add property</button>
            
        </form>
    )
}