import React from "react";

const Elective = () => {
  return (
    <>
      <h2
        style={{
          display: "block",
          fontSize: "15px",
          backgroundColor: "#3a87ad",
          width: "fit-Content",
          padding: "5px",
          borderRadius: "4px",
          color: "white",

          margin: "10px auto",
        }}
      >
        Details of the Elective Subjects
      </h2>
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
      <p style={{ fontSize: "12px", fontWeight: "bold" }}>
        <span style={{ fontSize: "12px", fontWeight: "bold" }}>Note: </span>For
        Sub-Section in case of Practical Subject(s), check with the concerned
        department.
      </p>
    </>
  );
};

export default Elective;
