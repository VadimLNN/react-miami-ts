import { Box, CardMedia, Typography } from "@mui/material";

import imglav1 from "../../../shared/ui/imgs/heart1.png";

const Level1 = () => {
    return (
        <Box
            sx={{
                padding: "1.3em",
                borderRadius: 4,
                bgcolor: "hsla(221, 86%, 94%, 1)",
            }}
        >
            <Typography sx={{ fontSize: "12px", textAlignLast: "center", lineHeight: "1" }}>
                Если Вы <br /> только <br />
                начинаете
            </Typography>
            <CardMedia component="img" height="45" image={imglav1} sx={{ borderRadius: 5, objectFit: "contain", marginTop: "0.3em" }} />
        </Box>
    );
};
export default Level1;
