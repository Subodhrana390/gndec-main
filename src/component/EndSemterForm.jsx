import React from "react";
import "../styles/EndSemster.css";

const subjectData = [
  {
    srNo: 1,
    subjectCode: "PCCE-108",
    mCode: "16179",
    paperId: "16179",
    subjectTitle: "Transportation Engineering",
    electiveStatus: "Compulsory",
    tp: "T",
    semester: 4,
    internal: "Yes",
    external: "Yes",
    examFormReceived: "Yes",
    regularReappear: "Regular",
    externalAttendance: "Present",
  },
  {
    srNo: 2,
    subjectCode: "PCCE-107",
    mCode: "16178",
    paperId: "16178",
    subjectTitle: "Hydrology and Water Resources Engineering",
    electiveStatus: "Compulsory",
    tp: "T",
    semester: 4,
    internal: "Yes",
    external: "Yes",
    examFormReceived: "Yes",
    regularReappear: "Regular",
    externalAttendance: "Present",
  },
  {
    srNo: 3,
    subjectCode: "PCCE-106",
    mCode: "16177",
    paperId: "16177",
    subjectTitle: "Material, Testing and Evaluation",
    electiveStatus: "Compulsory",
    tp: "T",
    semester: 4,
    internal: "Yes",
    external: "Yes",
    examFormReceived: "Yes",
    regularReappear: "Regular",
    externalAttendance: "Present",
  },
  {
    srNo: 4,
    subjectCode: "PCCE-105",
    mCode: "16176",
    paperId: "16176",
    subjectTitle: "Concrete Technology",
    electiveStatus: "Compulsory",
    tp: "T",
    semester: 4,
    internal: "Yes",
    external: "Yes",
    examFormReceived: "Yes",
    regularReappear: "Regular",
    externalAttendance: "Present",
  },
  {
    srNo: 5,
    subjectCode: "MCCE-101",
    mCode: "16184",
    paperId: "16184",
    subjectTitle: "Environmental Sciences",
    electiveStatus: "Compulsory",
    tp: "T",
    semester: 4,
    internal: "Yes",
    external: "No",
    examFormReceived: "Yes",
    regularReappear: "Regular",
    externalAttendance: "",
  },
  {
    srNo: 6,
    subjectCode: "BSCE-101",
    mCode: "16180",
    paperId: "16180",
    subjectTitle: "Mathematics-III",
    electiveStatus: "Compulsory",
    tp: "T",
    semester: 4,
    internal: "Yes",
    external: "Yes",
    examFormReceived: "Yes",
    regularReappear: "Regular",
    externalAttendance: "Present",
  },
  {
    srNo: 7,
    subjectCode: "PRCE-101",
    mCode: "16183",
    paperId: "16183",
    subjectTitle: "Seminar and Technical Report Writing",
    electiveStatus: "Compulsory",
    tp: "P",
    semester: 4,
    internal: "Yes",
    external: "No",
    examFormReceived: "Yes",
    regularReappear: "Regular",
    externalAttendance: "",
  },
  {
    srNo: 8,
    subjectCode: "MPD-102",
    mCode: "16185",
    paperId: "16185",
    subjectTitle: "Mentoring and Professional Development",
    electiveStatus: "Compulsory",
    tp: "P",
    semester: 4,
    internal: "Yes",
    external: "No",
    examFormReceived: "Yes",
    regularReappear: "Regular",
    externalAttendance: "",
  },
  {
    srNo: 9,
    subjectCode: "LPCCE-105",
    mCode: "16182",
    paperId: "16182",
    subjectTitle: "Transportation Laboratory",
    electiveStatus: "Compulsory",
    tp: "P",
    semester: 4,
    internal: "Yes",
    external: "Yes",
    examFormReceived: "Yes",
    regularReappear: "Regular",
    externalAttendance: "",
  },
  {
    srNo: 10,
    subjectCode: "LPCCE-104",
    mCode: "16181",
    paperId: "16181",
    subjectTitle: "Concrete Testing Laboratory",
    electiveStatus: "Compulsory",
    tp: "P",
    semester: 4,
    internal: "Yes",
    external: "Yes",
    examFormReceived: "Yes",
    regularReappear: "Regular",
    externalAttendance: "",
  },
];

const EndSemterForm = () => {
  return (
    <>
      <h2>Student End Semester Exam Form</h2>

      <table>
        <thead>
          <tr>
            <th>Uni. Roll No.</th>
            <th>Course</th>
            <th>Branch</th>
            <th>Student Name</th>
            <th>Father / Mother Name</th>
            <th>Admission Year</th>
            <th>Semester Fee Status</th>
            <th>Student Status</th>
            <th>Lateral Entry Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2302409</td>
            <td>B.Tech. (AICTE - Full Time)</td>
            <td>Civil Engineering</td>
            <td>Priyanshu</td>
            <td>Kaushal Kumar / Anita</td>
            <td>2023</td>
            <td>Yes</td>
            <td>Onroll</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Subject Title</th>
            <th>Subject Code</th>
            <th>Elective Status</th>
            <th>Paper ID/M code</th>
            <th>Semester</th>
            <th>T/P</th>
            <th>Is Internal Appear?</th>
            <th>Is External Appear?</th>
            <th>Exam Form Received Status</th>
            <th>Regular Reappear</th>
            <th>External Exam Attendance (Theory)</th>
          </tr>
        </thead>
        <tbody>
          {subjectData.map((subject, index) => (
            <tr key={index}>
              <td>{subject.srNo}</td>
              <td>{subject.subjectTitle}</td>
              <td>{subject.subjectCode}</td>
              <td>{subject.electiveStatus}</td>
              <td>{subject.paperId}</td>
              <td>{subject.semester}</td>
              <td>{subject.tp}</td>
              <td>{subject.internal}</td>
              <td>{subject.external}</td>
              <td>{subject.examFormReceived}</td>
              <td>{subject.regularReappear}</td>
              <td>{subject.externalAttendance}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="submit_form">
        <p>Your Exam Form is Submitted.</p>
      </div>
    </>
  );
};

export default EndSemterForm;
