import axios from 'axios';
import React, { useContext, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

    const fetchMeals = async(url) => {
        try {
            const response = await axios(url);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    } 

    useEffect(() => {
        fetchMeals(allMealsUrl);
    }, []);

    return (
        <AppContext.Provider value={{ name: 'haz', role: 'student' }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };