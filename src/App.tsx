import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import MainPage from "./pages/main";
import Navbar from "./components/Navbar/Navbar";
import { MuiRegisterForm } from "./pages/registerForm";
import DemoTheme from "./components/DemoTheme/demoTheme";
import CampingSeasons from "./pages/campingSeason";
import "./App.css";

function App() {
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

export default App;
