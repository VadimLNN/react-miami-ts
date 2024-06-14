import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <AppBar>
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Miami
                </Typography>
                <Stack direction="row" spacing={2}>
                    <NavLink to="/mainForm">
                        <Button color="inherit">MainForm</Button>
                    </NavLink>
                    <NavLink to="/secondForm">
                        <Button color="inherit">SecondForm</Button>
                    </NavLink>
                    <NavLink to="/">
                        <Button color="inherit">Some thing</Button>
                    </NavLink>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
