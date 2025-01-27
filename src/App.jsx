import './App.css'
import About from './Components/About/About'
import Amenities from './Components/Amenities/Amenities'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Rooms from './Components/Room/Room'
import Services from './Components/Services/Services'
import Testimonial from './Components/Testimonials/Testimonial'
import RoomBooking from './Components/Booking/Booking'
import RoomJuniorSuite from './Components/Juniorsuitebook/Juniorsuitebook'
import RoomTwinroom from './Components/Twinroom/Twinroom'
import RoomQuadroom from './Components/Quadroom/Quadroom'
import RoomDeluxeroom from './Components/Deluxeroom/Deluxeroom'
import RoomExclusiveroom from './Components/Exclusiveroom/Exclusiveroom'
import RoomPersonalroom from './Components/Personalroom/Personalroom'
import SwimmingPool from './Components/Swimmingpool/Swimmingpool'
import Gymsport from './Components/Gymsport/Gymsport'
import RestroCafe from './Components/RestroCafe/RestroCafe'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <About />
            <Services />
            <Rooms />
            <Amenities />
            <Testimonial />
            <Footer />
          </>
        } />
        <Route path="/booking" element={<RoomBooking />} />
        <Route path="/juniorsuitebook" element={<RoomJuniorSuite />} />
        <Route path="/Twinroom" element={<RoomTwinroom />} />
        <Route path="/Quadroom" element={<RoomQuadroom />} />
        <Route path="/Deluxeroom" element={<RoomDeluxeroom />} />
        <Route path="/Exclusiveroom" element={<RoomExclusiveroom />} />
        <Route path="/Personalroom" element={<RoomPersonalroom />} />
        <Route path="/Swimmingpool" element={<SwimmingPool />} />
        <Route path="/Gymsport" element={<Gymsport />} />
        <Route path="/RestroCafe" element={<RestroCafe />} />
      </Routes>
    </Router>
  );
}


export default App