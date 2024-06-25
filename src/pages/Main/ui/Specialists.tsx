import { Box, ThemeProvider, Typography } from "@mui/material";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

const Specialists = () => {
    return (
        <ThemeProvider
            theme={{
                palette: {
                    primary: {
                        main: "#EBE4FD",
                        dark: "#0066CC",
                    },
                },
            }}
        >
            <Box
                sx={{
                    width: 340,
                    height: 200,
                    marginTop: 3,
                    borderRadius: 3,
                    bgcolor: "primary.main",
                    "&:hover": {
                        bgcolor: "primary.dark",
                    },
                }}
            >
                <PeopleOutlineOutlinedIcon style={{ color: "#5C1D9A", marginTop: "7", marginLeft: "0.5em", fontSize: "28px" }} />

                <Typography sx={{ marginTop: "0.5em", fontSize: "14px", marginLeft: "1em" }}>Команда специалистов</Typography>
                <Typography sx={{ marginTop: "0em", fontSize: "14px", marginLeft: "1em", color: "#32009C", opacity: "50%" }}>
                    Наши вожатые - лицо лагеря, где каждый прошел тщательную подготовку в нашей школе вожатых умеет не только найти подход к ребятам,
                    но и понимает, что на нём лежит ответственность
                </Typography>
            </Box>
        </ThemeProvider>
    );
};
export default Specialists;
