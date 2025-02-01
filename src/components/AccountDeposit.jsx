import { useState, useContext } from "react";
import { WalletContext } from "../context/WalletContext";

function AccountDeposit() {
  const { depositCurrency } = useContext(WalletContext);
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);

  const handleDeposit = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    depositCurrency(currency, amount);
    setAmount(0); // Reset the input field after deposit
  };

  return (
    <div className="deposit-form">
      <h3>Deposit Funds</h3>
      <form onSubmit={handleDeposit}>
        <div>
          <label>Currency:</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="XAF">XAF</option>
          </select>
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            min="0"
            required
          />
        </div>
        <button type="submit">Deposit</button>
      </form>
    </div>
  );
}

export default AccountDeposit;