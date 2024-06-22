import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import DemoTheme from "../providers/ThemeProvider";
import Navbar from "../../shared/ui/Navbar/Navbar";
import CampingSeasons from "../../pages/CampingSeasons/campingSeason";
import { RegisterForm } from "../../pages/Sign-in_Sign-up/registerForm";
import Main from "../../pages/Main/main";
import Profile from "../../pages/Profile/profile";

function BaseLayout() {
    return (
        <ThemeProvider theme={DemoTheme()}>
            <Router>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/sign-in_sign_up" element={<RegisterForm />} />
                    <Route path="/profile" element={<Profile />} />
                    {/* // <Route path="/aboutUs" element={< />} /> */}
                    <Route path="/campingSeasons" element={<CampingSeasons />} />
                    {/* <Route path="/FAQ" element={< />} />
                    <Route path="/feedback" element={< />} />
                    <Route path="/partners" element={< />} />
                    <Route path="/gallery" element={< />} /> */}
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default BaseLayout;
