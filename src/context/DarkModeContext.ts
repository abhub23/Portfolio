import { createContext, useEffect, useState, ReactNode } from "react";

interface DarkModeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);



const DarkModeProvider: any = ({ children }: any) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const storedPreference = localStorage.getItem("theme");
        const prefersDarkMode = storedPreference === "dark";

        setIsDarkMode(prefersDarkMode);

        document.documentElement.classList.toggle("dark", prefersDarkMode);
        document.documentElement.style.overflowY = 'auto';
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => {
            const newValue = !prev;
            localStorage.setItem("theme", newValue ? "dark" : "light");
            document.documentElement.classList.toggle("dark", newValue);
            return newValue;
        });
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeProvider;
