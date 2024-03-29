import { FC, ReactNode, createContext, useContext, useState } from "react";

type Theme = 'light' | 'dark';

interface IAppContext {
    toggleTheme: () => void;
    isDarkTheme: () => boolean;
}

export const AppConext = createContext<IAppContext>({
    toggleTheme: () => {},
    isDarkTheme: () => false,
})

interface IAppProveder {
    children: ReactNode;
}

export const AppProvider: FC<IAppProveder> = ({children}) => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
    const isDarkTheme = () => theme === 'dark';

    return(
        <AppConext.Provider value={{toggleTheme, isDarkTheme}}>
            {children}
        </AppConext.Provider>
    )
}

export const useAppContext = () => useContext(AppConext)