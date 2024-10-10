import React from "react";

const Facility = ({ facil }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{facil.name}</h2>
        <p>{facil.details}</p>
      </div>
    </div>
  );
};

export default Facility;
