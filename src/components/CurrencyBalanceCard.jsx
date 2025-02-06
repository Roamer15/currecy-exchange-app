import { WalletContext } from "../context/WalletContext";
import { useContext } from "react";
import PropTypes from "prop-types";

function CurrencyBalanceCard({ currency }) {
  const { wallet } = useContext(WalletContext);

  return (
    <div className="currency-card">
      <h3>{currency} Balance</h3>
      <p>
        {wallet[currency].toFixed(2)} {currency}
      </p>
    </div>
  );
}

export default CurrencyBalanceCard;

CurrencyBalanceCard.propTypes = {
  currency: PropTypes.string.isRequired,
};