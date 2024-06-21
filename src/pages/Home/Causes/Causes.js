import React, { useEffect, useState } from "react";
import Cause from "./Cause/Cause";

const Causes = () => {
  const [causes, setCauses] = useState([]);

  useEffect(() => {
    fetch("https://khairah-charity-server.vercel.app/causes")
      .then((res) => res.json())
      .then((data) => setCauses(data));
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-center my-10 font-bold">Causes</h1>
      <div className="mx-auto md:w-4/5 w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
        {causes.map((cause) => (
          <Cause key={cause._id} cause={cause}></Cause>
        ))}
      </div>
    </div>
  );
};

export default Causes;
