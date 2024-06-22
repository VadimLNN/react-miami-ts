// import { useEffect } from "react";
// import { createPost, getImg, getPosts, getPostsController } from "./api/requests";
import { Button, Card, CardMedia, ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import img_tents from "../../shared/ui/imgs/tents.png";
import img_peop1 from "../../shared/ui/imgs/peop1.png";
import img_peop2 from "../../shared/ui/imgs/peop2.png";
import img_peop3 from "../../shared/ui/imgs/peop3.png";
import { ThemeProvider } from "@emotion/react";
import theme from "./ui/mainTheme";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Main = () => {
    // useEffect(() => {
    //     //promis style
    //     //getPosts.then((res) => console.log(res)).catch((err) => console.log(err));

    //     //async await style
    //     getPosts();
    //     getPostsController.abort();
    //     createPost();
    //     getImg();
    // });

    const itemData = [img_tents, img_tents, img_tents, img_tents, img_tents];

    return (
        <>
            <Stack sx={{ padding: "8px" }}>
                <CardMedia component="img" height="310" image={img_tents} sx={{ borderRadius: 5 }} />

                <Typography variant="h4" sx={{ marginTop: "1em" }}>
                    Погрузись в индустрию IT с детства 🔥
                </Typography>

                <Typography sx={{ fontSize: "10pt", marginTop: "1em", lineHeight: 1.5 }}>
                    Уникальная платформа- детский лагерь сочетается с учебой. Подарите вашему ребенку незабываемые впечатления, новые знания и яркие
                    воспоминания - все это доступно на одной платформе. Давайте создадим незабываемое лето вместе!
                </Typography>

                <Button variant="contained" sx={{ width: "241px", marginTop: "1em" }}>
                    Оставить заявку
                </Button>

                <Card sx={{ marginTop: "5em" }}>
                    <ThemeProvider theme={theme}>
                        <CardMedia component="img" height="160" src={img_peop1} />
                        <CardMedia component="img" height="160" image={img_peop2} />
                        <CardMedia component="img" height="160" image={img_peop3} />
                    </ThemeProvider>
                </Card>

                <Typography variant="h4" sx={{ marginTop: "1em" }}>
                    О сменах
                </Typography>

                <Typography sx={{ fontSize: "11pt", marginTop: "1em", lineHeight: 1.5 }}>
                    Мы специализируемся на организации развивающего отдыха и проведении обучающих курсах для детей возрастом от 13 до 18 лет.
                    <br /> <br /> Здоровый отдых Ваших детей - это наша профессия, которую можно обрести только благодаря опыту креативности, желанию
                    создавать что-то интересное и полезное. У нас Вы можете купить путевку в детский лагеря во время каникул и подобрать увлекательную
                    программу для личностного развитиятя ребенка в один клик.
                </Typography>

                <Button variant="contained" sx={{ width: "242px", marginTop: "1em" }}>
                    Команда преподавателей
                </Button>

                <Typography variant="h5" sx={{ marginTop: "1em" }}>
                    При поддержке
                </Typography>

                <ImageList sx={{ width: 360, height: 50 }} cols={5}>
                    {itemData.map((item) => (
                        <ImageListItem>
                            <CardMedia component="img" height="50" width="50" src={item} />
                        </ImageListItem>
                    ))}
                </ImageList>

                <Grid2></Grid2>
            </Stack>
        </>
    );
};

export default Main;
