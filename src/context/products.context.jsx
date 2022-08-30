import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utilities/firebase/firebase.utilities.js";

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts ] = useState([]);
    const value = {products};

    useEffect(() => {
        const getCategoriesMap = async () => {
        const categoryMap = getCategoriesAndDocuments();
        console.log(categoryMap);
        };

        getCategoriesMap();
    }, []);

    return (
        <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
    );
};