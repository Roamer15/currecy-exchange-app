import React from "react";
import ReactDOM from "react-dom/client"; // Use "react-dom/client" for React 18
import App from "./App";
import { WalletProvider } from "./context/AccountContext";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <WalletProvider>
      <App />
    </WalletProvider>
  </React.StrictMode>
);
