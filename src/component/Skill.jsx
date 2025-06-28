import React from "react";

const Skill = () => {
  return (
    <>
      <h2>List of Skill Enhancement Courses</h2>

      <table>
        <tr>
          <th>Sr No.</th>
          <th>Code</th>
          <th>Course Title</th>
          <th>Important Information</th>
          <th>Remarks</th>
          <th>Action</th>
          <th>Registration Fee</th>
        </tr>
      </table>
      <p style={{ color: "red" }}>
        For any Technical Issue send email at technicalsupport(AT)gndec.ac.in
        (Replace (AT) with @) with complete details like Roll No., Name, Mobile
        etc.
      </p>
    </>
  );
};

export default Skill;
