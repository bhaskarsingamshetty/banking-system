import React, { useState, useEffect } from 'react';
import './Loan.css'; // Make sure this CSS file is imported

// ✅ REMOVED const ACCOUNT_NUMBER and const TOKEN from here

const API_URL = 'http://localhost:8081/api/loans'; 

function Loan() {
  const [loanType, setLoanType] = useState('PERSONAL');
  const [amount, setAmount] = useState('');
  const [loans, setLoans] = useState([]);
  const [message, setMessage] = useState('');

  const fetchUserLoans = async () => {
    // ✅ MOVED these lines INSIDE the function
    const ACCOUNT_NUMBER = localStorage.getItem('accountNumber');
    const TOKEN = localStorage.getItem('token');

    if (!ACCOUNT_NUMBER || !TOKEN) { 
      setMessage('Please log in to view loans.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/user/${ACCOUNT_NUMBER}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch loans');
      const data = await response.json();
      setLoans(data);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    // ✅ MOVED these lines INSIDE the function
    const ACCOUNT_NUMBER = localStorage.getItem('accountNumber');
    const TOKEN = localStorage.getItem('token');

    if (!ACCOUNT_NUMBER || !TOKEN) { 
      setMessage('Please log in to apply for a loan.');
      return;
    }
    const loanApplication = { loanType, amount: parseFloat(amount) };
    try {
      const response = await fetch(`${API_URL}/apply/${ACCOUNT_NUMBER}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(loanApplication),
      });
      if (!response.ok) throw new Error('Loan application failed');
      const newLoan = await response.json();
      setMessage(`Loan application successful! Loan ID: ${newLoan.loanId}`);
      setAmount('');
      setLoanType('PERSONAL');
      fetchUserLoans();
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchUserLoans();
  }, []);

  return (
    <div className="loan-page">
      
      {/* Centered Form Section */}
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

      {/* Centered Table Section */}
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
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                {loans.map((loan) => (
                  <tr key={loan.loanId}>
                    <td>{loan.loanId}</td>
                    <td>{loan.loanType}</td>
                    <td>${loan.amount.toFixed(2)}</td>
                    <td className={`status-${String(loan.status).toLowerCase()}`}>
                      {loan.status}
                    </td>
                    <td>{loan.interestRate}%</td>
                    <td>{loan.dueDate}</td>
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