import React from 'react';


const Booking = ({ booking, handleConfirmBooking, handleDeleteBooking }) => {
  const { _id, service, price, customerName, email, date,status } = booking;

  return (
    <tr>
      <th>
        <button
          className="btn btn-sm btn-circle bg-black hover:bg-error"
          onClick={() => handleDeleteBooking(_id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={booking.img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
            <div className="text-sm text-error font-bold">${price}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="font-bold">{customerName}</span>
        <br />
        <span className="">{email}</span>
      </td>
      <td className="font-bold">{date}</td>
      <th>
       {status==='confirm'? <span className='font-bold text-green-600'>Confirmed</span> : <button onClick={()=>handleConfirmBooking(_id)} className="btn btn-ghost btn-xs">
          Please Confirm
        </button>}
      </th>
    </tr>
  );
};

export default Booking;