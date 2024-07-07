import { Typography, Box, Card, Stack } from "@mui/material";
import Title from "./ui/Title";
// import Causes from "./ui/causess";
import Form from "./ui/Contacts";
import Causes from "./ui/Causes";

const Parthners = () => {
    return (
        <Box sx={{ backgroundColor: "#0B1F33", margin: "0vw -2vw -2vw -2vw" }}>
            <Title />

            <Typography variant="h5" sx={{ marginTop: "80px", textAlign: "center", color: "#FFFFFF", marginBottom: "1em" }}>
                Зовите нас когда
            </Typography>

            <Causes />

            {/* <Card sx={{height: 100, color: "red"}}>
                <Stack direction={"row"}>
                    <Typography variant="h4">1</Typography>
                <Typography>Нужно прокачать детей и вернуть им желание творить</Typography>
            </Stack></Card> */}

            <Typography
                variant="h3"
                sx={{
                    fontSize: "1.5em",
                    textAlign: "left",
                    marginTop: "20vw",
                    fontFamily: "Russo One",
                    color: "#FFFFFF",
                    marginLeft: "1em",
                    lineHeight: "1.3",
                }}
            >
                50+ компаний <br /> присоединились <br /> к СМЕНАМ и двигают <br /> индустрию
            </Typography>
            <Typography sx={{ fontSize: "10.5pt", marginTop: "1em", lineHeight: 1.5, fontFamily: "Roboto", color: "#FFFFFF", marginLeft: "2em" }}>
                300+ учеников, которые поймали интерес <br /> и теперь не могут остановиться
            </Typography>

            <Typography variant="h5" sx={{ marginTop: "80px", textAlign: "center", color: "#FFFFFF", marginBottom: "1em" }}>
                Наши коллабы в СМИ
            </Typography>
            <Form />
        </Box>
    );
};

export default Parthners;
