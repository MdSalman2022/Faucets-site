import React, { createContext, useEffect, useState } from 'react'

export const Context = createContext();
const Contexts = ({ children }) => {

    const [currency, setCurrency] = useState("Ethereum Rinkeby")

    const contextInfo = {
        currency,
        setCurrency
    }

    return (
        <Context.Provider value={contextInfo}>
            {children}
        </Context.Provider>
    )
}

export default Contexts;