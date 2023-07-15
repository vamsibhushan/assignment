import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Services from './components/Services'
import Services2 from './components/Services2'
import Schedules from './components/Schedules'
import './App.css'

function App() {

  return (
    <Router> 
    
      <div className='header'>
        <Navbar/>
      </div>
      
      <div className='page'>
          <Sidebar/>
          <Routes>
            <Route exact path="/services" element={<Services/>}/>
            <Route exact path="/services2" element={<Services2/>}/>
            <Route exact path="/" element={<Schedules/>}/>
          </Routes>
      </div>
 
      <div className='footer'>
        <Footer/>
      </div>

    </Router>
    
  )
}

export default App
