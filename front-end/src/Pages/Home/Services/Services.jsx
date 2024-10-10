import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
        
    },[])
    return (
      <div className="mt-36">
        <div className="text-center  my-6">
          <h2 className="font-bold text-error">Services</h2>
          <h1 className="text-4xl font-bold">Our Service Area</h1>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which don't look even slightly
            believable.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    );
};

export default Services;