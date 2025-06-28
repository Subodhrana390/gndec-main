import React from "react";
import "../styles/Admit.css";

const GenerateAdmitCard = () => {
  return (
    <div className="admit_Container">
      <button className="download">Download Regular Admit Card</button>
      <button className="generate">Generate Exam Admit Card (Regular) </button>
    </div>
  );
};

export default GenerateAdmitCard;
