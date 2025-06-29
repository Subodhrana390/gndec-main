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
    semester: 3,
    subjectCode: "EXIT-101",
    mCode: 16024,
    paperId: "16024",
    subjectTitle: "Basic Electronics and Application in Civil Engineering",
    theoryPractical: "T",
    resultType: "Regular",
    internalObtained: 28,
    internalMax: 40,
    externalObtained: 40,
    externalMax: 60,
  },
  {
    semester: 3,
    subjectCode: "HSMCE-101",
    mCode: 16025,
    paperId: "16025",
    subjectTitle: "Civil Engineering Introduction, Societal and Global Impact",
    theoryPractical: "T",
    resultType: "Regular",
    internalObtained: 29,
    internalMax: 40,
    externalObtained: 39,
    externalMax: 60,
  },
  {
    semester: 3,
    subjectCode: "PCCE-101",
    mCode: 16020,
    paperId: "16020",
    subjectTitle: "Surveying & Geomatics",
    theoryPractical: "T",
    resultType: "Regular",
    internalObtained: 22,
    internalMax: 40,
    externalObtained: 45,
    externalMax: 60,
  },
  {
    semester: 3,
    subjectCode: "POCE-102",
    mCode: 16021,
    paperId: "16021",
    subjectTitle: "Solid Mechanics",
    theoryPractical: "T",
    resultType: "Regular",
    internalObtained: 29,
    internalMax: 40,
    externalObtained: 42,
    externalMax: 60,
  },
  {
    semester: 3,
    subjectCode: "PCCE-103",
    paperId: "16022",
    mCode: 16022,
    subjectTitle: "Fluid Mechanics",
    theoryPractical: "T",
    resultType: "Regular",
    internalObtained: 32,
    internalMax: 40,
    externalObtained: 44,
    externalMax: 60,
  },
  {
    semester: 3,
    subjectCode: "BEGIN-104",
    paperId: "16023",
    mCode: 16023,
    subjectTitle: "Disaster Preparedness and Planning",
    theoryPractical: "T",
    resultType: "Regular",
    internalObtained: 30,
    internalMax: 40,
    externalObtained: 42,
    externalMax: 60,
  },
  {
    semester: 3,
    subjectCode: "LPCCE-101",
    paperId: "16026",
    subjectTitle: "Surveying & Geomatics Laboratory",
    theoryPractical: "P",
    resultType: "Regular",
    internalObtained: 17,
    internalMax: 30,
    externalObtained: 15,
    externalMax: 20,
  },
  {
    semester: 3,
    subjectCode: "LPCCE-102",
    paperId: "16027",
    subjectTitle: "Fluid Mechanics Laboratory",
    theoryPractical: "P",
    resultType: "Regular",
    internalObtained: 24,
    internalMax: 30,
    externalObtained: 12,
    externalMax: 20,
  },
  {
    semester: 3,
    subjectCode: "LPCCE-103",
    paperId: "16028",
    subjectTitle: "Solid Mechanics Laboratory",
    theoryPractical: "P",
    resultType: "Regular",
    internalObtained: 24,
    internalMax: 30,
    externalObtained: 12,
    externalMax: 20,
  },
  {
    semester: 3,
    subjectCode: "TR-101",
    paperId: "16029",
    subjectTitle: "Training-I",
    theoryPractical: "P",
    resultType: "Regular",
    internalObtained: 29,
    internalMax: 60,
    externalObtained: 16,
    externalMax: 40,
  },
];

const SemDecember = () => {
  return (
    <div className="result_container">
      <h1>PROVISIONAL RESULT</h1>
      <h2>ESE, Dec, 2024</h2>

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
              <td>
                {subj.paperId} / {subj.mCode}
              </td>
              <td>{subj.subjectTitle}</td>
              <td>{subj.theoryPractical}</td>
              <td>{subj.resultType}</td>
              <td>{subj.internalObtained}</td>
              <td>{subj.internalMax}</td>
              <td>{subj.externalObtained}</td>
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

export default SemDecember;
