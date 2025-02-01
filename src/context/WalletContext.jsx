import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import { fetchRates } from "../service/rates";

export const WalletContext = createContext();

export const WalletData = ({ children }) => {
  const [wallet, setWallet] = useState({
    USD: 0,
    XAF: 0,
    EUR: 0,
    defaultCurrency: "USD",
    exchangeRates: {
      USD: { XAF: 600, EUR: 0.81 }, // Default rates (will be updated via API)
      EUR: { XAF: 740, USD: 1.24 },
      XAF: { USD: 0.00167, EUR: 0.00135 },
    },
  });

  useEffect(() => {
    const getRates = async () => {
      const data = await fetchRates();
      if (data) {
        setWallet((prev) => ({
          ...prev,
          exchangeRates: {
            USD: { XAF: data.XAF, EUR: data.EUR },
            EUR: { XAF: (1 / data.EUR) * data.XAF, USD: 1 / data.EUR },
            XAF: { USD: 1 / data.XAF, EUR: (1 / data.XAF) * data.EUR },
          },
        }));
      }
    };
    getRates();
  }, []);

  const exchangeCurrency = (from, to, amount) => {
    if (wallet[from] < amount) {
      alert("Insufficient balance!");
      return false; // Prevent exchange if balance is insufficient
    }

    const rate = wallet.exchangeRates[from][to];
    const convertedAmount = amount * rate;

    setWallet((prev) => ({
      ...prev,
      [from]: prev[from] - amount,
      [to]: prev[to] + convertedAmount,
    }));

    return true; // Exchange successful
  };

  const depositCurrency = (currency, amount) => {
    if (amount <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

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

WalletData.propTypes = {
  children: PropTypes.node,
};