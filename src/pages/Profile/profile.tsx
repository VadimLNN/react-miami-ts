import { Avatar, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { NavLink } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./ui/profileTheme";

const Profile = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid2 container spacing={2} sx={{ margin: "8px", marginTop: "60px" }}>
                <Grid2 xs={2} alignContent={"center"}>
                    <Avatar sx={{ bgcolor: "grey" }}> P </Avatar>
                </Grid2>
                <Grid2 xs={7}>
                    <Typography> Басарагина Регина Владимировна</Typography>
                </Grid2>

                <Grid2 xs={12}>
                    <Button
                        fullWidth
                        variant="contained"
                        endIcon={<ArrowForwardIosIcon sx={{ position: "absolute", right: "10px", top: "14px" }} />}
                        sx={{
                            background: "#0066B3",
                            height: "45px",
                            borderRadius: 3,
                            marginTop: "20px",
                            fontFamily: " Roboto",
                        }}
                    >
                        Мои данные
                    </Button>
                </Grid2>
                <Grid2 xs={12}>
                    <Button
                        fullWidth
                        variant="contained"
                        endIcon={<ArrowForwardIosIcon sx={{ position: "absolute", right: "10px", top: "14px" }} />}
                        sx={{ background: "#0066B3", boxSizing: "border-box", height: "45px", borderRadius: 3, fontFamily: " Roboto" }}
                    >
                        Данные ребёнка
                    </Button>
                </Grid2>

                <Grid2 xs={12}>
                    <Button
                        fullWidth
                        variant="contained"
                        endIcon={<ArrowForwardIosIcon sx={{ position: "absolute", right: "10px", top: "14px" }} />}
                        sx={{ background: "linear-gradient(to right, #EE2F53, #992037)", height: "45px", borderRadius: 3, marginTop: "20px" }}
                    >
                        Обучение
                    </Button>
                </Grid2>
                <Grid2 xs={12}>
                    <NavLink to="/sign-in_sign_up">
                        <Button variant="text" sx={{ color: "black", marginTop: "15px" }}>
                            Выйти из аккаунта
                        </Button>
                    </NavLink>
                </Grid2>
            </Grid2>
        </ThemeProvider>
    );
};

export default Profile;
