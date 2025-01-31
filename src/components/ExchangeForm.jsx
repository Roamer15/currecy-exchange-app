import { useState, useContext } from "react";
import { WalletContext } from "../context/AccountContext";

const ExchangeForm = () => {
  const { wallet, exchangeCurrency } = useContext(WalletContext);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(0);

  const handleExchange = (e) => {
    e.preventDefault();
    if (amount > wallet[fromCurrency]) {
      alert("Insufficient balance!");
      return;
    }
    exchangeCurrency(fromCurrency, toCurrency, amount);
    setAmount(0);
  };

  return (
    <div className="exchange-form">
      <h3>Exchange Currency</h3>
      <form onSubmit={handleExchange}>
        <div>
          <label>From:</label>
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="XAF">XAF</option>
          </select>
        </div>
        <div>
          <label>To:</label>
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
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
            step="0.01"
            required
          />
        </div>
        <button type="submit">Exchange</button>
      </form>
    </div>
  );
};

export default ExchangeForm;