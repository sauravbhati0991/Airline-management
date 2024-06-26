import { useState, useEffect } from "react";
import axios from "axios";
import { Data } from "./bookingdata";
import { showAlert } from "./alert";
import { VscArrowRight } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import "https://js.stripe.com/v3/";
function getRandomSeatNumber() {
  const numRows = 30;
  const seatLetters = "ABCDEF";
  const randomRow = Math.floor(Math.random() * numRows) + 1;
  const randomSeatIndex = Math.floor(Math.random() * seatLetters.length);
  const randomSeatLetter = seatLetters[randomSeatIndex];
  const seatNumber = `${randomRow}${randomSeatLetter}`;
  return seatNumber;
}
const Book = () => {
  const [bookingData, setBookingData] = useState({
    from: "",
    to: "",
    date: "",
    guests: "",
    ticketclassName: "",
  });
  const [table, setTable] = useState(false);
  const [flightData, setFlightData] = useState([]);
  const [fromAirport, setFromAirport] = useState("");
  const [toAirport, setToAirport] = useState("");
  const [user, setUser] = useState(null);
  const [stripe, setStripe] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const newBookingData = { ...bookingData };
    newBookingData[e.target.name] = e.target.value;
    setBookingData(newBookingData);
  };
  useEffect(() => {
    if (window.Stripe) {
      setStripe(
        window.Stripe(
          "pk_test_51PSXjWRuTwtRahx7SdHHQrXyvlesXEfNc9OQLVnGtePN9GEsOqHzmHFHLVTFiNfvuPUWK5RZcoTNSSyCHXcuE9vU00pwVfNbhD"
        )
      );
    }
  }, []);

  const bookFlight = async (
    e,
    bookingData,
    flightdetails,
    fromAirport,
    fromAirportCode,
    toAirport,
    toAirportCode
  ) => {
    e.preventDefault();
    e.target.innerText = "Booking...";
    e.target.disabled = true;
    const flightData = {
      seat_num: getRandomSeatNumber(),
      flight_number: flightdetails.flight_number.toString(),
      departure_city: flightdetails.departure_city.toString(),
      arrival_city: flightdetails.arrival_city.toString(),
      ticket_price: flightdetails.ticket_price.toString(),
      review: flightdetails.review.toString(),
      date: bookingData.date.toString(),
      className: bookingData.ticketclassName.toString(),
      fromAirport: fromAirport.toString(),
      fromAirportCode: fromAirportCode.toString(),
      toAirport: toAirport.toString(),
      toAirportCode: toAirportCode.toString(),
    };
    try {
      const response = await axios.get("/api/v1/user/", {
        withCredentials: true,
      });
      const res = await axios.patch(
        `/api/book/${response.data.data._id}`,
        flightData
      );
      const session = await axios(
        `/api/payment/checkout-session/${flightdetails._id}`
      );

      await stripe.redirectToCheckout({
        sessionId: session.data.session.id,
      });

      setTimeout(() => {
        e.target.innerText = "Book Again";
        e.target.disabled = false;
      }, 2000);
    } catch (err) {
      console.error(err);
      e.target.innerText = "Book Again";
      e.target.disabled = false;
    }
  };

  const handleBook = async (e) => {
    e.preventDefault();
    const { from, to, date, guests, ticketclassName } = bookingData;
    if (from === to) {
      showAlert("error", "Please select different city.");
    } else {
      const newDate = new Date(date).getDay();
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayName = daysOfWeek[newDate];

      if (from && to && dayName && guests && ticketclassName) {
        try {
          const res = await axios.get("/api/book", {
            params: {
              departure_city: from,
              arrival_city: to,
              arrival_date: dayName,
            },
          });
          if (res.data.data.data.length === 0) {
            showAlert(
              "error",
              `There are no flights available from ${from} to ${to} on this day.`
            );
          } else {
            document.querySelector(".btn-text").innerText = "Loading...";
            setTimeout(() => {
              setFlightData(res.data.data.data);
              setTable(true);
              setFromAirport(from);
              setToAirport(to);
              showAlert("success", "Available flights are loaded.");
              document.querySelector(".btn-text").innerText = "Search";
            }, 2000);
          }
        } catch (err) {
          console.log(err);
          navigate("/login");
        }
      } else {
        showAlert("error", "Select all options!");
      }
    }
  };

  return (
    <div className="book_container">
      <div className="form-container">
        <form className="form">
          <div className="form-group">
            <p>Destination From</p>
            <div className="flex-row">
              <select
                className="select arrival"
                name="from"
                required
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  Please Select
                </option>
                {Data.map((v, i) => {
                  return <option key={i}>{v.airport_city}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="form-group">
            <p>Destination To</p>
            <div className="flex-row">
              <select
                className="select destination"
                name="to"
                required
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  Please Select
                </option>
                {Data.map((v, i) => {
                  return <option key={i}>{v.airport_city}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="form-group">
            <p>Journey Date</p>
            <input
              type="date"
              className="input date"
              name="date"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <p>Guests</p>
            <div className="flex-row">
              <select
                className="select pass_num"
                name="guests"
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <p>ClassName</p>
            <div className="flex-row">
              <select
                className="select flight_class"
                name="ticketclassName"
                required
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>
          <button
            onClick={(e) => handleBook(e)}
            className="submit-btn"
            type="submit"
          >
            <span className="btn-text">Search</span>
          </button>
        </form>
      </div>
      {table ? (
        <div className="flight_container">
          <p className="flighthead">
            Your Available Flights : {flightData.length}
          </p>
          {flightData.map((v, i) => (
            <div key={i}>
              <hr />
              <div className="AllFligths">
                <div className="fromPort">
                  <p className="namair">From: {fromAirport}</p>
                  <p className="namair">
                    {
                      Data.find((data) => data.airport_city === fromAirport)
                        ?.airport_name
                    }
                  </p>
                  <p className="namair">
                    (
                    {
                      Data.find((data) => data.airport_city === fromAirport)
                        ?.airport_code
                    }
                    )
                  </p>
                </div>
                <VscArrowRight className="arrow" />
                <div className="toPort">
                  <p className="namair">To: {toAirport}</p>
                  <p className="namair">
                    {
                      Data.find((data) => data.airport_city === toAirport)
                        ?.airport_name
                    }
                  </p>
                  <p className="namair">
                    (
                    {
                      Data.find((data) => data.airport_city === toAirport)
                        ?.airport_code
                    }
                    )
                  </p>
                </div>
                <button
                  className="book-now"
                  onClick={(e) => {
                    const fromAirportName = Data.find(
                      (data) => data.airport_city === fromAirport
                    )?.airport_name;
                    const fromAirportCode = Data.find(
                      (data) => data.airport_city === fromAirport
                    )?.airport_code;
                    const toAirportName = Data.find(
                      (data) => data.airport_city === toAirport
                    )?.airport_name;
                    const toAirportCode = Data.find(
                      (data) => data.airport_city === toAirport
                    )?.airport_code;
                    bookFlight(
                      e,
                      bookingData,
                      flightData[i],
                      fromAirportName,
                      fromAirportCode,
                      toAirportName,
                      toAirportCode
                    );
                  }}
                >
                  Book Now
                </button>
                <div className="main-details">
                  <p>
                    Arrival Date: {bookingData.date} | Flight ID:
                    {flightData[i].flight_number} | Total Seats:
                    {flightData[i].seats} | Booking Price: {"\u20B9"}
                    {flightData[i].ticket_price} | Customer Reviews:
                    {flightData[i].review}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Book;
