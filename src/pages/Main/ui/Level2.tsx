import { Box, ThemeProvider, Typography } from "@mui/material";

const Level1 = () => {
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
                    width: 100,
                    height: 130,
                    marginTop: 3,
                    borderRadius: 4,
                    bgcolor: "primary.main",
                    "&:hover": {
                        bgcolor: "primary.dark",
                        display: "inline",
                    },
                }}
            >
                <Typography sx={{ fontSize: "12px", textAlignLast: "center", marginTop: "1em", lineHeight: "1" }}>
                    У Вас уже <br /> есть опыт
                </Typography>
            </Box>
        </ThemeProvider>
    );
};
export default Level1;
