import { WalletContext } from "../context/WalletContext";
import { useContext } from "react";

function AccountBalance() {
  const { wallet } = useContext(WalletContext);

  // Function to convert a value from one currency to another
  const convertCurrency = (amount, fromCurrency, toCurrency, exchangeRates) => {
    if (fromCurrency === toCurrency) return amount; // No conversion needed
    return (amount * exchangeRates[toCurrency]) / exchangeRates[fromCurrency];
  };

  // Calculate the totalized value in the default currency
  const totalizedValue = Object.keys(wallet).reduce((total, currency) => {
    if (currency !== "defaultCurrency" && currency !== "exchangeRates") {
      const amountInDefaultCurrency = convertCurrency(
        wallet[currency],
        currency,
        wallet.defaultCurrency,
        wallet.exchangeRates
      );
      return total + amountInDefaultCurrency;
    }
    return total;
  }, 0);

  return (
       <p>
           Totalized Value: {totalizedValue.toFixed(2)} {wallet.defaultCurrency}
       </p>
  )
}

export default AccountBalance