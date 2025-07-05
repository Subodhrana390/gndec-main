import React from "react";
import "../styles/fee.css";

const Payfee = ({ alreadyPaid }) => {
  return (
    <>
      {!alreadyPaid && (
        <div className="fee_container">
          <h1 className="fee_title">Fill Detail</h1>
          <form className="form">
            <div className="form-group">
              <label className="form_label">
                Hostler / Day Scholar (Hostellers should deposit hostel fee
                alongwith academic fee otherwise hostel fee will be collected as
                per late fee fine)
              </label>
              <div className="form_input">
                <select className="form-input">
                  <option value="Day Scholar">Day Scholar</option>
                  <option value="Hostler">Hostler</option>
                </select>
                <p>Please select Hostler / Day Scholar carefully.</p>
              </div>
            </div>
            <div className="form-group">
              <label className="form_label">Mode of Payment</label>
              <select className="form_input">
                <option value="Online">
                  Online (Credit, Debit Card, UPI, Netbanking)
                </option>
              </select>
            </div>
          </form>
          <p className="terms_condition">
            I hereby certify that the entries made by me in this form are
            correct to the best of my knowledge and I have not suppressed any
            information in any manner.
          </p>
        </div>
      )}
      <div className="form_button">
        {alreadyPaid ? (
          <button>Generate Fee Receipt</button>
        ) : (
          <button>Proceed</button>
        )}
      </div>
    </>
  );
};

export default Payfee;
