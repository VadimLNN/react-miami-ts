import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import RegisterFormPage from "./pages/registerForm";
import MainPage from "./pages/main";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/register_form" element={<RegisterFormPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
