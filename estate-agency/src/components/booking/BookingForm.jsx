
import { useEffect, useState} from "react"
import { BsCalendarPlus} from "react-icons/bs";
import {useLocation} from "react-router";


export default function BookingForm() {

    const propertyFilter = useLocation().state;


    const [propertyId, setPropertyId] = useState(propertyFilter ? (propertyFilter.id) :  '');
    const [bookingDate, setBookingDate] = useState('');
    const [bookingTime, setBookingTime] = useState(8);
    const [buyerId, setBuyerId] = useState('');



    const [properties, setProperties] = useState([]);
    const [buyers, setBuyers] = useState([]);
    const [bookings, setBookings] = useState([]);

    
    const handleSubmit = (event) => {
        event.preventDefault();


        let time = new Date(bookingDate)
        time.setHours(bookingTime)

        if (bookings.filter(booking => booking.time === time.toJSON() && booking.propertyId === propertyId).length > 0)
        {
            alert('Error: Booking already exists!');
            return;
        }

        const newbooking = {propertyId, time, buyerId};

        fetch('http://localhost:8080/createBooking', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newbooking)
        })

        setPropertyId('')
        setBookingDate('')
        setBookingTime('')
        setBuyerId('')

        window.location.reload();

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

            <h2>Add a new booking {propertyFilter &&
            <span> for {propertyFilter.address}, {propertyFilter.postcode}</span>
            }

            </h2>

            <div className="formContainerBook">
            <div>
            <label htmlFor="propertyId">Property:</label>
            <select required value={propertyFilter? propertyFilter.id : propertyId} name="propertyId" id="propertyId"
            onChange={(e) => setPropertyId(parseInt(e.target.value))}>
                <option value="" selected disabled>Please select</option>
                { propertyFilter ? <option value={propertyFilter.id}>{propertyFilter.address}</option> : properties.filter((item) => item.status === 'FOR SALE').map((item) =>
                <option value={item.id}>{item.address}</option>
                )}
            </select>
            </div>
            <div>
            <label htmlFor="bookingdate">Date:</label>
            <input required value={bookingDate} type="date" min={new Date().toISOString().split('T')[0]} name="bookingdate" id="bookingdate"
            onChange={(e) => setBookingDate(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="bookingtime">Time: </label>
            <select required value={bookingTime} name="bookingtime" id="bookingtime"
            onChange={(e) => setBookingTime(e.target.value)}>
                <option value="8" selected >8:00 am</option>
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
                <option value="" selected disabled>Please select</option>
                { buyers.sort((a,b) => (a.surname < b.surname ? -1 : 1)).map((item) => 
                <option value={item.id}>{item.firstName} {item.surname}</option>
                )}
            </select>
            </div>
            <button><BsCalendarPlus /> Add booking</button>


            </div>

        </form>
    )
}