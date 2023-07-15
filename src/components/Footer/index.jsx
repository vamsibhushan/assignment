import linkdinIcon from "/src/assets/linkdin.svg"
import instaIcon from "/src/assets/insta.svg"
import fbIcon from "/src/assets/fb.svg"
import twitterIcon from "/src/assets/twitter.svg"
import copyIcon from "/src/assets/copy.svg"
import copytextIcon from "/src/assets/copytext.svg"

import "./style.css"
const Footer=()=>{
    return (
        <div className="footer">
            <div className="first">
                <div className="icons">
                    <img className="icon" src={linkdinIcon}/>
                    <img className="icon" src={instaIcon}/>
                    <img className="icon" src={twitterIcon}/>
                    <img className="icon" src={fbIcon}/>
                </div>
                <div className="copy-text-container">
                    <img className="copy-icon" src={copyIcon}/> 
                    <img className="copytext" src={copytextIcon}/>
                    
                </div>
            </div>
            
            <div className="second">
                <div>
                    <p className="udline">Contact us</p>
                    <p className="udline">Privacy policy</p>
                    <p className="udline">Terms of use</p>

                </div>
                
                <div>
                    <p>Help center</p>
                    <p>About us</p>
                    <p>FAQs</p>
                </div>
            </div>
                
        </div>
    )
    
}

export default Footer