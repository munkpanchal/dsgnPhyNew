import ThemeContext from "./theme-context.js";
import {useState} from "react";
import themeContext from "./theme-context.js";

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(false)
    return (<ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>)
}

export default ThemeContextProvider;