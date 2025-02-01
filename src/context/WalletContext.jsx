import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

const WalletContext = createContext()

export const WalletData = ({ children }) => {
    const [rates, setRates] = useState()
    return (
        <WalletContext.Provider values = {{rates, setRates}}>
            { children }
        </WalletContext.Provider>
    )
}

WalletData.propTypes = {
    children: PropTypes.node
}