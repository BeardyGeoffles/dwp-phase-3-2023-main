import { useEffect, useState } from 'react';

export default function BookingList() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/booking")
        .then((response) => response.json())
        .then((data) => setBookings(data))
    }, [])

    return (

        <div className="booking-list">

                {bookings.map((item) => (
                    <div className="booking-display-short">
                        <div>ID: {item.buyerId} Time: {item.time}</div>
                    </div>
                ))}


        </div>

    )
}