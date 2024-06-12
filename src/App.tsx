import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import "./App.css";

import { FormDemo } from "./pages/myForm";
// import MainPage from "./pages/main";
// import Navbar from "./components/Navbar/Navbar";
import { MuiRegisterForm } from "./pages/registerForm";
import DemoTheme from "./components/DemoTheme/demoTheme";

function App() {
    return (
        <ThemeProvider theme={DemoTheme()}>
            <Router>
                {/* <Navbar /> */}
                <Routes>
                    {/* <Route path="/" element={<MainPage />} /> */}
                    <Route path="/" element={<MuiRegisterForm />} />
                    <Route path="/register_form" element={<FormDemo />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
