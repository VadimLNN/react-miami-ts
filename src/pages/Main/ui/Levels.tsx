import { Box, CardMedia, Typography } from "@mui/material";

interface Level {
    text: string;
    imgName: string;
}

const Levels = (props: Level): JSX.Element => (
    <Box
        sx={{
            minWidth: "20vw",
            padding: "4vw",
            borderRadius: 4,
            bgcolor: "hsla(221, 86%, 94%, 1)",
        }}
    >
        <Typography sx={{ fontSize: "12px", textAlign: "center", lineHeight: "1" }}>{props.text}</Typography>
        <CardMedia
            image={`/src/shared/ui/imgs/${props.imgName}`}
            component="img"
            height="50"
            sx={{ borderRadius: 5, objectFit: "contain", marginTop: "5vw" }}
        />
    </Box>
);
export default Levels;
