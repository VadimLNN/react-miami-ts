import { createTheme } from "@mui/material";
import "@fontsource/roboto/500.css";
const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    display: "flex",
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: "Roboto",
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    color: "black",
                    alignContent: "start",
                },
            },
        },
    },
});

export default theme;
