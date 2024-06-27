import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                },
            },
        },
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    borderRadius: 15,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    padding: "0.7em",
                },
            },
        },
    },
});

export default theme;
