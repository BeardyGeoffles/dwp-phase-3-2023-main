import { useEffect, useState } from 'react';
import styles from "./booking.css"
import {BsCalendarDate,BsHouseDoor} from "react-icons/bs";
import {BiTime,BiUser} from "react-icons/bi";
import { Link } from 'react-router-dom';

export default function BookingList() {

    const [bookings, setBookings] = useState([]);
    const [properties, setProperties] = useState([]);
    const [buyers, setBuyers] = useState([]);

    const [bookingUpdated, setBookingUpdated] = useState([false]);

    useEffect(() => {
        fetch("http://localhost:8080/booking")
        .then((response) => response.json())
        .then((data) => setBookings(data))
        setBookingUpdated(false);
    }, [bookingUpdated])

    useEffect(() => {
        fetch("http://localhost:8080/property")
        .then((response) => response.json())
        .then((data) => setProperties(data))
    }, [])

    useEffect(() => {
        fetch("http://localhost:8080/buyer")
        .then((response) => response.json())
        .then((data) => setBuyers(data))
    }, [])

    function getAddress(propID)
    {
        let result = properties.find(prop => prop.id === propID)
        if (result){
            return result.address + ", " + result.postcode
        }

    }

    function getBuyerName(buyId)
    {
        let result = buyers.find(buyer => buyer.id === buyId)
        if (result){
            return result.firstName + " " + result.surname;
        }
    }

    function bookingDelete(item)
    {
        if(window.confirm(`Are you sure you want to delete booking on: ${new Date(item.time).toLocaleString('en-GB')}?`) === true){
            fetch("http://localhost:8080/booking/" + item.id, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(item)
            })
            setBookingUpdated(true); 
           }
    }

    return (

        <div className="booking-list">

                <h2>List of bookings ({bookings.length})</h2>

                {bookings.map((item) => (
                    <div className="booking-display-short">
                        <div><BsCalendarDate/> {new Date(item.time).toLocaleDateString('en-GB')} - <BiTime /> {new Date(item.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                        <div><BsHouseDoor/> {getAddress(item.propertyId)}</div>
                        <div><BiUser /> {getBuyerName(item.buyerId)}</div>
                        <div className='property-buttons'>           
                        <Link to={`/booking/${item.id}/edit`} state={item} className='edit-button'>Edit</Link>
                        <button className='delete-button' onClick={() => bookingDelete(item)}>Delete</button>
                        </div>
                    </div>
                ))}


        </div>

    )
}