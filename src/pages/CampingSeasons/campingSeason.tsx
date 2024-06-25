import SearchBar from "material-ui-search-bar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Card, CardActionArea, CardContent, CardMedia, Stack, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import theme from "./ui/russoOneFontTheme";

const CampingSeasons = () => {
    const [state, setState] = useState("");
    const doSomethingWith = () => {
        console.log(`${state} `);
    };
    return (
        <Grid2 container spacing={2}>
            <Grid2 xs={12}>
                <ThemeProvider theme={theme}>
                    <Typography variant="h3">СМЕНЫ</Typography>
                </ThemeProvider>
            </Grid2>

            <Grid2>
                <SearchBar value={state} onChange={(newValue) => setState(String(newValue))} onRequestSearch={() => doSomethingWith()} />
            </Grid2>
            <Grid2>
                <TuneIcon />
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
