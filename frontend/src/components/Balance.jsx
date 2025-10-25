import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Balance() {
  const location = useLocation();
  const accountnumber = location.state?.accountnumber;
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (accountnumber) {
      fetch(`http://localhost:8081/api/account/balance/${accountnumber}`)
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to fetch balance");
          }
          return response.json();
        })
        .then(data => {
          setBalance(data);
        })
        .catch(error => {
          console.error("Error fetching balance:", error);
          setBalance("Error");
        });
    }
  }, [accountnumber]);

  return (
    <div className="mainsection1">
      <h2>Account Number : {accountnumber}</h2>
      <h2>Account Balance : {balance !== null ? balance : "---"}</h2>
    </div>
  );
}

export default Balance;