import { alpha, Box, Stack, Typography } from "@mui/material";

interface CausesProps {
    num: number;
    text: string;
}

const Causes = (props: CausesProps): JSX.Element => (
    <>
        <Box sx={{ minHeight: "80px", bgcolor: alpha("#FAE4FD", 0.05), color: "white", margin: "3vh", borderRadius: 4 }}>
            <Stack direction={"row"}>
                <Typography variant="h4" sx={{ opacity: 1, margin: "6%" }}>
                    {props.num}
                </Typography>
                <Typography sx={{ opacity: 1, margin: "5% 2%" }}>{props.text} </Typography>
            </Stack>
        </Box>
    </>
);

export default Causes;
