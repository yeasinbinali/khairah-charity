import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DonationTable = ({ give }) => {
  const { giver, phone, email, amount, serviceId } = give;
  const [causes, setCauses] = useState([]);
  
    useEffect(() => {
        fetch(`http://localhost:5000/causes/${serviceId}`)
        .then(res => res.json())
        .then(data => setCauses(data))
    }, [serviceId])

  return (
    <>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={causes.img}
                  alt="Avatar Tailwind CSS Component"
                />
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
          <span className="badge badge-ghost badge-sm">
            {email}
          </span>
        </td>
        <td>{phone}</td>
        <th>
          <button className="btn btn-ghost btn-xs"><Link>Pending</Link></button>
        </th>
      </tr>
    </>
  );
};

export default DonationTable;
