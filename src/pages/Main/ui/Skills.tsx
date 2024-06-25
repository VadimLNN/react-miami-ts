import { Box, ThemeProvider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Skills = () => {
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
                    height: 500,
                    marginTop: 3,
                    borderRadius: 4,

                    background: "linear-gradient(to right, #3E7CFE, #2850A3)",
                }}
            >
                <Typography sx={{ fontSize: "32px", marginTop: "1em", lineHeight: "1", color: "white" }}>Подтверждение Ваших навыков</Typography>
                <Typography sx={{ fontSize: "14px", marginTop: "1em", lineHeight: "1.5", color: "white" }}>
                    В конце обучения получите сертификат установленного образца. Мы обучаем по государственной лицензии №112ЛО57_56
                </Typography>
            </Box>
        </ThemeProvider>
    );
};
export default Skills;
