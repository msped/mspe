import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import CustomTheme from "./theme";

import Header from "./components/Header";
import Home from "./pages/Home";
import Development from "./pages/Development";
import CV from "./pages/CV";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Alerts from "./components/Alerts";

function App() {
    return (
        <HelmetProvider>
            <ThemeProvider theme={CustomTheme()}>
                <CssBaseline />
                <Header />
                <Alerts />
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/dev" element={<Development />} />
                    <Route path="/cv" element={<CV />} />
                </Routes>
                <ScrollToTop />
                <Footer />
            </ThemeProvider>
        </HelmetProvider>
    );
}

export default App;
