import SearchBar from "material-ui-search-bar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
import { useState } from "react";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import CampSeason from "./ui/seasonCard";

const CampingSeasons = () => {
    const [search, setsearch] = useState("");
    const doSomethingWith = () => {
        console.log(`${search} `);
    };

    return (
        <Grid2 container spacing={3}>
            <Grid2 xs={12}>
                <Typography variant="h3" sx={{ fontSize: "1.5em", textAlign: "center", marginTop: "20vw", fontFamily: "Russo One" }}>
                    СМЕНЫ
                </Typography>
            </Grid2>

            <Grid2 xs={10}>
                <SearchBar value={search} onChange={(newValue) => setsearch(String(newValue))} onRequestSearch={() => doSomethingWith()} />
            </Grid2>
            <Grid2 xs={2}>
                <TuneRoundedIcon sx={{ fontSize: "8vw", marginTop: "3vw" }} />
            </Grid2>

            <CampSeason
                title={"Pro лето"}
                text={"Основы веб-дизайна Использование + основы async / await Анимация"}
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
