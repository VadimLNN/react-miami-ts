import { Box, CardActionArea, CardMedia, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

interface FilterBoxProps {
    img: string;
    text: string;
}

const FilterBox = (props: FilterBoxProps): JSX.Element => (
    <Box
        sx={{
            height: "22vw",
            width: "22vw",
            border: "2px blue solid",
            borderRadius: 2,
            margin: "2vw",
            padding: "3vw",
            overflow: "hidden",
        }}
    >
        <CardActionArea>
            <Grid2>
                <CardMedia sx={{ margin: "auto", marginTop: "4vw" }} component="img" image={`/src/shared/ui/imgs/${props.img}`} />

                <Typography> {props.text} </Typography>
            </Grid2>
        </CardActionArea>
    </Box>
);

export default FilterBox;
