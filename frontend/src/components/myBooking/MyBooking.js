import React, { useState } from "react";
import axios from "axios";
import "./MyBooking.css";

export const MyBooking = ({ book, state }) => {
  const [adults, setAdults] = useState();
  const [results, setresults] = useState();
  const [myBook, setMyBook] = useState();
  const click = () => {
    console.log(state);

    axios
      .get("http://localhost:5000/flightBooking/allBooking/", {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then((result) => {
        setMyBook(result.data);
        console.log("myBook", myBook);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleted = (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:5000/flightBooking/${e}`, {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then((result) => {
        console.log("success delete the booking");
        setresults("Your Book Was Deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateAduluts = (z) => {
    setAdults(z.target.value);
  };
  const updated = (e) => {
    console.log(e);
    axios
      .put(
        `http://localhost:5000/flightBooking/${e}`,
        { adults: adults },
        { headers: { Authorization: `Bearer ${state.token}` } }
      )
      .then((result) => {
        setresults("Number Of Adults Was Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("myBook", myBook);

  return (
    <div>
      <button className="btn2" onClick={click}>
        MyBooking
      </button>
      {myBook &&
        myBook.flights.map((element) => {
          return (
            <div>
              <div className="card">
                <div className="image"></div>
                <div className="text">
                  <span className="date">Your Book</span><br/><br/>
                  <h2 className="date">Date:{element.flightId.date}</h2><br/>

                  <h2>Destination: {element.flightId.destination}</h2><br/>
                  <p>Enter The Number Of New Adults</p><br/>
                  <input type="number" onChange={updateAduluts} />
                  <br></br>
                  {results && <p>{results}</p>}
                  <button className="btn1" onClick={() => updated(element._id)}>
                    Update
                  </button>
                  <button className="btn1" onClick={() => deleted(element._id)}>
                    Delete
                  </button>
                </div>
                <div className="status">
                  <div className="stat">
                    <div className="value">First Name</div>
                    <div className="type">{element.userId.firstName}</div>
                  </div>
                  <div className="stat">
                    <div className="value">TotalPrice</div>
                    <div class="type">{element.flightId.price*element.adults}$</div>
                  </div>
                  <div className="stat">
                    <div className="value">Adults</div>
                    <div class="type">{element.adults}</div>
                  </div>
                </div>
              </div>
              <br/><br/><br/><br/>
            </div>
          );
        })}
    </div>
  );
};
