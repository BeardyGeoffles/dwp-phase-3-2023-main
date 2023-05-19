import BookingList from "../components/booking/BookingList";
import BookingForm from "../components/booking/BookingForm";

export default function BookingPage() {
    return (
        <div className="BookingPage">
            
            <BookingForm />
            
            <BookingList />
        </div>
    );
}