import React from "react";
import "../styles/Result.css";

const SemNov = () => {
  return (
    <div class="result_container">
      <h1>PROVISIONAL RESULT</h1>
      <h2>ESE, Dec, 2023</h2>

      <table>
        <tr>
          <th>Name</th>
          <td>ABHAY RAJ</td>
        </tr>
        <tr>
          <th>Father's Name</th>
          <td>SUNIL GUPTA</td>
        </tr>
        <tr>
          <th>University Roll No.</th>
          <td>2302845</td>
        </tr>
        <tr>
          <th>Course (Branch)</th>
          <td>B.Tech. (Electronics and Communication Engineering)</td>
        </tr>
        <tr>
          <th>College Roll No.</th>
          <td>2317004</td>
        </tr>
      </table>

      <table class="result">
        <tr>
          <th>Semester</th>
          <th>Subject Code</th>
          <th>M code / Paper ID</th>
          <th>Subject Title</th>
          <th>Theory / Practical</th>
          <th>Result Type</th>
          <th>Internal Obtained Marks</th>
          <th>Internal Max. Marks</th>
          <th>External Obtained Marks</th>
          <th>External Max. Marks</th>
        </tr>

        <tr>
          <td>1</td>
          <td>BSC-101</td>
          <td>15925 / 15925</td>
          <td>Physics</td>
          <td>T</td>
          <td>Regular</td>
          <td>34</td>
          <td>40</td>
          <td>48</td>
          <td>60</td>
        </tr>
        <tr>
          <td>1</td>
          <td>BSC-103</td>
          <td>15927 / 15927</td>
          <td>Mathematics-l</td>
          <td>T</td>
          <td>Regular</td>
          <td>31</td>
          <td>40</td>
          <td>35</td>
          <td>60</td>
        </tr>
        <tr>
          <td>1</td>
          <td>ESC-101</td>
          <td>15929 / 15929</td>
          <td>Basic Electrical Engineering</td>
          <td>T</td>
          <td>Regular</td>
          <td>35</td>
          <td>40</td>
          <td>35</td>
          <td>60</td>
        </tr>
        <tr>
          <td>1</td>
          <td>ESC-103</td>
          <td>15931 / 15931</td>
          <td>Engineering Graphics and Design</td>
          <td>T</td>
          <td>Regular</td>
          <td>26</td>
          <td>40</td>
          <td>43</td>
          <td>60</td>
        </tr>
        <tr>
          <td>1</td>
          <td>HSMC-103</td>
          <td>15928 / 15928</td>
          <td>Principles of Engineering Economics and Management</td>
          <td>T</td>
          <td>Regular</td>
          <td>28</td>
          <td>40</td>
          <td>27</td>
          <td>60</td>
        </tr>
        <tr>
          <td>1</td>
          <td>BSC-102</td>
          <td>15926 /</td>
          <td>Physics Lab</td>
          <td>P</td>
          <td>Regular</td>
          <td>27</td>
          <td>30</td>
          <td>18</td>
          <td>20</td>
        </tr>
        <tr>
          <td>1</td>
          <td>ESC-102</td>
          <td>15930 /</td>
          <td>Basic Electrical Engineering Laboratory</td>
          <td>P</td>
          <td>Regular</td>
          <td>25</td>
          <td>30</td>
          <td>16</td>
          <td>20</td>
        </tr>
      </table>

      <h3 class="note">Note:</h3>
      <ul class="note">
        <li>
          The provisional result shows the actual marks earned by the students
          in the concerned subjects.
        </li>
        <li>
          All papers of students involved in Unfair Means Cases (UMC) may be
          cancelled. The final result notification of students involved in UMC
          will be issued as per recommendations of CRC (Complaint Redressal
          Committee) and approval from competent authority.
        </li>
        <li>
          This provisional result available on website is for information only
          and shall not be treated as final.
        </li>
        <li>
          The (External) awards may change after the Display and Redress
          Process.
        </li>
        <li>For further updates keep visiting college website regularly.</li>
      </ul>
      <p class="disclaimer">
        Disclaimer: Every effort has been made to verify the contents of this
        website. However Guru Nanak Dev Engineering College, Ludhiana is not
        liable for any action based on such information.
      </p>
    </div>
  );
};

export default SemNov;
