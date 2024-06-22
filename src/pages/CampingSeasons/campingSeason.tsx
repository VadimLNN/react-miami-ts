import SearchBar from "material-ui-search-bar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import theme from "./ui/russoOneFontTheme";

const CampingSeasons = () => {
    const [state, setState] = useState("");
    const doSomethingWith = () => {
        console.log("Ы ");
    };
    return (
        <Grid2 container spacing={2}>
            <Grid2 xs={12}>
                <ThemeProvider theme={theme}>
                    <Typography variant="h3">СМЕНЫ</Typography>
                </ThemeProvider>
            </Grid2>

            <Grid2>
                <SearchBar value={state} onChange={(newValue) => setState(String(newValue))} onRequestSearch={() => doSomethingWith()} />
            </Grid2>
            <Grid2>
                <TuneIcon />
            </Grid2>
        </Grid2>
    );
};

export default CampingSeasons;
