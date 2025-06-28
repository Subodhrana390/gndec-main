import React, { useState, useEffect } from "react";

const PractialDetainee = () => {
  const [loadTime, setLoadTime] = useState("");

  useEffect(() => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    const formatted = `${day}-${month}-${year} - ${hours}:${minutes} ${ampm}`;
    setLoadTime(formatted);
  }, []);

  return (
    <>
      <h1>
        <span className="red">Detainee Status (As of - {loadTime})</span>
      </h1>
      <h2>Detainee List (Practical)</h2>
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Subject Code</th>
            <th>Subject Title</th>
            <th>Paper ID</th>
            <th>Semester</th>
            <th>Theory / Practical</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};

export default PractialDetainee;
