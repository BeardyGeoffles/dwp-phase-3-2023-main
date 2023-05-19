
import { useEffect, useState} from "react"
import { BsCalendarPlus} from "react-icons/bs";
import { useNavigate, useLocation } from "react-router";


export default function BookingEditForm() {

    const booking= useLocation().state;
    const navigate = useNavigate();

    const [propertyId, setPropertyId] = useState(booking.propertyId);
    const [bookingDate, setBookingDate] = useState(new Date(booking.time).toISOString().split('T')[0]);
    const [bookingTime, setBookingTime] = useState(new Date(booking.time).getHours());
    const [buyerId, setBuyerId] = useState(booking.buyerId);

    console.log(bookingDate)

    const [properties, setProperties] = useState([]);
    const [buyers, setBuyers] = useState([]);
    const [bookings, setBookings] = useState([]);

    
    const handleSubmit = (event) => {
        event.preventDefault();

        let time = new Date(bookingDate)
        time.setHours(bookingTime)

        if (bookings.filter(bk => bk.id != booking.id && bk.time === time.toJSON() && bk.propertyId === propertyId).length > 0)
        {
            alert('Error: Booking already exists!');
            return;
        }


        const newbooking = {propertyId, time, buyerId};

        fetch('http://localhost:8080/booking/' + booking.id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newbooking)
        }).then(navigate('/booking'))


    }
    

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

    useEffect(()=> {
        fetch("http://localhost:8080/booking")
        .then((response) => response.json())
        .then((data) => setBookings(data))  

    }, [] )

    return (
        <form className="booking-form" onSubmit={handleSubmit}>

            <h2>Edit booking</h2>

            <div className="formContainerBook">

            <label htmlFor="propertyId">Property:</label>
            <select required value={propertyId} name="propertyId" id="propertyId" 
            onChange={(e) => setPropertyId(parseInt(e.target.value))}>
                <option value="0" selected disabled>Please select</option>
                { properties.filter((item) => item.status === 'FOR SALE').map((item) => 
                <option value={item.id}>{item.address}</option>
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
                <option value="13">1:00 pm</option>
                <option value="14">2:00 pm</option>
                <option value="15">3:00 pm</option>
                <option value="16">4:00 pm</option>
                <option value="17">5:00 pm</option>

            </select>



            <label htmlFor="buyerId">Buyer:</label>
            <select required value={buyerId} name="buyerId" id="buyerId"
            onChange={(e) => setBuyerId(parseInt(e.target.value))}>
                <option value={0} selected disabled>Please select</option>
                { buyers.map((item) => 
                <option value={item.id}>{item.firstName} {item.surname}</option>
                )}

            </select>

            <button>Save Changes</button>
            <button onClick={() => {navigate('/booking')}}>Cancel</button>


            </div>

        </form>
    )
}