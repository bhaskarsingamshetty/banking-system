import React, { useState, useEffect } from 'react';
import './Loan.css';
import { callApi } from '../api.js';   // ✅ import your callApi

const API_URL = 'http://localhost:8081/loan';

function Loan() {
  const [loanType, setLoanType] = useState('PERSONAL');
  const [amount, setAmount] = useState('');
  const [loans, setLoans] = useState([]);
  const [message, setMessage] = useState('');

  // ✅ Fetch user loans using callApi()
  const fetchUserLoans = () => {
    const id = localStorage.getItem('id');
    if (!id) {
      setMessage("Please login to view loans.");
      return;
    }

    callApi(
      "GET",
      `${API_URL}/getloans/${id}`,
      null,
      (data) => {
        try {
          setLoans(JSON.parse(data));
        } catch (e) {
          setMessage("Error processing loan data.");
        }
      }
    );
  };

  // ✅ Handle loan application using callApi()
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    const ACCOUNT_NUMBER = localStorage.getItem('accountNumber');
    if (!ACCOUNT_NUMBER) {
      setMessage("Please login to apply for a loan.");
      return;
    }

    const loanApplication = {
      loanType,
      amount: parseFloat(amount),
    };

    callApi(
      "POST",
      `${API_URL}/apply/${ACCOUNT_NUMBER}`,
      JSON.stringify(loanApplication),
      (data) => {
        const newLoan = JSON.parse(data);
        setMessage(`Loan application successful! Loan ID: ${newLoan.loanId}`);
        setAmount("");
        setLoanType("PERSONAL");
        fetchUserLoans();
      }
    );
  };

  useEffect(() => {
    fetchUserLoans();
  }, []);

  return (
    <div className="loan-page">

      {/* Form Section */}
      <div className="form-container">
        <div className="loan-section">
          <h2>Apply for a Loan</h2>

          <form onSubmit={handleSubmit} className="loan-form">

            <div className="form-group">
              <label>
                Loan Type:
                <select
                  value={loanType}
                  onChange={(e) => setLoanType(e.target.value)}
                  required
                  className="form-select"
                >
                  <option value="PERSONAL">Personal Loan</option>
                  <option value="HOME">Home Loan</option>
                  <option value="EDUCATION">Education Loan</option>
                  <option value="CAR">Car Loan</option>
                </select>
              </label>
            </div>

            <div className="form-group">
              <label>
                Amount:
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  required
                  min="100"
                  max="10000000"
                  className="form-input"
                />
              </label>
            </div>

            <button type="submit" className="form-button">Apply</button>
          </form>

          {message &&
            <p className={`message ${message.startsWith('Error') ? 'error' : 'success'}`}>
              {message}
            </p>
          }
        </div>
      </div>

      {/* Table Section */}
      <div className="table-container">
        <div className="loan-section">
          <h2>Your Loans</h2>

          {loans.length === 0 ? (
            <p>You have no active loans.</p>
          ) : (
            <table className="loan-table">
              <thead>
                <tr>
                  <th>Loan ID</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Interest Rate</th>
                  {/* <th>Due Date</th> */}
                </tr>
              </thead>
              <tbody>
                {loans.map((loan) => (
                  <tr key={loan.id}>
                    <td>{loan.id}</td>
                    <td>{loan.type}</td>
                    <td>${loan.amount}</td>
                    <td className={`status-${String(loan.status).toLowerCase()}`}>
                      {loan.status}
                    </td>
                    <td>{loan.intrestrate}%</td>
                    {/* <td>{loan.dueDate}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          )}

        </div>
      </div>

    </div>
  );
}

export default Loan;
