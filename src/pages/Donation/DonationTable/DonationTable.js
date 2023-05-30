import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DonationTable = ({ give, handleDelete, handleStatusUpdated }) => {
  const { giver, phone, email, amount, serviceId, _id, status, paid } = give;
  const [causes, setCauses] = useState([]);

  useEffect(() => {
    fetch(`https://khairah-charity-server.vercel.app/causes/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setCauses(data));
  }, [serviceId]);

  return (
    <>
      {/* row 1 */}
      <tr>
        <th>
          {status ? (
            ""
          ) : (
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-ghost btn-xs"
            >
              <Link>X</Link>
            </button>
          )}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={causes.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{causes.name}</div>
              <div className="text-sm opacity-50">{amount}</div>
            </div>
          </div>
        </td>
        <td>
          {giver}
          <br />
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>
        <td>{phone}</td>
        <th>
          <button
            onClick={() => handleStatusUpdated(_id)}
            className="btn btn-ghost btn-xs"
          >
            {status ? status : "Pending"}
          </button>
        </th>
        <th>
          {status && !paid && (
            <button className="btn btn-success btn-xs">
              <Link to={`/donation/${_id}`}>Pay</Link>
            </button>
          )}
          {status && paid && <span className="text-green-600">Paid</span>}
        </th>
      </tr>
    </>
  );
};

export default DonationTable;
