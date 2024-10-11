import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Booking from './Booking';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    
    const [bookings, setBookings] = useState([])
    

    // const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(() => {

      
           const url = `http://localhost:5000/bookings?email=${user?.email}`;
           fetch(url)
             .then((res) => res.json())
             .then((data) => setBookings(data));
         
     
    }, [])

 
    return (
      <div>
        <h2>My Bookings {bookings.length} </h2>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                        {
                            bookings.map(booking=><Booking key={booking._id} booking={booking}></Booking>)
              }
          
            
            </tbody>
         
          </table>
        </div>
      </div>
    );
};

export default Bookings;