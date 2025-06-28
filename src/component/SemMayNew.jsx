import React from "react";
import "../styles/Result.css";

const studentInfo = {
  name: "PRIYANSHU",
  fatherName: "KAUSHAL KUMAR",
  universityRoll: "2302409",
  course: "B.Tech. (Civil Engineering)",
  collegeRoll: "2314067",
};

const subjects = [
  {
    semester: 4,
    subjectCode: "PCCE-108",
    paperId: "16179 / 16179",
    title: "Transportation Engineering",
    type: "T",
    resultType: "Regular",
    internal: 34,
    internalMax: 40,
    external: 48,
    externalMax: 60,
  },
  {
    semester: 4,
    subjectCode: "PCCE-107",
    paperId: "16178 / 16178",
    title: "Hydrology and Water Resources Engineering",
    type: "T",
    resultType: "Regular",
    internal: 31,
    internalMax: 40,
    external: 35,
    externalMax: 60,
  },
  {
    semester: 4,
    subjectCode: "PCCE-106",
    paperId: "16177 / 16177",
    title: "Material, Testing and Evaluation",
    type: "T",
    resultType: "Regular",
    internal: 35,
    internalMax: 40,
    external: 34,
    externalMax: 60,
  },
  {
    semester: 4,
    subjectCode: "PCCE-105",
    paperId: "16176 / 16176",
    title: "Concrete Technology",
    type: "T",
    resultType: "Regular",
    internal: 26,
    internalMax: 40,
    external: 43,
    externalMax: 60,
  },
  {
    semester: 4,
    subjectCode: "MCCE-101",
    paperId: "16184 / 16184",
    title: "Environmental Sciences",
    type: "T",
    resultType: "Regular",
    internal: 38,
    internalMax: 50,
    external: "",
    externalMax: "",
  },
  {
    semester: 4,
    subjectCode: "BSCE-101",
    paperId: "16180 / 16180",
    title: "Mathematics-III",
    type: "T",
    resultType: "Regular",
    internal: 28,
    internalMax: 40,
    external: "42",
    externalMax: "60",
  },
  {
    semester: 4,
    subjectCode: "PRCE-101",
    paperId: "16183 /",
    title: "Seminar and Technical Report Writing",
    type: "P",
    resultType: "Regular",
    internal: 27,
    internalMax: 30,
    external: 18,
    externalMax: 20,
  },
  {
    semester: 4,
    subjectCode: "MPD-102",
    paperId: "16185 /",
    title: "Mentoring and Professional Development",
    type: "P",
    resultType: "Regular",
    internal: 27,
    internalMax: 30,
    external: 16,
    externalMax: 20,
  },
  {
    semester: 4,
    subjectCode: "LPCCE-105",
    paperId: "16182 /",
    title: "Transportation Laboratory",
    type: "P",
    resultType: "Regular",
    internal: 22,
    internalMax: 30,
    external: 13,
    externalMax: 20,
  },
  {
    semester: 4,
    subjectCode: "LPCCE-104",
    paperId: "16181 /",
    title: "Concrete Testing Laboratory",
    type: "P",
    resultType: "Regular",
    internal: 25,
    internalMax: 30,
    external: 16,
    externalMax: 20,
  },
];

const SemMayNew = () => {
  return (
    <div className="result_container">
      <h1>PROVISIONAL RESULT</h1>
      <h2>ESE, May, 2025</h2>

      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{studentInfo.name}</td>
          </tr>
          <tr>
            <th>Father's Name</th>
            <td>{studentInfo.fatherName}</td>
          </tr>
          <tr>
            <th>University Roll No.</th>
            <td>{studentInfo.universityRoll}</td>
          </tr>
          <tr>
            <th>Course (Branch)</th>
            <td>{studentInfo.course}</td>
          </tr>
          <tr>
            <th>College Roll No.</th>
            <td>{studentInfo.collegeRoll}</td>
          </tr>
        </tbody>
      </table>

      <table className="result">
        <thead>
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
        </thead>
        <tbody>
          {subjects.map((subj, index) => (
            <tr key={index}>
              <td>{subj.semester}</td>
              <td>{subj.subjectCode}</td>
              <td>{subj.paperId}</td>
              <td>{subj.title}</td>
              <td>{subj.type}</td>
              <td>{subj.resultType}</td>
              <td>{subj.internal}</td>
              <td>{subj.internalMax}</td>
              <td>{subj.external}</td>
              <td>{subj.externalMax}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="note">Note:</h3>
      <ul className="note">
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
      <p className="disclaimer">
        Disclaimer: Every effort has been made to verify the contents of this
        website. However Guru Nanak Dev Engineering College, Ludhiana is not
        liable for any action based on such information.
      </p>
    </div>
  );
};

export default SemMayNew;
