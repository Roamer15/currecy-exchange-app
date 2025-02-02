import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState({
    USD: 100,
    EUR: 500,
    XAF: 10000,
    defaultCurrency: "USD",
  });

  const exchangeRates = {
    USD: { EUR: 0.81, XAF: 600 },
    EUR: { USD: 1.24, XAF: 740 },
    XAF: { USD: 0.00167, EUR: 0.00135 },
  };

  const exchangeCurrency = (from, to, amount) => {
    const rate = exchangeRates[from][to];
    const convertedAmount = amount * rate;

    setWallet((prev) => ({
      ...prev,
      [from]: prev[from] - amount,
      [to]: prev[to] + convertedAmount,
    }));
  };

  const depositCurrency = (currency, amount) => {
    setWallet((prev) => ({
      ...prev,
      [currency]: prev[currency] + amount,
    }));
  };

  const setDefaultCurrency = (currency) => {
    setWallet((prev) => ({
      ...prev,
      defaultCurrency: currency,
    }));
  };

  return (
    <WalletContext.Provider
      value={{ wallet, exchangeCurrency, depositCurrency, setDefaultCurrency }}
    >
      {children}
    </WalletContext.Provider>
  );
};

WalletProvider.propTypes = {
    children: PropTypes.node
}