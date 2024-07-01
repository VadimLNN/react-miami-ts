import SearchBar from "material-ui-search-bar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { useState } from "react";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";

const CampingSeasons = () => {
    const [search, setsearch] = useState("");
    const doSomethingWith = () => {
        console.log(`${search} `);
    };

    return (
        <Grid2 container spacing={2}>
            <Grid2 xs={12}>
                <Typography variant="h3" sx={{ fontSize: "1.5em", textAlign: "center", marginTop: "20vw", fontFamily: "Russo One" }}>
                    СМЕНЫ
                </Typography>
            </Grid2>

            <Grid2 xs={10}>
                <SearchBar value={search} onChange={(newValue) => setsearch(String(newValue))} onRequestSearch={() => doSomethingWith()} />
            </Grid2>
            <Grid2 xs={2}>
                <TuneRoundedIcon />
            </Grid2>
            <Card sx={{ maxWidth: 345, borderRadius: 5, background: "#B5C1DB" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://media.istockphoto.com/id/931643150/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=2mn9B_e9N5rr7vkREWEqY34LQzT6nga0poV1lbPwnOE="
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Ассинхронное программирование в C#
                        </Typography>
                        <Typography variant="body2" color="fw-bold">
                            Основы и использование async / await
                        </Typography>

                        <Stack spacing={2} direction="row">
                            <Typography variant="body2" color="text.secondary">
                                Мерген Шыырап
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                19 ноября 2024
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                7 дней
                            </Typography>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid2>
    );
};

export default CampingSeasons;
