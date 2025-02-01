import { useContext } from 'react'
import { WalletContext } from "../context/WalletContext"

function DisplayDefaultCurrency() {
    const { wallet, setDefaultCurrency } = useContext(WalletContext)

    return (
        <div className="select-currency">
            <label>Default Currency</label>
            <select value={wallet.defaultCurrency} onChange={(e) => setDefaultCurrency(e.target.value)}>
                <option value="USD">USD</option>
                <option value="XAF">XAF</option>
                <option value="EUR">EUR</option>
           </select>
        </div>
       
    )
}

export default DisplayDefaultCurrency