import React from 'react';
import aboutImg1 from '../../../assets/images/about_us/person.jpg'
import aboutImg2 from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
      <div className="hero mt-32 ">
        <div className="hero-content flex-col lg:flex-row  ">
          <div className="lg:w-1/2 md:relative">
            <img src={aboutImg1} className="max-w-sm rounded-lg shadow-2xl " />
            <img
              src={aboutImg2}
              className="max-w-sm rounded-lg shadow-2xl md:absolute left-36 bottom-0 top-28 lg:w-1/2 border-8 border-white"
            />
          </div>

          <div className="lg:w-1/2">
            <h1 className="text-xl font-bold text-error">About Us</h1>
            <h1 className="text-5xl font-bold leading-tight w-[72%]">
              We are qualified  & of experience in this field
            </h1>
            <p className="py-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="py-2">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn btn-error text-white">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;