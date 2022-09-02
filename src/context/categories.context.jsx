import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utilities/firebase/firebase.utilities.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap ] = useState({});
    const value = { categoriesMap };

    useEffect(() => {
        const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments('categories');
        console.log(categoryMap)
        setCategoriesMap(categoryMap);
        };

        getCategoriesMap();
    }, []);

    return (
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    );
};