import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import DemoTheme from "../providers/ThemeProvider";
import Navbar from "../../shared/ui/Navbar/Navbar";
import CampingSeasons from "../../pages/CampingSeasons/campingSeasons";
import { RegisterForm } from "../../pages/Sign-in_Sign-up/registerForm";
import Main from "../../pages/Main/main";
import Profile from "../../pages/Profile/profile";
import Login from "../../pages/Login/Login";

function BaseLayout() {
    return (
        <ThemeProvider theme={DemoTheme()}>
            <Router>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/sign-in_sign_up" element={<RegisterForm />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/campingSeasons" element={<CampingSeasons />} />
                    {/*Route path="/feedback" element={< />} />
                    <Route path="/partners" element={< />} />
                    <Route path="/gallery" element={< />} /> */}
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default BaseLayout;
