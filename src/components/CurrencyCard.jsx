import { useContext } from "react";
import { WalletContext } from "../context/AccountContext";

const CurrencyCard = ({ currency }) => {
  const { wallet } = useContext(WalletContext);

  return (
    <div className="currency-card">
      <h3>{currency} Balance</h3>
      <p>{wallet[currency].toFixed(2)} {currency}</p>
    </div>
  );
};

export default CurrencyCard;