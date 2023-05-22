import {BsTwitter,BsInstagram,BsFacebook,BsYoutube} from "react-icons/bs"
import {BiCopyright, BiMailSend} from "react-icons/bi"
import {AiOutlinePhone} from "react-icons/ai"
import styles from "./home.css"


export default function Footer() {
    return (
        
    <footer className="footer">
     <div className="formContainer">
        <div className="socials">
            <p>Follow us on:<br></br> </p><h1><BsTwitter />  <BsInstagram />  <BsFacebook />  <BsYoutube /></h1>
        </div>
        <div className="">
            <p>Terms and Conditions</p>
        </div>
        <div className="">
            <p>Privacy Policy</p>
        </div>
        <div className="">
            <p>Complaints Procedure</p>
        </div>
        <div className="">
            <p><AiOutlinePhone/>08009 90 90 90<br></br><BiMailSend/> east.enquiries@eastproperty.com</p>
        </div>

        <div className="FootAddress">
        <p>East Chambers<br></br>13 Property Row<br></br> London<br></br> NW1 1WE</p>
       
        </div>
</div>
<h4><BiCopyright/> EAST Property Services Ltd 2023 - Radio GAGO - All Rights Reserved - IDST - Hands Off COBOL'D TOGETHER!!<br>
</br>East Property Services are forward thinking estate agents operating nationwide. If you are looking for property to let, buy or sell then look no further.<br>
</br><br></br><br></br><br>
</br></h4>
</footer>

    )
}