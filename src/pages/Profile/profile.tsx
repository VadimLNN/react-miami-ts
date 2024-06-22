import { Avatar, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { NavLink } from "react-router-dom";

const Profile = () => {
    return (
        <Grid2 container spacing={2} sx={{ margin: "8px", marginTop: "60px" }}>
            <Grid2 xs={2} alignContent={"center"}>
                <Avatar sx={{ bgcolor: "grey" }}> P </Avatar>
            </Grid2>
            <Grid2 xs={7}>
                <Typography> Басарагина Регина Владимировна</Typography>
            </Grid2>

            <Grid2 xs={12}>
                <Button fullWidth variant="contained" endIcon={<ArrowForwardIosIcon />}>
                    Мои данные
                </Button>
            </Grid2>
            <Grid2 xs={12}>
                <Button fullWidth variant="contained" endIcon={<ArrowForwardIosIcon />}>
                    Данные ребёнка
                </Button>
            </Grid2>

            <Grid2 xs={12}>
                <Button fullWidth variant="contained" endIcon={<ArrowForwardIosIcon />}>
                    Обучение
                </Button>
            </Grid2>
            <Grid2 xs={12}>
                <NavLink to="/sign-in_sign_up">
                    <Button variant="text">Выйти из аккаунта</Button>
                </NavLink>
            </Grid2>
        </Grid2>
    );
};

export default Profile;
