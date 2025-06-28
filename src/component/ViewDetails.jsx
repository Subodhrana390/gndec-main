import React from "react";

const ViewDetails = () => {
  return (
    <div class="Detail_container">
      <table>
        <tr>
          <th>Name / Gender</th>
          <td>Priyanshu / Male</td>
        </tr>
        <tr>
          <th>Father's Name</th>
          <td>Kaushal Kumar</td>
        </tr>
        <tr>
          <th>Mother's Name</th>
          <td>Anita</td>
        </tr>
        <tr>
          <th>University Roll No. / Section (Group)</th>
          <td>2302409 / CEBECC (CEB1)</td>
        </tr>
        <tr>
          <th>Program / Semester / Shift</th>
          <td>B.Tech. (Civil Engineering) / 2 / First</td>
        </tr>
        <tr>
          <th>Mobile No. / Personal E-mail ID</th>
          <td>9024579103 / kpanditf62@gmail.com</td>
        </tr>
        <tr>
          <th>Mentor Name</th>
          <td>Sukhwinderpal Singh</td>
        </tr>
        <tr>
          <th>College Roll No.</th>
          <td>2314067</td>
        </tr>
        <tr>
          <th>Date of Birth (YYYY-MM-DD)</th>
          <td>2003-06-26</td>
        </tr>
      </table>
      <div class="note">
        <strong>Note:</strong>
        <ul>
          <li>
            In case of discrepancy (with regards to Roll No.(s), spelling
            mistakes in name (s)), contact immediately your department office.
          </li>
        </ul>
      </div>
      <div class="disclaimer">
        <strong>Disclaimer:</strong> Every effort has been made to verify the
        contents of this website. However, Guru Nanak Dev Engineering College,
        Ludhiana is not liable for any action based on such information.
      </div>
    </div>
  );
};

export default ViewDetails;
