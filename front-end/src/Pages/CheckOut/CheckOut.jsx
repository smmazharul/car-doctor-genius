import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Facility from "./Facility";
import checkoutImgae from "../../assets/images/checkout/checkout.png";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
const CheckOut = () => {
    const {user}=useContext(AuthContext)
  const service = useLoaderData();
    const { _id,title, description, facility, price,img } = service;
    

    const handleCheckOut = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const phone = form.phone.value;
        const date = form.date.value;

        const order = {
            customerName: name,
            email,
            date,
            phone,
            img,
            service:title,
            service_id: _id,
            price:price
        }
        console.log(order)
        
        fetch(`http://localhost:5000/bookings`, {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                toast.success("Checkout Successfully")
            }
        })


}

  return (
    <div>
      <div
        className=" h-[250px] bg-no-repeat bg-cover bg-center flex items-center justify-center rounded-t-lg relative "
        style={{
          backgroundImage: `url(${checkoutImgae})`,
        }}
      >
        <div className=" absolute bg-gradient-to-r from-[#151515] md:from-[#151515] w-full h-full rounded-t-lg"></div>
        <h1 className="text-5xl font-bold ml-10 text-white z-10">Check Out</h1>
      </div>

      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" ">
            <h1 className="text-5xl font-bold">
              {title} <span className="text-error font-bold">${price}</span>
            </h1>
            <p className="py-6 text-justify">{description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facility.map((facil, index) => (
                <Facility key={index} facil={facil}></Facility>
              ))}
            </div>
          </div>
                  <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-md">
                      <p className="text-center my-5 text-xl font-bold">Book: { title}</p>
            <form className="card-body" onSubmit={handleCheckOut}>
              <div className="form-control ">
                <input
                  type="text"
                  placeholder="Full Name"
                  defaultValue={user?.displayName}
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                                  defaultValue={user?.email}
                                  readOnly
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phone"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="flex ">
                <div className="form-control">
                  <input
                    type="date"
                    placeholder="Your Message"
                    name="date"
                    className="input input-bordered "
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Your Message"
                    name="price"
                    defaultValue={`$${price}`}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary btn-block">
                  Order Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
