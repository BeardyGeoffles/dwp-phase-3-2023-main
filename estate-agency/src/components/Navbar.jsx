import { Link } from "react-router-dom"
import image from "../images/logo.png"
import { BsCalendar, BsFillHouseFill, BsPersonFill, BsCash} from "react-icons/bs"


export default function Navbar() {
    return (
        
        <div className="navbar">
            <img src={image} width="300px" alt="logo" />
            <h1>East Properties</h1>
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