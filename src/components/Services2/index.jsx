import womenImg from "/src/assets/Woman making a video call.png"
import plusWhiteImg from "/src/assets/pluswhite.svg"

import "./style.css"

const Services2=()=>{
    return(
       <div className="content">

            <div className="top">
                <h3 className="heading-a">Services</h3>
                <div className="connect-button">
                    <p className="button selected">Connect Payout</p>
                </div>
            </div> 

            <div className="mid">
                <div className="call-button">
                    <p className="button selected">1:1 Call</p>
                </div>
                <img className="women" src={womenImg}/>
            </div>
  
            <div className="form">
                
                    <label htmlFor="title">Title</label>
                    <input name="title" id="title" type="text" placeholder="Name of service"/>
                
                
                    <label htmlFor="duration">Duration</label>
                    <input name="duration" id="duration" type="text" placeholder="00:00" />


                    <label htmlFor="amount">Amount</label>
                    <div className="price-suggestions">
                        <input className="amount-input" name="amount" id="amount" type="text" placeholder="&#8377;"/>
                        <p className="price-text">Price Suggestions</p>
                    </div>
                    
            </div>    

                <div className="add-container">
                    <p className="add-btn1"><img className="plus-sign" src={plusWhiteImg}/> Add </p>
                </div>
                
        </div>
       
    )
}
export default Services2