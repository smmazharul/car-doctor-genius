import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const Service = ({service}) => {
    return (
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={service.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-start">
          <h2 className="card-title">{service.title}</h2>
          <p>{service.description.slice(0, 50)}.....</p>

          <div className="card-actions flex justify-between items-center w-full">
            <p className='text-error font-bold'>price: ${service.price}</p>
            <Link to={`/checkout/${service._id}`}><FaArrowRight className='text-error font-bold'/></Link>
          </div>
        </div>
      </div>
    );
};

export default Service;