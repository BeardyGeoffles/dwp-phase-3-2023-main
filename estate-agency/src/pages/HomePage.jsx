import city from "../images/city.jpeg";
import Footer from "../components/homepage/Footer";
import Testimonials from "../components/homepage/testimonials";
// import "../components/homepage/home.css"

export default function HomePage() {

    return (
<div className="HomePage">
    <div className="homeBox">
            <img src={city} width="100%" alt="city"/>
        <div className="top-left">
            <h1>EAST Property: Property experts for over 25 years</h1>
        </div>
    </div>
    <Testimonials />
    <Footer />
</div>
    );
}



