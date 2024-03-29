import { Link } from "react-router-dom"
import { BsCalendar, BsFillHouseFill, BsPersonFill, BsCash} from "react-icons/bs"
import logo from "../../images/logo.png"
import east from "../../images/East.png"
import  "./Navbar.css"

export default function Navbar() {
    return (

            <div className="navbar">
                <img src={logo} width="350px" alt="logo" id="logo" />
                <img src={east} width="300px" alt="east" id="east" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/property"><BsFillHouseFill /> Properties</Link></li>
                <li><Link to="/buyer"><BsPersonFill /> <BsCash/> Buyers</Link></li>
                <li><Link to="/seller"><BsPersonFill /> Sellers</Link></li>
                <li><Link to="/booking"><BsCalendar /> Bookings</Link></li>
            </ul>
            </div>
    )
}