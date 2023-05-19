import jane from "./Jane.webp"
import will from "./William.jpg"


export default function Testimonials() {
    return (
        
     <div className="reviews">
        <div>
            <h6><br></br>“Jane ensured we had an amazing experience.<br></br>
                Excellent sales experience,<br></br>
                excellent customer service<br></br>
                and excellent after sales – extremely professional. “<br></br> </h6>
        </div>
        <div>
            <img src={jane} width="400px" alt="" />
        </div>

        <div>
            <img src={will} width="400px" alt="" />
        </div>
        <div>
            <h6><br></br>“Very pleased with the services offered by William at East. <br></br>
            He was extremely helpful during the sale of our property<br></br>
            and would definitely recommend.“<br></br></h6>
        </div>

</div>

    )
}