import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { createTheme, alpha } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
    components: {
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    fontFamily: "Roboto",
                    fontWeight: 400,
                },
            },
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    fontFamily: "Roboto",
                    fontWeight: 400,
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    marginTop: "2vw",
                },
            },
        },
    },
});

const FAQ = () => {
    return (
        <ThemeProvider theme={theme}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                    Можно ли выбрать сразу 2 направления?
                </AccordionSummary>
                <AccordionDetails> Да хоть 5! Хочешь и рыбку съесть и на рыбку рыбку сесть?</AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
                    Родитель может навещать ребенка?
                </AccordionSummary>
                <AccordionDetails>Нет конечно...</AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
                    Скидки для пенсионеров и молодёжи
                </AccordionSummary>
                <AccordionDetails>Какие пенсионеры?... никаких скидок!</AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
                    Перечень документов и условия
                </AccordionSummary>
                <AccordionDetails>Паспорт и много денег</AccordionDetails>
            </Accordion>
        </ThemeProvider>
    );
};

export default FAQ;
