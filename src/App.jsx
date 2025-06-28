import "./App.css";
import Email from "./component/Email";
import Header from "./component/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Navigate,
} from "react-router-dom";
import ViewDetails from "./component/ViewDetails";
import Skill from "./component/Skill";
import TheoryDetainee from "./component/TheoryDetainee";
import ExamForm from "./component/ExamForm";
import EndSemterForm from "./component/EndSemterForm";
import LoginForm from "./component/LoginForm";
import HeaderImg from "./component/HeaderImg";
import PractialDetainee from "./component/PractialDetainee";
import Payfee from "./component/Payfee";
import GenerateAdmitCard from "./component/GenerateAdmitCard";
import Elective from "./component/elective";
import SemDecember from "./component/SemDec";
import SemMayNew from "./component/SemMayNew";

function App() {
  return (
    <>
      <HeaderImg />
      {localStorage.getItem("isLoggedIn") && <Header />}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              localStorage.getItem("isLoggedIn") ? (
                <Navigate to="/" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="/email" element={<Email />} />
          <Route path="/payFee" element={<Payfee />} />
          <Route path="/generateAdmitCard" element={<GenerateAdmitCard />} />
          <Route path="/viewDetails" element={<ViewDetails />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/detainee" element={<TheoryDetainee />} />
          <Route path="/particalDetainee" element={<PractialDetainee />} />
          <Route path="/examForm" element={<ExamForm />} />
          <Route path="/endSemsterform" element={<EndSemterForm />} />
          {/* <Route path="/semNov" element={<SemNov />} /> */}
          <Route path="/semMay" element={<SemMayNew />} />
          <Route path="/semDec" element={<SemDecember />} />
          <Route path="/elective" element={<Elective />} />

          <Route
            path="/login"
            element={
              localStorage.getItem("isLoggedIn") ? (
                <Navigate to="/" replace />
              ) : (
                <LoginForm />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
