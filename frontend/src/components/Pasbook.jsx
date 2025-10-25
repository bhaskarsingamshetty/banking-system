import { useState, useEffect } from "react";
import Menubar from "./Menubar";
import Services from "./Services";
import Footer from "./Footer";

function Passbook () {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions (Replace with API call if needed)
  useEffect(() => {
    const fetchTransactions = async () => {
      // Dummy transaction data
      const data = [
        { date: "2025-02-01", type: "Deposit", amount: 5000 },
        { date: "2025-02-02", type: "Withdrawal", amount: 2000 },
        { date: "2025-02-03", type: "Deposit", amount: 3000 },
        { date: "2025-02-04", type: "Withdrawal", amount: 1000 },
        { date: "2025-02-04", type: "Withdrawal", amount: 1000 },
      ];
      setTransactions(data);
    };
    fetchTransactions();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Menubar/>
    <div className="passbook-container">
      <h2 className="passbookheading">Passbook</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={index}>
                <td>{txn.date}</td>
                <td className={txn.type === "Deposit" ? "credit" : "debit"}>
                  {txn.type}
                </td>
                <td className={txn.type === "Deposit" ? "credit" : "debit"}>
                  ₹{txn.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Services/>
    <Footer/>
    </>
  );
};

export default Passbook;
