import SearchBar from "material-ui-search-bar";
import { Box, IconButton, Stack, SwipeableDrawer, Typography } from "@mui/material";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ClearIcon } from "@mui/x-date-pickers/icons";
import React from "react";
import { useState } from "react";
import CampSeason from "./ui/seasonCard";

const CampingSeasons = () => {
    const [search, setsearch] = useState("");
    const doSomethingWith = () => {
        console.log(`${search} `);
    };

    const tagList = ["Начать бесплатно", "С нуля", "С опытом"];

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    const DrawerTags = (
        <Box sx={{ height: "85vh", borderRadius: 8 }} role="presentation" onClick={toggleDrawer(false)}>
            <Grid2 container>
                <Grid2 xs={10}>
                    <Typography textAlign={"center"} sx={{ marginLeft: "15vw" }}>
                        Уровень
                    </Typography>
                </Grid2>
                <Grid2 xs={2}>
                    <IconButton onClick={toggleDrawer(false)} sx={{ marginTop: "10px", marginLeft: "10px" }}>
                        <ClearIcon fontSize="medium" />
                    </IconButton>
                </Grid2>
                <Grid2 xs={12}>
                    <Typography textAlign={"center"}>Направление</Typography>
                </Grid2>
                <Stack> </Stack>
                <Grid2 xs={12}>
                    <Typography textAlign={"center"}>Стоимость</Typography>
                </Grid2>
                <Stack></Stack>
                <Grid2 xs={12}>
                    <Typography textAlign={"center"}>Длительность</Typography>
                </Grid2>
                <Stack></Stack>
            </Grid2>
        </Box>
    );

    return (
        <Grid2 container spacing={2}>
            <Grid2 xs={12}>
                <Typography variant="h3" sx={{ fontSize: "1.5em", textAlign: "center", marginTop: "20vw", fontFamily: "Russo One" }}>
                    СМЕНЫ
                </Typography>
            </Grid2>
            <Grid2 xs={10}>
                <SearchBar
                    style={{ marginLeft: "3vw", border: "1px solid", borderRadius: "10px" }}
                    value={search}
                    onChange={(newValue) => setsearch(String(newValue))}
                    onRequestSearch={() => doSomethingWith()}
                />
            </Grid2>
            <Grid2 xs={2}>
                <IconButton onClick={toggleDrawer(true)} sx={{ marginLeft: "-3vw" }}>
                    <TuneRoundedIcon sx={{ fontSize: "10vw", color: "hsla(210, 65%, 12%, 1)" }} />
                </IconButton>
                <SwipeableDrawer anchor={"bottom"} open={open} onOpen={toggleDrawer(true)} onClose={toggleDrawer(false)}>
                    {DrawerTags}
                </SwipeableDrawer>
            </Grid2>
            <Stack direction={"row"} useFlexGap flexWrap="wrap" sx={{ marginLeft: "4vw" }}>
                {tagList.map((tag) => (
                    <Typography
                        sx={{
                            fontSize: "10pt",
                            border: "1px hsla(210, 65%, 12%, 1) solid",
                            borderRadius: "20px",
                            padding: "2vw",
                            margin: "1vw",
                        }}
                    >
                        {tag}
                    </Typography>
                ))}
            </Stack>
            <CampSeason
                title={"Pro лето"}
                text={"Основы веб-дизайна Использование + основы Анимации"}
                tegs={["Бесплатно", "Анимация", "Дезигн"]}
                img={"season_cat.png"}
                color={"hsla(148, 86%, 94%, 1)"}
            />
            <CampSeason
                title={"Pro лето"}
                text={"Основы React+Vite+TS / Разработка магазина фингербордов"}
                tegs={["Бесплатно", "Программирование", "TS"]}
                img={"season_laptop.png"}
                color={"hsla(256, 86%, 94%, 1)"}
            />
            <CampSeason
                title={"Pro лето"}
                text={"Основы выстеплений, переговоров, сделок и продажи себя как спеца"}
                tegs={["Платно", "Soft Skills", "Presentation"]}
                img={"season_roK.png"}
                color={"hsla(346, 86%, 94%, 1)"}
            />
        </Grid2>
    );
};

export default CampingSeasons;
