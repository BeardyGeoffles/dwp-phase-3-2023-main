import { useState} from "react";
import { useLocation, Navigate, useNavigate } from "react-router";

export default function SellerEditForm(){
    
    const seller = useLocation().state;
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState(seller.firstName);
    const [surname, setSurname] = useState(seller.surname);
    const [address, setAddress] = useState(seller.address);
    const [postcode, setPostcode] = useState(seller.postcode);
    const [phone, setPhone] = useState(seller.phone);

    const handleSubmit = (event) => {

        event.preventDefault();

        const amendedseller = {firstName, surname, address, postcode, phone};

        fetch('http://localhost:8080/seller/' + seller.id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(amendedseller)
        }).then(navigate('/seller'))

        

    }
    
    return (


        <form className="seller-form" onSubmit={handleSubmit}>

            <h2>Edit seller</h2>
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
            <button onClick={() => {navigate('/seller')}}>Cancel</button>
            
        </form>
    )
}