import { createContext } from 'react';
import all_prodducts from "../assets/all_products"

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = {all_prodducts};

    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider