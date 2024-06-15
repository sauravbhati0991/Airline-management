import { useState } from "react";
import axios from "axios";
import "./MyFlights.css";
import { VscArrowRight } from "react-icons/vsc";

function Myflights() {
  const [flightData, setFlightData] = useState([]);
  const allBookings = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5173/myflights");
      setFlightData(res.data.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  allBookings();
  return (
    <div className="main">
      <div className="Myflight_container">
        <p>Your Booked Flights:-{flightData.length}</p>

        {flightData.map((v, i) => (
          <div key={i} className="details">
            <hr />
            <div className="main-details">
              <div>
                <p>From: {v.departure_city}</p>
                <p>{v.fromAirport}</p>
                <p>({v.fromAirportCode})</p>
              </div>
              <VscArrowRight />
              <div>
                <p>To: {v.arrival_city}</p>
                <p>{v.toAirport}</p>
                <p>({v.toAirportCode})</p>
              </div>
            </div>
            <p>Your Booking Dteails: </p>
            <p>(Ticket ID: {v._id})</p>
            <div className="flight-details">
              <div>
                <p>Date: {v.date}</p>
                <p>Seat No.: {v.seat_num}</p>
              </div>
              <hr />
              <div>
                <p>Ticket Class: {v.className}</p>
                <p>Price: {v.ticket_price}</p>
              </div>
              <hr />
              <div>
                <p>Flight Number: {v.flight_number}</p>
                <p>Flight Average Review: {v.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Myflights;
