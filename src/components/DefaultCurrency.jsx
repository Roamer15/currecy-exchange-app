import { useContext } from "react";
import { WalletContext } from "../context/AccountContext";

const DefaultCurrencySelector = () => {
  const { wallet, setDefaultCurrency } = useContext(WalletContext);

  return (
    <div className="default-currency-selector">
      <label>Default Currency:</label>
      <select
        value={wallet.defaultCurrency}
        onChange={(e) => setDefaultCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="XAF">XAF</option>
      </select>
    </div>
  );
};

export default DefaultCurrencySelector;