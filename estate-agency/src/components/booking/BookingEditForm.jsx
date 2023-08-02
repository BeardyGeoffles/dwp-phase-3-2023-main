
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

    const [properties, setProperties] = useState([]);
    const [buyers, setBuyers] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [id, setId] = useState(booking.id);

    
    const handleSubmit = (event) => {
        event.preventDefault();

        let time = new Date(bookingDate)
        time.setHours(bookingTime)

        if (bookings.filter(bk => bk.id != booking.id && bk.time === time.toJSON() && bk.propertyId === propertyId).length > 0)
        {
            alert('Error: Booking already exists!');
            return;
        }


        const amendBooking = {id, propertyId, time, buyerId};

        fetch('http://localhost:8080/editBooking' , {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(amendBooking)
        }).then(navigate('/booking'))


    }
    

    useEffect(() => {
        fetch("http://localhost:8080/getAllProperties")
        .then((response) => response.json())
        .then((data) => setProperties(data))        
    
    }, [])

    useEffect(()=> {
        fetch("http://localhost:8080/getAllBuyers")
        .then((response) => response.json())
        .then((data) => setBuyers(data))  

    }, [] )

    useEffect(()=> {
        fetch("http://localhost:8080/getAllBookings")
        .then((response) => response.json())
        .then((data) => setBookings(data))  

    }, [] )

    return (
        <form className="booking-form" onSubmit={handleSubmit}>

            <h2>Edit booking</h2>

            <div className="formContainerBook">
            <div>
            <label htmlFor="propertyId">Property:</label>
            <select required value={propertyId} name="propertyId" id="propertyId" 
            onChange={(e) => setPropertyId(parseInt(e.target.value))}>
                <option value="0" selected disabled>Please select</option>
                { properties.filter((item) => item.status === 'FOR SALE').map((item) => 
                <option value={item.id}>{item.address}</option>
                )}
            </select>
            </div>
            <div>
            <label htmlFor="bookingdate">Date:</label>
            <input required value={bookingDate} min={new Date().toISOString().split('T')[0]} type="date" name="bookingdate" id="bookingdate"
            onChange={(e) => setBookingDate(e.target.value)}/>
            </div>
            <div>
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
            </div>
            <div>

            <label htmlFor="buyerId">Buyer:</label>
            <select required value={buyerId} name="buyerId" id="buyerId"
            onChange={(e) => setBuyerId(parseInt(e.target.value))}>
                <option value={0} selected disabled>Please select</option>
                { buyers.sort((a,b) => (a.surname < b.surname ? -1 : 1)).map((item) => 
                <option value={item.id}>{item.firstName} {item.surname}</option>
                )}

            </select>
            </div>
            <button>Save Changes</button>
            <button onClick={() => {navigate('/booking')}}>Cancel</button>


            </div>

        </form>
    )
}