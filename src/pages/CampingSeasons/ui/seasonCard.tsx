import { Box, CardActionArea, CardMedia, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

interface SeasonProps {
    title: string;
    text: string;
    tegs: string[];
    img: string;
    color: string;
}

const CampSeason = (props: SeasonProps): JSX.Element => (
    <Box sx={{ borderRadius: 5, background: `${props.color}`, margin: "5vw" }}>
        <CardActionArea>
            <Grid2 container sx={{ padding: "2vw" }}>
                <Grid2 xs={6}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="fw-bold">
                            {props.text}
                        </Typography>
                    </CardContent>
                </Grid2>
                <Grid2 xs={6}>
                    <CardMedia sx={{ margin: "auto", marginTop: "4vw" }} component="img" image={`/src/shared/ui/imgs/${props.img}`} />
                </Grid2>
                <Stack direction={"row"} useFlexGap flexWrap="wrap">
                    {props.tegs.map((item) => (
                        <Typography
                            sx={{
                                fontSize: "10pt",
                                border: "1px hsla(210, 65%, 12%, 1) solid",
                                borderRadius: "10px",
                                paddingInline: "4.5vw",
                                margin: "1vw",
                            }}
                        >
                            {item}
                        </Typography>
                    ))}
                </Stack>
            </Grid2>
        </CardActionArea>
    </Box>
);

export default CampSeason;
