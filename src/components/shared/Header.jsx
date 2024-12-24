import {useContext, useEffect} from "react";
import ThemeContext from "../../context/theme-context.js";


const Header = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const handleThemeChange = () => {

        setTheme(!theme);

    }

    useEffect(() => {
        console.log(theme);
    }, [theme]);

    return (<div>


        <div className={`w-20 h-20 ${theme ? "bg-slate-900 text-slate-100" : "text-slate-900 bg-slate-200"}`}>

        </div>

    </div>);
};

export default Header;