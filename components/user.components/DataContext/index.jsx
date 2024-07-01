import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const DataContext = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [state, setState] = useState('hiiiiiiiiiiiiiiiiii!!!!!!!!!!!!!!!');

    return (
        <MyContext.Provider value={{ state, setState, isLoggedIn, setIsLoggedIn }}>
            {children}
        </MyContext.Provider>
    );
};
