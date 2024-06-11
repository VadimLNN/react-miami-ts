import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import RegisterFormPage from "./pages/myForm";
// import MainPage from "./pages/main";
// import Navbar from "./components/Navbar/Navbar";
import { MuiRegisterForm } from "./pages/registerForm";

function App() {
    return (
        <div>
            <Router>
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<MuiRegisterForm />} />
                    {/* <Route path="/" element={<MainPage />} /> */}
                    <Route path="/register_form" element={<RegisterFormPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
