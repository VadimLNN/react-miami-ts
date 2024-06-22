import { createTheme } from "@mui/material";
// import RussoOne from "../fonts/RussoOne-Regular.ttf";
// import "../fonts/1_MinecraftRegular1.otf";
// import "../fonts/2_MinecraftItalic1.otf";
// import "../fonts/3_MinecraftBold1.otf";
// import MinecraftBold from "../fonts/4_MinecraftBoldItalic1.otf";

const theme = createTheme({
    typography: {
        fontFamily: ["Russo One", "sans-serif"].join(","),
        // fontSize: 12,
    },
});

export default theme;
