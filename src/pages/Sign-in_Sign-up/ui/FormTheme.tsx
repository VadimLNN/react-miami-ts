import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    display: "grid",
                },
            },
        },
    },
});

export default theme;
