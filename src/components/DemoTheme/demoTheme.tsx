import { createTheme } from "@mui/material/styles";

const DemoTheme = () => {
    return createTheme({
        components: {},
        palette: {
            primary: {
                main: "#E0514F",
            },
            secondary: {
                main: "#398BE3",
                light: "#C5D7FF",
                contrastText: "#ffffff",
            },
        },
    });
};

export default DemoTheme;
