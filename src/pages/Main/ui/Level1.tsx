import { Box, ThemeProvider, Typography } from "@mui/material";

const Level1 = () => {
    return (
        <ThemeProvider
            theme={{
                palette: {
                    primary: {
                        main: "#E4ECFD",
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
                    display: "inline",
                    bgcolor: "primary.main",
                    "&:hover": {
                        bgcolor: "primary.dark",
                    },
                }}
            >
                <Typography sx={{ fontSize: "12px", textAlignLast: "center", marginTop: "1em", lineHeight: "" }}>
                    Если Вы <br /> только <br />
                    начинаете
                </Typography>
            </Box>
        </ThemeProvider>
    );
};
export default Level1;
