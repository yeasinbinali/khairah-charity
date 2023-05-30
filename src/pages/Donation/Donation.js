import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/UserContext";
import DonationTable from "./DonationTable/DonationTable";

const Donation = () => {
  const [given, setGiven] = useState([]);
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://khairah-charity-server.vercel.app/given?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("khairah-charity")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => setGiven(data));
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this fund?"
    );
    if (proceed) {
      fetch(`https://khairah-charity-server.vercel.app/given/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = given.filter((gvn) => gvn._id !== id);
            setGiven(remaining);
            alert("Fund deleted successfully");
          }
        });
    }
  };

  const handleStatusUpdated = (id) => {
    fetch(`https://khairah-charity-server.vercel.app/given/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = given.filter((gvn) => gvn._id !== id);
          const approving = given.find((gvn) => gvn._id === id);
          approving.status = "Approved";
          const newFunds = [approving, ...remaining];
          setGiven(newFunds);
        }
      });
  };

  return (
    <div>
      {
        given.length === 0 && <div className="md:text-3xl sm:text-2xl text-center my-5">You have not donate to any fund</div>
      }
      {
        given.length > 0 && 
        <div className="overflow-x-auto w-full my-10">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Delete</th>
                <th>Title and Amount</th>
                <th>Giver and Email</th>
                <th>Phone</th>
                <th>Approved</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {given &&
                given?.map((give) => (
                  <DonationTable
                    key={give._id}
                    give={give}
                    handleDelete={handleDelete}
                    handleStatusUpdated={handleStatusUpdated}
                  ></DonationTable>
                ))}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default Donation;
