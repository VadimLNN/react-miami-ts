import { createTheme } from "@mui/material/styles";

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
        },
        palette: {
            primary: {
                main: "#4C7EE0",
            },
            secondary: {
                main: "#E34E30",
            },
        },
    });
};

export default DemoTheme;
