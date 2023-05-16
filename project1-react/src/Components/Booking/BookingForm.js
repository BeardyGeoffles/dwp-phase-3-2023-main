import React, {useRef} from "react";

const BookingForm = (props) => {
    const addHandler = props.addHandler;
    const buyers = props.buyers;

    const viewingDateRef = useRef();
    const timeslotRef = useRef();
    const buyerRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        let viewingDate = new Date(viewingDateRef.current.value);
        viewingDate.setHours(timeslotRef.current.value);
        addHandler(buyerRef.current.value, viewingDate);
    };

    return (
        <form>
            <div className="row">
                <div className="col-md-6 form-group">
                    <label htmlFor="viewingDate">Date</label>
                    <input type="date" id="viewingDate" className="form-control" ref={viewingDateRef}
                           defaultValue={(new Date()).toISOString().substring(0, 10)}
                           min={(new Date()).toISOString().substring(0, 10)}/>
                </div>
                <div className="col-md-6 form-group">
                    <label htmlFor="timeSlot">Time Slot</label>
                    <select className="form-select" id="timeSlot" ref={timeslotRef}>
                        <option value="8">08:00</option>
                        <option value="9">09:00</option>
                        <option value="10">10:00</option>
                        <option value="11">11:00</option>
                        <option value="12">12:00</option>
                        <option value="13">13:00</option>
                        <option value="14">14:00</option>
                        <option value="15">15:00</option>
                        <option value="16">16:00</option>
                        <option value="17">17:00</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="buyer">Buyer</label>
                    <select className="form-select" ref={buyerRef} placeholder={"Loading Buyers"}>
                        {buyers.map(buyer => (
                            <option key={buyer.id} value={buyer.id}>
                                REF:{buyer.id} {buyer.firstName} {buyer.surname} (Address: {buyer.address})
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="text-end">
                <button className="btn btn-primary" onClick={handleSubmit}>
                    <i className="bi bi-alarm-fill"/>&nbsp;Make Booking</button>
            </div>
        </form>
    );
};
export default BookingForm;