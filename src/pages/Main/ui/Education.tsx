import { Box, ThemeProvider, Typography } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

const Education = () => {
    return (
        <ThemeProvider
            theme={{
                palette: {
                    primary: {
                        main: "#E4ECFD",
                        dark: "#0066CC",
                    },
                },
            }}
        >
            <Box
                sx={{
                    width: 340,
                    height: 150,
                    marginTop: 3,
                    borderRadius: 3,
                    bgcolor: "primary.main",
                    "&:hover": {
                        bgcolor: "primary.dark",
                    },
                }}
            >
                <SchoolOutlinedIcon style={{ color: "#0066B3", marginTop: "7", marginLeft: "0.5em", fontSize: "28px" }} />

                <Typography sx={{ marginTop: "0.5em", fontSize: "14px", marginLeft: "1em" }}>Образование не для галочки</Typography>
                <Typography sx={{ marginTop: "0em", fontSize: "14px", marginLeft: "1em", color: "#0066B3", opacity: "50%" }}>
                    Профессионально обучаем детей от ВУЗа “СибГУТИ”. Только современный стек технологий, всё лучшее детям
                </Typography>
            </Box>
        </ThemeProvider>
    );
};
export default Education;
