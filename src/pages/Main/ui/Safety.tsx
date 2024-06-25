import { Box, ThemeProvider, Typography } from "@mui/material";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";

const Safety = () => {
    return (
        <ThemeProvider
            theme={{
                palette: {
                    primary: {
                        main: "#E4FDEF",
                        dark: "#0066CC",
                    },
                },
            }}
        >
            <Box
                sx={{
                    width: 340,
                    height: 100,
                    marginTop: 3,
                    borderRadius: 3,
                    bgcolor: "primary.main",
                    "&:hover": {
                        bgcolor: "primary.dark",
                    },
                }}
            >
                <HealthAndSafetyOutlinedIcon style={{ color: "green", marginTop: "7", marginLeft: "0.3em", fontSize: "28px" }} /> <br />
                <Typography sx={{ marginTop: "0.5em", fontSize: "14px", marginLeft: "1em" }}>Безопасность детей</Typography>
                <Typography sx={{ marginTop: "0em", fontSize: "14px", marginLeft: "1em", color: "#00866E", opacity: "50%" }}>
                    Наш приоритет
                </Typography>
            </Box>
        </ThemeProvider>
    );
};
export default Safety;
