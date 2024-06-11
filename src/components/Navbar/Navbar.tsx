import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

export default function Navbar() {
    return (
        <AppBar className="nav" position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Miami
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button color="inherit">Main</Button>
                    <Button color="inherit">Form</Button>
                    <Button color="inherit">Some thing</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
