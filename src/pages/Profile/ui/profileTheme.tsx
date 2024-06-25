import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    justifyContent: "flex-start",
                },
            },
        },
    },
    typography: {
        fontFamily: "Roboto",
    },
});

export default theme;
