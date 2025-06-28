import React from "react";
import "../styles/Result.css";

const SemMay = () => {
  return (
    <div class="result_container">
      <h1>PROVISIONAL RESULT</h1>
      <h2>ESE, May, 2024</h2>

      <table>
        <tr>
          <th>Name</th>
          <td>PRIYANSHU</td>
        </tr>
        <tr>
          <th>Father's Name</th>
          <td>KAUSHAL KUMAR</td>
        </tr>
        <tr>
          <th>University Roll No.</th>
          <td>2302409</td>
        </tr>
        <tr>
          <th>Course (Branch)</th>
          <td>B.Tech. (Civil Engineering)</td>
        </tr>
        <tr>
          <th>College Roll No.</th>
          <td>2314067</td>
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
          <td>2</td>
          <td>BSC-104</td>
          <td>15940 / 15940</td>
          <td>Mathematics-II</td>
          <td>T</td>
          <td>Regular</td>
          <td>28</td>
          <td>40</td>
          <td>45</td>
          <td>60</td>
        </tr>
        <tr>
          <td>2</td>
          <td>BSC-105</td>
          <td>15933 / 15933</td>
          <td>Chemistry</td>
          <td>T</td>
          <td>Regular</td>
          <td>29</td>
          <td>40</td>
          <td>49</td>
          <td>60</td>
        </tr>
        <tr>
          <td>2</td>
          <td>ESC-104</td>
          <td>15935 / 15935</td>
          <td>Programming for Problem Solving</td>
          <td>T</td>
          <td>Regular</td>
          <td>31</td>
          <td>40</td>
          <td>42</td>
          <td>60</td>
        </tr>
        <tr>
          <td>2</td>
          <td>HSMC-101</td>
          <td>15938 / 15938</td>
          <td>English</td>
          <td>T</td>
          <td>Regular</td>
          <td>32</td>
          <td>40</td>
          <td>45</td>
          <td>60</td>
        </tr>
        <tr>
          <td>2</td>
          <td>BSC-106</td>
          <td>15934 /</td>
          <td>Chemistry Lab</td>
          <td>P</td>
          <td>Regular</td>
          <td>19</td>
          <td>30</td>
          <td>18</td>
          <td>20</td>
        </tr>
        <tr>
          <td>2</td>
          <td>ESC-105</td>
          <td>15936 /</td>
          <td>Programming for Problem Solving Laboratory</td>
          <td>P</td>
          <td>Regular</td>
          <td>22</td>
          <td>30</td>
          <td>16</td>
          <td>20</td>
        </tr>
        <tr>
          <td>2</td>
          <td>ESC-106</td>
          <td>15937 /</td>
          <td>Manufacturing Practices</td>
          <td>P</td>
          <td>Regular</td>
          <td>25</td>
          <td>30</td>
          <td>17</td>
          <td>20</td>
        </tr>
        <tr>
          <td>2</td>
          <td>HSMC-102</td>
          <td>15939 /</td>
          <td>English Laboratory</td>
          <td>P</td>
          <td>Regular</td>
          <td>20</td>
          <td>30</td>
          <td>15</td>
          <td>20</td>
        </tr>
        <tr>
          <td>2</td>
          <td>MPD-101</td>
          <td>15932 /</td>
          <td>Mentoring and Professional Development</td>
          <td>P</td>
          <td>Regular</td>
          <td>90</td>
          <td>100</td>
          <td></td>
          <td></td>
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

export default SemMay;
