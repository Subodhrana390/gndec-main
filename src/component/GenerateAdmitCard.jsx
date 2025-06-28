import React from "react";
import "../styles/Admit.css";
import AdmitCard from "../assets/RegularAdmitcard_May_2025_2302409.pdf";

const GenerateAdmitCard = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = AdmitCard;
    link.download = "Regular_AdmitCard_May_2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGenerate = () => {
    alert("Admit Card Generated!");
  };

  return (
    <div className="admit_Container">
      <button className="download" onClick={handleDownload}>
        Download Regular Admit Card
      </button>
      <button className="generate" onClick={handleGenerate}>
        Generate Exam Admit Card (Regular)
      </button>
    </div>
  );
};

export default GenerateAdmitCard;
