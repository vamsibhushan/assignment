import companylogo from "/src/assets/logo.svg"
import dropIcon from "/src/assets/drop.svg"
import bellIcon from "/src/assets/bell.svg"
import "./style.css"
const Navbar=()=>{
    return(

        <div className="navbar">
          <img className="company-icon logo " alt="" src={companylogo} />
          <ul className="options">
            <li className="option">
              <p className="option-text">Filters</p> 
              <img className="drop-icon logo" alt="" src={dropIcon} />
            </li>
            <li className="option">
              <p className="option-text">About Us</p> 

            </li>
            <li className="option">
              <p className="option-text">Blog</p> 

            </li>
          </ul>
          <div className="bell-icon-container">
            <img className="bell-icon logo" alt="" src={bellIcon} />
          </div>
        
        </div>
        
    )

}

export default Navbar 


