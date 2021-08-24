// libraries:
import {createContext, useState} from "react";
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Contexts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// layouts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// components:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// project:
// ============================================================================

export const SettingsContext = createContext({lang: 'en'})


export function SettingsProvider({children}) {
    const [language, setLanguage] = useState('en')

    function changeLanguage(value) {
        setLanguage(value)
    }


    return <SettingsContext.Provider value={{
        lang: language,
        changeLanguage: changeLanguage
    }}>
        {children}
    </SettingsContext.Provider>
}