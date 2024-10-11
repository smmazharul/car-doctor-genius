import React from 'react';

const Booking = ({ booking }) => {
    const { service, price, customerName, email,date } = booking;
    return (
      <tr>
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
          <span className='font-bold'>{customerName}</span>
          <br />
          <span className="">{email}</span>
        </td>
        <td className='font-bold'>{date}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default Booking;