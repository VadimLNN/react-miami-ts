import { createTheme } from "@mui/material/styles";
import "@fontsource/roboto/500.css";

const DemoTheme = () => {
    return createTheme({
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        display: "flex",
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
        palette: {
            primary: {
                main: "#4C7EE0",
            },
            secondary: {
                main: "#E34E30",
            },
        },
        typography: {
            fontFamily: "Roboto",
        },
    });
};

export default DemoTheme;
