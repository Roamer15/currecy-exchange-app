import { WalletData } from "./context/WalletContext";
import DisplayDefaultCurrency from "./components/DisplayDefaultCurrency";
import CurrencyBalanceCard from "./components/CurrencyBalanceCard";
import ExchangeCurrency from "./components/ExchangeCurrency";
import AccountDeposit from "./components/AccountDeposit";
import AccountBalance from "./components/AccountBalance";

function App() {
  return (
    <WalletData>
      <div className="app">
        <h1>Currency Exchange App</h1>
        <DisplayDefaultCurrency />
        <div className="dashboard">
          <CurrencyBalanceCard currency="USD" />
          <CurrencyBalanceCard currency="EUR" />
          <CurrencyBalanceCard currency="XAF" />
          <AccountBalance />
        </div>
        <div className="forms">
          <ExchangeCurrency />
          <AccountDeposit />
        </div>
      </div>
    </WalletData>
  );
}

export default App;