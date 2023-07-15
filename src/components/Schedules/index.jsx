import calendarImg from "/src/assets/calendar.svg"

import "/src/components/Schedules/style.css"

const Schedules=()=>{
    return(
       <div className="content">
            <h3 className="heading-s">Schedules</h3>
            <h3 className="text" >Default</h3>
            <div className="middle">
                <div className="cards">
                    <div className="card">
                        <span className="checkbox" ></span>
                        <h4>Saturday</h4>
                        <p>Unavailable</p>
                    </div>
                    <div className="card">
                        <span className="checkbox" ></span>
                        <h4>Sunday</h4>
                        <p>Unavailable</p>
                    </div>
                    <div className="card">
                        <span className="checkbox" ></span>
                        <h4>Monday</h4>
                        <p>Unavailable</p>
                    </div>
                    <div className="card">
                        
                    <span className="checkbox" ></span>
                        <h4>Tuesday</h4>
                        <p>Unavailable</p>
                    </div>
                    <div className="card">
                        
                        <span className="checkbox" ></span>
                        <h4>Wednesday</h4>
                        <p>Unavailable</p>
                    </div>
                    <div className="card">
                        <span className="checkbox" ></span>
                        <h4>Thursday</h4>
                        <p>Unavailable</p>
                    </div>
                    <div className="card">
                        <span className="checkbox" ></span>
                        <h4>Friday</h4>
                        <p>Unavailable</p>
                    </div>
                
                </div>
                
                    <img className="calendar" src={calendarImg}/>
                
            </div>
       </div>
    )
}
export default Schedules

