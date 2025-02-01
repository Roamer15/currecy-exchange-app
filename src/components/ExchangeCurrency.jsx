import { useContext, useState } from "react"
import { WalletContext } from "../context/WalletContext"

function ExchangeCurrency() {
    const { wallet, exchangeCurrency } = useContext(WalletContext)
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('EUR')
    const [amount, setAmount] = useState(0)

    const handleExchange = (e) => {
        e.preventDefault()
        if(amount > wallet[fromCurrency]) {
            alert('Insufficient balance')
        }
        exchangeCurrency(fromCurrency, toCurrency, amount)
        setAmount(0)
    }


    return (
        <div className="exchange">
            <h2>Exchange your currency</h2>
            <form onSubmit={handleExchange}>
            <div>
                <label >From:</label>
                <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="XAF">XAF</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
           
           <div>
                <label>To:</label>
                <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="XAF">XAF</option>
                    <option value="EUR">EUR</option>
                </select>
           </div>
         
            <div>
               <label>Amount</label>
               <input type="number" 
                   value={amount}
                   onChange={(e) => setAmount(parseFloat(e.target.value))}
                   min='0'
                   required
                />
           </div>
           
           <button type="submit">Exchange</button>
            </form>
           
        </div>
    )
}

export default ExchangeCurrency