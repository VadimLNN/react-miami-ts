import { Box, SvgIconTypeMap, ThemeProvider, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface CoolCardProps {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    title: string;
    text: string;
    color: any;
}

const CoolCard = (props: CoolCardProps): JSX.Element => (
    <ThemeProvider
        theme={{
            palette: {
                primary: {
                    main: props.color.bgColor,
                },
            },
        }}
    >
        <Box
            sx={{
                width: "87vw",
                paddingBlock: "3vw",
                paddingInline: "2vw",
                marginTop: 3,
                borderRadius: 5,
                bgcolor: "primary.main",
            }}
        >
            <props.icon style={{ color: props.color.iconColor, marginTop: "7", marginLeft: "0.5em", fontSize: "28px" }} />
            <Typography sx={{ marginTop: "0.5em", fontSize: "14px", marginLeft: "1em" }}>{props.title}</Typography>
            <Typography sx={{ marginTop: "0em", fontSize: "14px", marginLeft: "1em", color: props.color.textColor, opacity: "50%" }}>
                {props.text}
            </Typography>
        </Box>
    </ThemeProvider>
);
export default CoolCard;
