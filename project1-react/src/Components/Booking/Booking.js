import React, {useEffect, useState, useReducer} from "react";
import {useLocation} from "react-router-dom";

import BookingForm from "./BookingForm";
import "./Booking.css";

const Booking = () => {
    const property = useLocation().state;
    const [loadingBookings, setLoadingBookings] = useState(false);
    const [savingBookings, setSavingBookings] = useState(false);
    const [cancellingBookings, setCancellingBookings] = useState(false);

    const bookingListReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                return state.concat(action.payload);
            case "SET":
                return action.payload;
            case "REMOVE":
                return state.filter(booking => booking.id !== action.payload);
            default:
                return state;
        }
    };

    const [bookings, dispatch] = useReducer(bookingListReducer, []);
    const [buyers, setBuyers] = useState([]);
    const bookingAddHandler = (buyerId, bookingDate) => {
        if (bookings.filter(booking => booking.property.id === property.id && new Date(booking.time) === new Date(bookingDate)).length) {
            alert(`${bookingDate} is not available`);
            return;
        }

        setSavingBookings(true);

        let newBooking = {
            "buyer": {id: buyerId},
            "property": {id: property.id},
            "time": bookingDate
        };

        fetch("http://localhost:8080/booking", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newBooking)
            }
        ).then((response) => {
                if (!response.ok) {
                    alert("An error has occurred.  Unable to create the TODO item");
                    throw response.status;
                } else return response.json();
            }
        ).then(newBookingWithId => {
            dispatch({type: "ADD", payload: newBookingWithId});
            setSavingBookings(false);
        });
    };

    const bookingRemoveHandler = (bookingId) => {
        setCancellingBookings(true);
        fetch("http://localhost:8080/booking/" + bookingId, {
                method: "DELETE"
            }
        ).then((response) => {
                if (!response.ok) {
                    setCancellingBookings(false);
                    alert("An error has occurred.  Unable to create the TODO item");
                    throw response.status;
                } else {
                    setCancellingBookings(false);
                    return response.json();
                }
            }
        ).then(dispatch({type: "REMOVE", payload: bookingId}));
    };

    const iconClassForPropertyType = (propertyType) => {
        switch (propertyType) {
            case "DETACHED" :
                return "bi bi-house-fill";
            case "SEMI" :
                return "bi bi-houses-fill";
            case "APARTMENT" :
                return "fas fa-building";
            default:
                return;
        }
    };

    useEffect(() => {
        setLoadingBookings(true);

        fetch("http://localhost:8080/booking")
        // get the JSON content from the response
        .then((response) => {
            if (!response.ok) {
                alert("An error has occurred.  Unable to load Bookings data");
                throw response.status;
            } else return response.json();
        })
        .then(bookings => {
            dispatch({type: "SET", payload: bookings});
            setLoadingBookings(false);
        })
        .catch(error => {
            console.error(error);
            setLoadingBookings(false);
        });
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/buyer")
        // get the JSON content from the response
        .then((response) => {
            if (!response.ok) {
                alert("An error has occurred.  Unable to read the Buyers");
                throw response.status;
            } else return response.json();
        })
        .then(buyers => {
            setBuyers(buyers);
            console.log(JSON.stringify(buyers, null, 2));
        })
        .catch(error => console.error(error));
    }, []);


    return (
        <>
            <div className="pageHeader"><i className="bi bi-calendar"/>&nbsp;Manage Bookings</div>
            <div className="buyer-info alert alert-secondary" role="alert">
                <span className="fw-bold">
                    <i className="bi bi-geo-alt-fill"/>{property.address}, {property.postcode}
                </span>
                <i className={iconClassForPropertyType(property.type)}/><span>{property.type}</span>
                <i className="fas fa-bed"/><span>{property.bedroom}</span>
                <i className="fas fa-shower"/><span>{property.bathroom}</span>
                <i className="fas fa-tree"/><span>{Number(property.garden) === 1 ? "Yes" : "No"}</span>
                <span
                    className="float-end text-bg-secondary">&nbsp;£{property.price},&nbsp;Reference:&nbsp;{property.id}&nbsp;</span>
            </div>
            <BookingForm addHandler={bookingAddHandler} bookings={bookings} buyers={buyers}/>
            {
                loadingBookings || savingBookings || cancellingBookings ?
                    <div className="message alert alert-info" role="alert">
                        <span className="spinner-border" role="status"><i className="sr-only"/></span>
                        {loadingBookings ? "Loading Booking Information" : ""}
                        {savingBookings ? "Saving" : ""}
                        {cancellingBookings ? "Cancelling Booking" : ""}
                    </div>
                    : ""
            }
            <ul>
                {
                    bookings.filter(booking => booking.property.id === property.id).length === 0 && !loadingBookings ?
                        <li>
                            <div className="message alert alert-info" role="alert">
                                <i className="bi bi-info-circle"></i>&nbsp;This are no bookings for this property
                            </div>
                        </li>
                        :
                        bookings.filter(booking => booking.property.id === property.id)
                        .map(booking => (
                            <li key={booking.id}>
                                <div className="bookingBlock">
                                    <i className="bi bi-alarm-fill text-primary"/>
                                    {new Date(booking.time).toLocaleString()}
                                </div>
                                {booking.buyer.firstName}&nbsp;{booking.buyer.surname}

                                <button className="btn btn-sm btn-danger float-end"
                                        onClick={bookingRemoveHandler.bind(this, booking.id)}>
                                    <i className="bi bi-x-square"/>&nbsp;Cancel Booking
                                </button>
                            </li>
                        ))
                }
            </ul>
        </>);
};
export default Booking;