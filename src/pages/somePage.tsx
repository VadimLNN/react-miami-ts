import { Card, ThemeProvider } from "@mui/material";

import DemoTheme from "../components/DemoTheme/demoTheme";

export const FormDemo = () => {
    return (
        <ThemeProvider theme={DemoTheme()}>
            <Card></Card>
        </ThemeProvider>
    );
};
