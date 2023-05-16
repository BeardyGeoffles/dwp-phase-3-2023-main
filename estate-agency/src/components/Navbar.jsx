import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        
        <div className="navbar">

            <h1>Estate Agency</h1>


        <ul>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/property">Properties</Link></li>
            <li><Link to="/buyer">Buyers</Link></li>
            <li><Link to="/seller">Sellers</Link></li>
            <li><Link to="/booking">Bookings</Link></li>


        </ul>

        </div>

    )
}