import { useState, useEffect } from "react";
import axios from "axios";
import "./MyFlights.css";
import { VscArrowRight } from "react-icons/vsc";
import { showAlert } from "./alert";

function Myflights() {
  const [user, setUser] = useState(null);

  const allBookings = async () => {
    try {
      const response = await axios.get("/api/v1/user/", {
        withCredentials: true,
      });
      setUser(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBooking = async (e, bookingId) => {
    try {
      e.target.innerText = "Canceling...";
      e.target.disabled = true;
      const updatedFlightsBooked = user?.flightsBooked.filter(
        (flight) => flight._id !== bookingId
      );
      console.log(user?._id);
      const res = await axios.patch(`/api/myflights/${user?._id}`, {
        flightsBooked: updatedFlightsBooked,
      });
      console.log(res);
      e.target.disabled = false;
      e.target.innerText = "Cancelled";
      showAlert("success", "Booking has been canclled.");
      setTimeout(() => {
        location.reload();
      }, 800);
    } catch (err) {
      console.log(err);
      e.target.disabled = false;
      e.target.innerText = "Cancel Booking";
    }
  };

  useEffect(() => {
    allBookings();
  }, []);

  return (
    <div className="main-myflight">
      <div className="Myflight_container">
        <p className="Myflight_container-p">
          Your Booked Flights: {user?.flightsBooked?.length}
        </p>
        <hr />
        <div className="Myflight-details">
          {user?.flightsBooked.map((v, i) => (
            <div key={i} className="details">
              <button
                onClick={(e) => {
                  const bookingId = v._id;
                  deleteBooking(e, bookingId);
                }}
                className="cancel-booking"
              >
                Cancel Booking
              </button>
              <p className="details-p">-: Your Booking Details :- </p>
              <p className="ticket-details">(Ticket ID: {v._id})</p>
              <div className="flight-details-2">
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
              <div className="flight-details">
                <div>
                  <p>Date: {v.date}</p>
                  <p>Seat No.: {v.seat_num}</p>
                </div>
                <div>
                  <p>Ticket Class: {v.className}</p>
                  <p>Price: {v.ticket_price}</p>
                </div>
                <div>
                  <p>Flight Number: {v.flight_number}</p>
                  <p>Flight Average Review: {v.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Myflights;
