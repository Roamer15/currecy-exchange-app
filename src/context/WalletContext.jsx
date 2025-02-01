import PropTypes from 'prop-types'
import { createContext, useState, useEffect } from 'react'
import { fetchRates } from '../service/rates'

const WalletContext = createContext()

export const WalletData = ({ children }) => {
    const [exchangeRates, setexchangeRates] = useState()

    useEffect(() => {
        getRates()
    },[])
    
    const getRates = () => {
        fetchRates().then(data => {
            setexchangeRates(data)
        })
    }


    const EUR_TO_XAF = (1/exchangeRates.EUR) * exchangeRates.XAF
    const XAF_TO_EUR = (1/exchangeRates.XAF) * exchangeRates.EUR
    const EUR_TO_USD = 1/exchangeRates.EUR
    const XAF_TO_USD = 1/exchangeRates.USD

    const [wallet, setWallet] = useState(
        {
            USD: 0,
            XAF: 0,
            EUR: 0,
            defaultCurreny: 'USD',
            exchangeRates: {
                USD: {XAF: exchangeRates.XAF, EUR: exchangeRates.EUR},
                EUR: {XAF: EUR_TO_XAF, USD: EUR_TO_USD},
                XAF: {USD: XAF_TO_USD, EUR: XAF_TO_EUR}
            }
        }
    )

    const exchangeCurrency = (from, to, amount) => {
        const rate = wallet.exchangeRates[from][to]
        const convertedAmount = amount * rate
    }

    return (
        <WalletContext.Provider value = {{wallet, setWallet}}>
            { children }
        </WalletContext.Provider>
    )
}

WalletData.propTypes = {
    children: PropTypes.node
}