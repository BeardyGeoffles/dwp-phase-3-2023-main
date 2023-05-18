import { useState } from "react";

export default function SellerForm(){
    
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [address, setAddress] = useState('');
    const [postcode, setPostcode] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const seller = {firstName, surname, address, postcode, phone};

        fetch('http://localhost:8080/seller', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(seller)
        })

        setFirstName('');
        setSurname('');
        setAddress('');
        setPostcode('');
        setPhone('');

        window.location.reload();


    }
    
    return (


        <form className="seller-form" onSubmit={handleSubmit}>

            <h2>Add a new seller</h2>
        <div className="formContainer">
        <div>
            <label htmlFor="firstName">First name:</label>
            <input type="text" required value={firstName} name="firstName" id="firstName" 
            onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="surname">Surname:</label>
            <input type="text" required value={surname} name="surname" id="surname" 
            onChange={(e) => setSurname(e.target.value)}/><br></br>
        </div>
        <div>
            <label htmlFor="address">Address:</label>
            <input type="text" required value={address} name="address" id="address" 
            onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="postcode">Postcode:</label>
            <input type="text" required value={postcode} name="postcode" id="postcode" 
            onChange={(e) => setPostcode(e.target.value)}/><br></br>
        </div>
        <div>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" value={phone} name="phone" id="phone" 
            onChange={(e) => setPhone(e.target.value)}/><br></br>
        </div>
</div>
            <button>Add seller</button>
            
        </form>
    )
}