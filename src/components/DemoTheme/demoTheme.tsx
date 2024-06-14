import { createTheme } from "@mui/material/styles";

const DemoTheme = () => {
    return createTheme({
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        margin: "0px",
                        padding: "0.5em",
                        position: "static",
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        display: "grid",
                        // gridRowGap: "20px",
                        // padding: "20px",
                        // margin: "10px 300px",
                        flexGrow: 1,
                        width: 500,
                        gridRowGap: "20px",
                        padding: "2em",
                        margin: "2em",
                    },
                },
            },
            // MuiTypography: {
            //     styleOverrides: {
            //         root: {
            //             color: "inherit",
            //         },
            //     },
            // },
            MuiButton: {
                styleOverrides: {
                    root: {
                        color: "white",
                        size: "large",
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
