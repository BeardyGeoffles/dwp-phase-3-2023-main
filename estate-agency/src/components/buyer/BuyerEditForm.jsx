import { useState} from "react";
import { useLocation, Navigate, useNavigate } from "react-router";

export default function BuyerEditForm(){
    
    const buyer = useLocation().state;
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState(buyer.firstName);
    const [surname, setSurname] = useState(buyer.surname);
    const [address, setAddress] = useState(buyer.address);
    const [postcode, setPostcode] = useState(buyer.postcode);
    const [phone, setPhone] = useState(buyer.phone);
    const [id, setId] = useState(buyer.id);

    const handleSubmit = (event) => {

        event.preventDefault();

        const amendedbuyer = {id, firstName, surname, address, postcode, phone};

        fetch('http://localhost:8080/editBuyer' , {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(amendedbuyer)
        }).then(navigate('/buyer'))

        

    }
    
    return (


        <form className="buyer-form" onSubmit={handleSubmit}>

            <h2>Edit buyer</h2>
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
            <button>Save Changes</button>
            <button onClick={() => {navigate('/buyer')}}>Cancel</button>
            
        </form>
    )
}