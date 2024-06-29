import { Box, Button, CardMedia, Typography } from "@mui/material";
import img_certificate from "../../../shared/ui/imgs/certificate.png";

const Skills = () => {
    return (
        <Box
            sx={{
                padding: "5vw",
                marginTop: 3,
                borderRadius: 4,
                background: "radial-gradient(#3E7CFE, #2850A3)",
            }}
        >
            <Typography sx={{ fontSize: "32px", marginTop: "5vw", lineHeight: "1.2", color: "white" }}>Подтверждение ваших навыков</Typography>
            <CardMedia component="img" height="300vw" image={img_certificate} sx={{ borderRadius: 5, objectFit: "contain", marginTop: "4vw" }} />
            <Typography sx={{ fontSize: "14px", marginBlock: "4vw", lineHeight: "1.5", color: "white" }}>
                В конце обучения получите сертификат установленного образца. Мы обучаем по государственной лицензии №112ЛО57_56
            </Typography>
            <Button
                fullWidth
                variant="contained"
                sx={{ width: "78vw", marginBlock: "4vw", background: "linear-gradient(to right, #EE2F53, #992037)", borderRadius: 3 }}
            >
                Посмотреть сертификат
            </Button>
        </Box>
    );
};
export default Skills;
