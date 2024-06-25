import { Box, ThemeProvider, Typography } from "@mui/material";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";

const Communication = () => {
    return (
        <ThemeProvider
            theme={{
                palette: {
                    primary: {
                        main: "#FDE4EA",
                        dark: "#0066CC",
                    },
                },
            }}
        >
            <Box
                sx={{
                    width: 340,
                    height: 120,
                    marginTop: 3,
                    borderRadius: 3,
                    bgcolor: "primary.main",
                    "&:hover": {
                        bgcolor: "primary.dark",
                    },
                }}
            >
                <Diversity1OutlinedIcon style={{ color: "#EE2F53", marginTop: "7", marginLeft: "0.5em", fontSize: "28px" }} />

                <Typography sx={{ marginTop: "0.5em", fontSize: "14px", marginLeft: "1em" }}>Общение</Typography>
                <Typography sx={{ marginTop: "0em", fontSize: "14px", marginLeft: "1em", color: "#B30000", opacity: "50%" }}>
                    Дети поддерживают связь после смены, а мы стараемся способствовать этому
                </Typography>
            </Box>
        </ThemeProvider>
    );
};
export default Communication;
