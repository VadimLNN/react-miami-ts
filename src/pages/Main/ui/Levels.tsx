import { Box, CardMedia, Typography } from "@mui/material";

interface Level {
    text: string;
    imgName: string;
}

const Levels = (props: Level): JSX.Element => (
    <Box
        sx={{
            padding: "1.3em",
            borderRadius: 4,
            bgcolor: "hsla(221, 86%, 94%, 1)",
        }}
    >
        <Typography sx={{ fontSize: "12px", textAlignLast: "center", lineHeight: "1" }}>{props.text}</Typography>
        <CardMedia
            image={`/src/shared/ui/imgs/${props.imgName}`}
            component="img"
            height="45"
            sx={{ borderRadius: 5, objectFit: "contain", marginTop: "0.3em" }}
        />
    </Box>
);
export default Levels;
