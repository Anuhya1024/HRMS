import React, {createContext, useContext, useState} from 'react';


const StateContext = createContext();

const initialState = {
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [scope, setScope] = useState('');

    const setCurrentScope = (value) => {
        setScope(value);
        localStorage.setItem('currentScope', value);
      };

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true});
    }


    return (
        <StateContext.Provider 
        value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            isSidebarOpen,
            setIsSidebarOpen,
            scope,
            setScope,
            setCurrentScope,
            }}>
            {children}
        </StateContext.Provider>
    )
}  

export const useStateContext = () => useContext(StateContext);






