import { useContext } from "react";
import { WalletContext } from "./context/AccountContext";
import CurrencyCard from "./components/CurrencyCard";
import ExchangeForm from "./components/ExchangeForm";
import DepositForm from "./components/DepositForm";
import DefaultCurrency from "./components/DefaultCurrency";

const App = () => {
  const { wallet } = useContext(WalletContext);

  const totalizedValue = Object.keys(wallet).reduce((total, currency) => {
    if (currency !== "defaultCurrency") {
      const rate = wallet.defaultCurrency === "USD" ? 1 : 1 / 1.24; // Simplified logic
      return total + wallet[currency] * rate;
    }
    return total;
  }, 0);

  return (
    <div className="app">
      <h1>Currency Exchange App</h1>
      <DefaultCurrency />
      <div className="wallet-dashboard">
        <CurrencyCard currency="USD" />
        <CurrencyCard currency="EUR" />
        <CurrencyCard currency="XAF" />
        <p>Totalized Value: {totalizedValue.toFixed(2)} {wallet.defaultCurrency}</p>
      </div>
      <ExchangeForm />
      <DepositForm />
    </div>
  );
};

export default App;