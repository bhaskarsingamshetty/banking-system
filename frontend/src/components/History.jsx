import React, { useState, useEffect } from "react";
import Services from "./Services";
import Menubar from "./Menubar";
import Footer from "./Footer";

const paymentsData = [
  { id: 1, date: "2025-02-01", amount: 200, recipient: "Akhil", status: "Completed" },
  { id: 2, date: "2025-02-02", amount: 150, recipient: "Pranay", status: "Pending" },
  { id: 3, date: "2025-02-03", amount: 500, recipient: "Bhaskar", status: "Failed" },
];

const PaymentsHistory = () => {
  const [payments, setPayments] = useState(paymentsData);
  const [search, setSearch] = useState("");

  // Filter function
  const filteredPayments = payments.filter((payment) =>
    payment.recipient.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Menubar/>
    <div className="payments-container">
      <h2>Payment History</h2>

      <input
        type="text"
        placeholder="Search by recipient"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <table className="historytable">
        <thead>
          <tr>
            <th>Date</th>
            <th>Recipient</th>
            <th>Amount ($)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.date}</td>
              <td>{payment.recipient}</td>
              <td>${payment.amount}</td>
              <td className={`status ${payment.status.toLowerCase()}`}>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Services/>
    <Footer/>
    </>
  );
};

export default PaymentsHistory;
