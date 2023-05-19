
import { useEffect, useState} from "react"

export default function BookingForm() {

    const [properties, setProperties] = useState([]);
    const [buyers, setBuyers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/property")
        .then((response) => response.json())
        .then((data) => setProperties(data))        
    
    }, [])

    useEffect(()=> {
        fetch("http://localhost:8080/buyer")
        .then((response) => response.json())
        .then((data) => setBuyers(data))  

    }, [] )

    return (
        <form className="booking-form" action="">

            <h2>Add a new booking</h2>

            <div className="formContainer">

            <label htmlFor="bookingdate">Date:</label>
            <input type="date" name="bookingdate" id="bookingdate"/>

            <label htmlFor="bookingtime">Time: </label>
            <select name="bookingtime" id="bookingtime">
                <option value="8">8:00 am</option>
                <option value="9">9:00 am</option>
                <option value="10">10:00 am</option>
                <option value="11">11:00 am</option>
                <option value="12">12:00 pm</option>
                <option value="1">1:00 pm</option>
                <option value="2">2:00 pm</option>
                <option value="3">3:00 pm</option>
                <option value="4">4:00 pm</option>
                <option value="5">5:00 pm</option>

            </select>

            <label htmlFor="propertyId">Property:</label>
            <select name="propertyId" id="propertyId">
                { properties.filter((item) => item.status === 'FOR SALE').map((item) => 
                <option>{item.address}</option>
                )}

            </select>

            <label htmlFor="buyerId">Buyer:</label>
            <select name="buyerId" id="buyerId">
                { buyers.map((item) => 
                <option>{item.firstName} {item.surname}</option>
                )}

            </select>

            <button>Add booking</button>


            </div>

        </form>
    )
}