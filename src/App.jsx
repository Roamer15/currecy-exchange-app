import { WalletData } from './context/WalletContext'
import DisplayDefaultCurrency from './components/DisplayDefaultCurrency'

function App() {

  return (
    <WalletData>
      <h1>Currency Exchange App</h1>
      <DisplayDefaultCurrency />
    </WalletData>
  )
}

export default App
