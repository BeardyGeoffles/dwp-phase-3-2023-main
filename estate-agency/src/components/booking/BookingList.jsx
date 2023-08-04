import { useEffect, useState } from 'react';
import styles from "./booking.css"
import {BsCalendarDate,BsHouseDoor} from "react-icons/bs";
import {BiTime,BiUser} from "react-icons/bi";
import { Link } from 'react-router-dom';
import {useLocation} from "react-router";

export default function BookingList() {

    const propertyFilter = useLocation().state;

    const [bookings, setBookings] = useState([]);
    const [properties, setProperties] = useState([]);
    const [buyers, setBuyers] = useState([]);

    const [bookingUpdated, setBookingUpdated] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/getAllBookings")
        .then((response) => response.json())
        .then((data) => setBookings(data))
            .then(() => setBookingUpdated(false));
    }, [bookingUpdated])

    useEffect(() => {
        fetch("http://localhost:8080/getAllProperties")
        .then((response) => response.json())
        .then((data) => setProperties(data))
    }, [])

    useEffect(() => {
        fetch("http://localhost:8080/getAllBuyers")
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
            fetch("http://localhost:8080/deleteBooking", {
                method: 'DELETE',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(item)
            }).then(() => setBookingUpdated(true));
           }
    }

    function applyFilter(booking){

        let propertyMatch = true;
        if (propertyFilter) {
            propertyMatch = propertyFilter.id === booking.propertyId;
        }
        return propertyMatch;
    }

    return (

        <div className="booking-list">

                <h2>List of bookings ({bookings.filter(applyFilter).length}/{bookings.length})
                    {propertyFilter && <span> for <strong>{propertyFilter.address}, {propertyFilter.postcode}</strong></span>}
                </h2>

                {bookings.filter(applyFilter).sort((a,b) => (a.time < b.time ? -1 : 1)).map((item) => (
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