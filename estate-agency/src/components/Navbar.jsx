import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import { BsFillHouseFill} from "react-icons/bs"
import east from "../images/East.png"

export default function Navbar() {
    return (
        
        <div className="navbar">
            <img src={logo} width="350px" alt="logo" id="logo" />
            <img src={east} width="300px" alt="east" id="east" />
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/property"><BsFillHouseFill /> Properties</Link></li>
            <li><Link to="/buyer">Buyers</Link></li>
            <li><Link to="/seller">Sellers</Link></li>
            <li><Link to="/booking">Bookings</Link></li>
        </ul>

        </div>

    )
}