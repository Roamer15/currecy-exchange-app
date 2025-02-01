import { WalletData } from './context/WalletContext'
import DisplayDefaultCurrency from './components/DisplayDefaultCurrency'
import CurrencyBalanceCard from './components/CurrencyBalanceCard'
import ExchangeCurrency from './components/ExchangeCurrency'
import AccountDeposit from './components/AccountDeposit'
import AccountBalance from './components/AccountBalance'

function App() {

  return (
    <WalletData>
      <h1>Currency Exchange App</h1>
      <DisplayDefaultCurrency />
      <AccountBalance />
      <CurrencyBalanceCard currency='USD'/>
      <CurrencyBalanceCard currency='EUR'/>
      <CurrencyBalanceCard currency='XAF'/>
      <ExchangeCurrency />
      <AccountDeposit />
    </WalletData>
  )
}

export default App
