import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    borderRadius: 15,
                    // border: "20px solid red",
                },
            },
        },
    },
});

export default theme;
