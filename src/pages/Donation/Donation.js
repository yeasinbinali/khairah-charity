import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/UserContext";
import DonationTable from "./DonationTable/DonationTable";

const Donation = () => {
  const [given, setGiven] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/given?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setGiven(data));
  }, [user?.email]);

  return (
    <div>
      {given.length === 0 ? (
        <p className='md:text-3xl sm:text-2xl text-center my-5'>You have not donate to any fund</p>
      ) : (
        <div className="overflow-x-auto w-full my-10">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Delete</th>
                <th>Title and Amount</th>
                <th>Giver and Email</th>
                <th>Phone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {given?.map((give) => (
                <DonationTable key={give._id} give={give}></DonationTable>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Donation;
