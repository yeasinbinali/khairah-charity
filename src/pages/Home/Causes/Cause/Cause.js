import React from "react";
import { Link } from "react-router-dom";

const Cause = ({ cause }) => {
  const { _id, name, img, amount } = cause;
  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src={img}
          alt=""
        />
      </figure>
      <div className="card-body">
        <p className='text-2xl font-bold'>{name}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary bg-green-700 border-0"><Link to={`/donationForm/${_id}`}>Donate: ${amount}</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Cause;
