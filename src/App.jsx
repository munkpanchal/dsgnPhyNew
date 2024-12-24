import ThemeContextProvider from "./context/ThemeContextProvider.jsx";
import Header from "./components/shared/Header.jsx";

function App() {


    return (
        <>
            <ThemeContextProvider>
                <Header/>
            </ThemeContextProvider>
        </>
    );
}

export default App;
