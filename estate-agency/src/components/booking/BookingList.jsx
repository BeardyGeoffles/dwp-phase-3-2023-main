import { useEffect, useState } from 'react';
import styles from "./booking.css"
import {BsCalendarDate } from "react-icons/bs";
import {BiTime } from "react-icons/bi";

export default function BookingList() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/booking")
        .then((response) => response.json())
        .then((data) => setBookings(data))
    }, [])

    return (

        <div className="booking-list">

                <h2>List of bookings ({bookings.length})</h2>

                {bookings.map((item) => (
                    <div className="booking-display-short">
                        <div>ID: {item.id} <BsCalendarDate/> {new Date(item.time).toLocaleDateString('en-GB')} - <BiTime /> {new Date(item.time).toLocaleTimeString()}</div>
                    </div>
                ))}


        </div>

    )
}