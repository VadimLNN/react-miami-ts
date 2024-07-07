import { Typography, Box, Stack, Button, CardMedia } from "@mui/material";
const Title = () => {
    return (
        <Box sx={{ width: "100%", height: "calc(100% - 170px)", overflow: "auto", background: "#FFFFFF", borderRadius: 5 }}>
            <Stack sx={{ padding: "2vw" }}>
                <CardMedia component="img" height="300" image={"/src/shared/ui/imgs/ptrs.jpg"} sx={{ borderRadius: 5 }} />
                <Typography variant="h4" sx={{ marginTop: "1em" }}>
                    {" "}
                    Смены для вашего лагеря
                </Typography>
                <Typography sx={{ fontSize: "10.5pt", marginTop: "1em", lineHeight: 1.5, fontFamily: "Roboto" }}>
                    Возьмем на себя образовательную функцию и приведём дела в творческий порядок
                </Typography>
                <Box textAlign="center">
                    <Button
                        variant="contained"
                        sx={{
                            width: "70vw",
                            marginTop: "2em",
                            background: "#0B1F33",
                            borderRadius: 3,
                            fontSize: "14px",
                            fontFamily: "Roboto",
                            marginBottom: "10vw",
                        }}
                    >
                        Создать смену
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
};

export default Title;
