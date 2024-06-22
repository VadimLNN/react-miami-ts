import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import DemoTheme from "../providers/ThemeProvider";
import Navbar from "../../shared/ui/Navbar";
import CampingSeasons from "../../pages/CampingSeasons/campingSeason";
import { MuiRegisterForm } from "../../pages/Sign-in_Sign-up/registerForm";
import MainPage from "../../pages/Main/main";

function BaseLayout() {
    return (
        <ThemeProvider theme={DemoTheme()}>
            <Router>
                <Navbar />

                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/mainform" element={<MuiRegisterForm />} />
                    <Route path="/campingSeasons" element={<CampingSeasons />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default BaseLayout;
