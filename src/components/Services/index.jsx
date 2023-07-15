import { Link } from "react-router-dom"
import womenImg from "/src/assets/Woman making a video call.png"
import plusWhiteImg from "/src/assets/pluswhite.svg"
import plusBlackImg from "/src/assets/plusblack.svg"

import "/src/components/Services/style.css"

const Services=()=>{
    return(
       <div className="content">
            <h3 className="heading">Services</h3>
            <div className="buttons">
                <p className="button selected">1:1 Call</p>
                <p className="button">Text Query</p>
                <p className="button">Webinar</p>
                <p className="button"><img className="plus-sign" src={plusBlackImg}/> Add service</p>
            </div>
            <div className="image-container">
                <div>
                    <img className="women-img" src={womenImg}/>
                    <p className="image-text">Create a 1:1 Service</p>

                </div>
                
                <Link className="link" to="/services2" ><p className="add-btn"><img className="plus-sign" src={plusWhiteImg}/> Add </p></Link>
            </div>
       </div>
    )
}
export default Services