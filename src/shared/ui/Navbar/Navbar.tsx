import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    ThemeProvider,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    SwipeableDrawer,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import React from "react";
import theme from "./NavTheme";

export default function Navbar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 360 }} role="presentation" onClick={toggleDrawer(false)}>
            <IconButton onClick={toggleDrawer(false)} sx={{ marginTop: "10px", marginLeft: "10px" }}>
                <ClearIcon fontSize="medium" />
            </IconButton>
            <List>
                <ListItem key={1} disablePadding>
                    <ListItemButton>
                        <NavLink to="/profile" style={{ textDecoration: "none" }}>
                            <ListItemText primary={"Войти в личный кабинет"} />
                        </NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem key={2} disablePadding>
                    <ListItemButton>
                        <NavLink to="/aboutUs" style={{ textDecoration: "none" }}>
                            <ListItemText primary={"О нас"} />
                        </NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem key={3} disablePadding>
                    <ListItemButton>
                        <NavLink to="/campingSeasons" style={{ textDecoration: "none" }}>
                            <ListItemText primary={"Смены"} />
                        </NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem key={4} disablePadding>
                    <ListItemButton>
                        <NavLink to="/FAQ" style={{ textDecoration: "none" }}>
                            <ListItemText primary={"Часто задаваемые вопросы"} />
                        </NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem key={5} disablePadding>
                    <ListItemButton>
                        <NavLink to="/feedback" style={{ textDecoration: "none" }}>
                            <ListItemText primary={"Отзывы"} />
                        </NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem key={6} disablePadding>
                    <ListItemButton>
                        <NavLink to="/gallery" style={{ textDecoration: "none" }}>
                            <ListItemText primary={"Галерея"} />
                        </NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem key={7} disablePadding>
                    <ListItemButton>
                        <NavLink to="/partners" style={{ textDecoration: "none" }}>
                            <ListItemText primary={"Партнёрам"} />
                        </NavLink>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <ThemeProvider theme={theme}>
            <AppBar>
                <Toolbar>
                    <IconButton onClick={toggleDrawer(true)} edge="start" color="inherit" aria-label="logo">
                        <MenuIcon fontSize="medium" />
                    </IconButton>

                    <SwipeableDrawer open={open} onOpen={toggleDrawer(true)} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </SwipeableDrawer>

                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Miami
                    </Typography>

                    <IconButton color="inherit">
                        <NotificationsNoneIcon fontSize="medium" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}
