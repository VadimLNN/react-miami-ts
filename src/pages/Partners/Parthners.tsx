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

            <Causes num={1} text={"Нужно прокачать детей и вернуть им желание творить"} />
            <Causes num={2} text={"Хотите погрузить народ в индустрию IT c детства "} />
            <Causes num={3} text={"Требуется креативный и полезный тимбилдинг"} />

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
            <Typography sx={{ fontSize: "10.5pt", marginBlock: "5vh", lineHeight: 1.5, fontFamily: "Roboto", color: "#FFFFFF", marginLeft: "2em" }}>
                300+ учеников, которые поймали интерес <br /> и теперь не могут остановиться
            </Typography>

            {/* <Typography variant="h5" sx={{ marginTop: "80px", textAlign: "center", color: "#FFFFFF", marginBottom: "1em" }}>
                Наши коллабы в СМИ
            </Typography> */}

            <Form />
            <Box sx={{ height: "9vh" }}></Box>
        </Box>
    );
};

export default Parthners;
