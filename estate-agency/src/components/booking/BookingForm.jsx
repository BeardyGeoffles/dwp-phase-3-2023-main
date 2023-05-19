
import { useEffect, useState} from "react"

export default function BookingForm() {

    const [propertyId, setPropertyId] = useState(0);
    const [bookingDate, setBookingDate] = useState('');
    const [bookingTime, setBookingTime] = useState('');
    const [buyerId, setBuyerId] = useState(0);



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

            <label htmlFor="propertyId">Property:</label>
            <select required value={propertyId} name="propertyId" id="propertyId" 
            onChange={(e) => setPropertyId(e.target.value)}>
                <option value="0" disabled>Please select</option>
                { properties.filter((item) => item.status === 'FOR SALE').map((item) => 
                <option>{item.address}</option>
                )}

            </select>

            <label htmlFor="bookingdate">Date:</label>
            <input required value={bookingDate} type="date" name="bookingdate" id="bookingdate"
            onChange={(e) => setBookingDate(e.target.value)}/>

            <label htmlFor="bookingtime">Time: </label>
            <select required value={bookingTime} name="bookingtime" id="bookingtime"
            onChange={(e) => setBookingTime(e.target.value)}>
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



            <label htmlFor="buyerId">Buyer:</label>
            <select required value={buyerId} name="buyerId" id="buyerId"
            onChange={(e) => setBuyerId(e.target.value)}>
                <option value={0} disabled>Please select</option>
                { buyers.map((item) => 
                <option value={item.id}>{item.firstName} {item.surname}</option>
                )}

            </select>

            <button>Add booking</button>


            </div>

        </form>
    )
}