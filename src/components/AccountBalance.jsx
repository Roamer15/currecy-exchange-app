import { WalletContext } from "../context/WalletContext";
import { useContext } from "react";

function AccountBalance() {
  const { wallet } = useContext(WalletContext);

  // Function to convert a value from one currency to another
  const convertCurrency = (amount, fromCurrency, toCurrency) => {
    if (fromCurrency === toCurrency) return amount; // No conversion needed

    // Ensure exchange rates are defined
    if (
      !wallet.exchangeRates[fromCurrency] ||
      !wallet.exchangeRates[toCurrency]
    ) {
      console.error("Exchange rates are not defined for the selected currencies.");
      return 0; // Return 0 to avoid NaN
    }

    // Step 1: Convert fromCurrency to USD
    const usdRateFrom = wallet.exchangeRates[fromCurrency][toCurrency]; // Rate to convert fromCurrency to USD
    const amountInUSD = amount * usdRateFrom;
    console.log(amount)
    console.log(amountInUSD)

    // Step 2: Convert USD to toCurrency
    const usdRateTo = wallet.exchangeRates[toCurrency][fromCurrency]; // Rate to convert USD to toCurrency
    const amountInTargetCurrency = amountInUSD / usdRateTo;

    console.log(amountInTargetCurrency)
    console.log(usdRateTo)
    return amountInUSD;
  };

  // Calculate the totalized value in the default currency
  const totalizedValue = Object.keys(wallet).reduce((total, currency) => {
    if (currency !== "defaultCurrency" && currency !== "exchangeRates") {
      const amountInDefaultCurrency = convertCurrency(
        wallet[currency],
        currency,
        wallet.defaultCurrency
      );

      // Ensure the result is a valid number
      if (isNaN(amountInDefaultCurrency)) {
        console.log(`Invalid conversion for ${currency}`);
        return total;
      }

      return total + amountInDefaultCurrency;
    }
    return total;
  }, 0);

  return (
    <div className="total-balance">
      <h3>Total Balance</h3>
      <p>
        {totalizedValue.toFixed(2)} {wallet.defaultCurrency}
      </p>
    </div>
  );
}

export default AccountBalance;