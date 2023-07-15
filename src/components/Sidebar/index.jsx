import profileImg from "/src/assets/profile.svg"
import homeImg from "/src/assets/home.svg"
import phoneImg from "/src/assets/phone.svg"
import messageImg from "/src/assets/message.svg"
import calenderImg from "/src/assets/calender.svg"
import servicesImg from "/src/assets/services.svg"
import inviteImg from "/src/assets/invite.svg"
import rewardsImg from "/src/assets/rewards.svg"
import logoutImg from "/src/assets/logout.svg"
import profileImage from "/src/assets/profile-image.png"

import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import "./style.css"
const Sidebar=()=>{

    const [select,setSelect]=useState("schedules")

    return(
        <div className="sidebar">
            <div className="horizontal-head">
                <img className="profile-img" src={profileImage}/>
                <h2 className="profile-name">Vamsi Bhushan</h2>
            </div>
            <ul className="sidebar-options">
                <li className={select === "home" ? "horizontal select" : "horizontal"} onClick={()=>setSelect("home")}>
                    <img className="option-img" src={homeImg}/>
                    <h2>Home</h2>
                </li>
                <li className={select === "bookings" ? "horizontal select" : "horizontal"} onClick={()=>setSelect("bookings")}>
                    <img className="option-img"  src={phoneImg}/>
                    <h2>Bookings</h2>
                </li>
                <li className={select === "queries" ? "horizontal select" : "horizontal"} onClick={()=>setSelect("queries")}>
                    <img className="option-img"  src={messageImg}/>
                    <h2>Queries</h2>
                
                </li>
                <hr/>
                <Link className="link" to="/">
                <li className={select === "schedules" ? "horizontal select" : "horizontal"} onClick={()=>setSelect("schedules")}>
                    <img className="option-img" src={calenderImg}/>
                    <h2 >Schedules</h2>
                </li>
                </Link>
                <Link className="link" to="/services">
                <li className={select === "services" ? "horizontal select" : "horizontal"} onClick={()=>setSelect("services")}>
                    <img className="option-img" src={servicesImg}/>
                    <h2 >Services</h2>
                </li>
                </Link>
                <hr/>
                <li className={select === "profile" ? "horizontal select" : "horizontal"} onClick={()=>setSelect("profile")}>
                    <img className="option-img" src={profileImg}/>
                    <h2>Profile</h2>
                </li><li className={select === "invite" ? "horizontal select" : "horizontal"} onClick={()=>setSelect("invite")}>
                    <img className="option-img" src={inviteImg}/>
                    <h2>Invite & Earn</h2>
                </li><li className={select === "reward" ? "horizontal select" : "horizontal"} onClick={()=>setSelect("reward")}>
                    <img className="option-img" src={rewardsImg}/>
                    <h2>Rewards</h2>
                </li>
                <li className={select === "logout" ? "horizontal select" : "horizontal"} onClick={()=>setSelect("logout")}>
                    <img className="option-img" src={logoutImg}/>
                    <h2>Logout</h2>
                </li>

            </ul>

        </div>
    )
}

export default Sidebar