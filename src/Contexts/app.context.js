import React, { createContext } from 'react'
import OfferApi from '../datasets/OfferApi'

export const AppContext = createContext({});

export function AppProvider({ children }) {


    const [offerData, setOfferData] = React.useState(OfferApi)
    const [pricePlan, setPricePlan] = React.useState([]);


    const dispatch = function (type, payload) {
        switch (type) {
            case "PRICE": {
                setPricePlan(payload)
                break;
            }
            case 'OFFER': {
                setOfferData(payload)
                break;
            }
        }
    }
    return <AppContext.Provider

        value={{ offerData, pricePlan, dispatch }}>
        {children}
    </AppContext.Provider>
}
export function useAppContext() {
    const context = React.useContext(AppContext);
    if (context === undefined) {
        throw new Error('userAppContext can only used inside AppProdvider')
    }
    return context;
}