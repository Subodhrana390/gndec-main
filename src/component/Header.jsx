import React from "react";
import "../styles/Home.css";

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  };
  return (
    <div className="container">
      <div class="header">
        <a href="/" class="home">
          Home
        </a>
        <div class="control-panel">
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fa-solid fa-folder-closed"></i> Control Panel▾
            </button>
            <div class="dropdown-content">
              <a href="/email">
                <i class="fa-solid fa-file"></i>GNDEC E-Mail Credentials
              </a>
              <a href="/viewDetails">
                <i class="fa-solid fa-file"></i>View Detail
              </a>
              <a href="/generateAdmitCard">
                <i class="fa-solid fa-file"></i>Generate Exam Admit Card
              </a>
              <a href="/skill">
                <i class="fa-solid fa-file"></i>Skill Enhancement Courses
              </a>
              <a href="/detainee">
                <i class="fa-solid fa-file"></i>Detainee Subject(s) - Theory
              </a>
              <a href="/particalDetainee">
                <i class="fa-solid fa-file"></i>Detainee Subject(s) - Practical
              </a>
              <a href="/examForm">
                <i class="fa-solid fa-file"></i>Exam Form Reappear
              </a>
              <a href="/endSemsterform">
                <i class="fa-solid fa-file"></i>Exam Form Status
              </a>
              {/* <a href="/semDec">
                <i class="fa-solid fa-file"></i>Result: ESE Dec, 2024
              </a> */}

              {/* <a href="/semNov">
                <i class="fa-solid fa-file"></i>Result: ESE Nov, 2023
              </a>
              <a href="/semMay">
                <i class="fa-solid fa-file"></i>Result: ESE May, 2024
              </a> */}
              <a href="/elective">
                <i class="fa-solid fa-file"></i>View Elective Allotment
              </a>
            </div>
          </div>
        </div>

        <div class="control-panel">
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fa-solid fa-folder-closed"></i> 2nd Year Result▾
            </button>
            <div class="dropdown-content">
              <a href="/semDec">
                <i class="fa-solid fa-file"></i>Result: ESE Dec, 2024
              </a>
              <a href="/semMay">
                <i class="fa-solid fa-file"></i>Result: ESE May, 2025
              </a>
            </div>
          </div>
        </div>

        <div class="obe">
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fa-solid fa-folder-closed"></i>OBE▾
            </button>
            <div class="dropdown-content">
              <a href="/vision">
                <i class="fa-solid fa-folder-closed"></i>Vision, Mission,
                PEO's,PO's
              </a>
              <a href="/">
                <i class="fa-solid fa-folder-closed"></i>Course Outcomes
              </a>
              <a href="/faq">
                <i class="fa-solid fa-folder-closed"></i>FAQ
              </a>
            </div>
          </div>
        </div>

        <div class="student-id">
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fa-solid fa-user"></i>2314067▾
            </button>
            <div class="dropdown-content">
              <a href="/">
                <i class="fa-solid fa-wrench"></i>Change Password
              </a>
              <button id="logout" onClick={handleLogout}>
                <i class="fa-solid fa-power-off"></i>Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
