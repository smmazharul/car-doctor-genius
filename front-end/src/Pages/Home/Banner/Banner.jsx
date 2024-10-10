import React from 'react';

import slide1 from '../../../assets/images/banner/1.jpg'
import slide2 from '../../../assets/images/banner/2.jpg'
import slide3 from '../../../assets/images/banner/3.jpg'
import slide4 from '../../../assets/images/banner/4.jpg'
const Banner = () => {
    return (
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slide1} className="w-full h-[700px] rounded-lg" />
          <div className=" absolute bg-gradient-to-r from-[#151515] md:from-[#151515] w-full h-full rounded-lg"></div>
          <div className="absolute translate-y-1/2 transform left-12 ">
            <div className="lg:w-3/5 space-y-5">
              <h1 className="text-5xl font-bold text-white leading-tight">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="text-white ">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-5">
                <button className="btn btn-error">Discover More</button>
                <button className="btn btn-outline border-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute  right-5 bottom-0 flex -translate-y-1/2 transform gap-5">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slide2} className="w-full h-[700px] rounded-lg" />
          <div className=" absolute bg-gradient-to-r from-[#151515] md:from-[#151515] w-full h-full rounded-lg"></div>
          <div className="absolute translate-y-1/2 transform left-12 ">
            <div className="lg:w-3/5 space-y-5">
              <h1 className="text-5xl font-bold text-white lg:leading-tight">
                Expert
                <br />
                Trusted Mechanics,
                <br />
                Service
              </h1>
              <p className="text-white lg:w-3/4">
                Your car deserves the best care, and our team of certified
                mechanics is here to ensure just that. We take pride in offering
                top-notch service that is reliable and efficient
              </p>
              <div className="flex gap-5">
                <button className="btn btn-error">Discover More</button>
                <button className="btn btn-outline border-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute  right-5 bottom-0 flex -translate-y-1/2 transform gap-5">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slide3} className="w-full h-[700px] rounded-lg" />
          <div className=" absolute bg-gradient-to-r from-[#151515] md:from-[#151515] w-full h-full rounded-lg"></div>
          <div className="absolute translate-y-1/2 transform left-12 ">
            <div className="lg:w-3/5 space-y-5">
              <h1 className="text-5xl font-bold text-white leading-tight">
                Quick <br /> Convenient <br /> Reliable
              </h1>
              <p className="text-white lg:w-3/4">
                We understand your time is valuable. That is why we ensure fast
                and convenient car servicing without compromising on quality.
                Get back on the road in no time!
              </p>
              <div className="flex gap-5">
                <button className="btn btn-error">Discover More</button>
                <button className="btn btn-outline border-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute  right-5 bottom-0 flex -translate-y-1/2 transform gap-5">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slide4} className="w-full h-[700px] rounded-lg" />
          <div className=" absolute bg-gradient-to-r from-[#151515] md:from-[#151515] w-full h-full rounded-lg"></div>
          <div className="absolute translate-y-1/2 transform left-12 ">
            <div className="lg:w-3/5 space-y-5">
              <h1 className="text-5xl font-bold text-white leading-tight">
                Customer <br /> Satisfaction <br /> Guaranteed
              </h1>
              <p className="text-white lg:w-3/4">
                Our commitment to excellence extends beyond the garage. With
                every service, we strive to exceed your expectations and ensure
                your complete satisfaction.
              </p>
              <div className="space-x-5">
                <button className="btn btn-error">Discover More</button>
                <button className="btn btn-outline border-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute  right-5 bottom-0 flex -translate-y-1/2 transform gap-5">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    );
};

export default Banner;