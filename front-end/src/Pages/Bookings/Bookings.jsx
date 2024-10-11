import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Booking from "./Booking";
import { toast } from "react-toastify";
import axios from "axios";
const Bookings = () => {
  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);

  // const url = `http://localhost:5000/bookings?email=${user.email}`;
     const url = `http://localhost:5000/bookings?email=${user?.email}`;
     useEffect(() => {
       axios.get(url, { withCredentials: true }).then((res) => {
         setBookings(res.data);
       });
       // fetch(url)
       //     .then(res => res.json())
       //     .then(data => setBookings(data))
     }, [url]);

  const handleDeleteBooking = (id) => {
    const proceed = confirm("Are you sure you want to delete ?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
              toast.success("Delete Successfully");
              const remainingBookings = bookings.filter( (booking) => booking._id !== id);
              setBookings(remainingBookings);
          }
          
        })
        .catch((error) => console.error("Error:", error));
    }
    };
    
    const handleConfirmBooking = id => {
         fetch(`http://localhost:5000/bookings/${id}`, {
             method: "PATCH",
             headers: {
                 'content-type':'application/json'
             },
             body:JSON.stringify({status:'confirm'})
         })
            .then(res => res.json())
             .then(data => {
                 if (data.modifiedCount > 0) {
                     const remaining = bookings.filter(booking => booking._id !== id)
                     const updated = bookings.find(booking => booking._id === id)
                     updated.status = 'confirm'
                     const newBooking = [updated, ...remaining]
                     setBookings(newBooking)
                 } 
        })
    }

  return (
    <div>
      <h2>My Bookings {bookings.length} </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <Booking
                key={booking._id}
                booking={booking}
                handleDeleteBooking={handleDeleteBooking}
                handleConfirmBooking={handleConfirmBooking}
              ></Booking>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
