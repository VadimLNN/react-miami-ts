
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const FAQ = () => {
    return ( 
        <div>
        <Accordion sx={{marginTop: "1em"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
           Можно ли выбрать сразу 2 направления?
          </AccordionSummary>
          <AccordionDetails>
            Да хоть 5! Хочешь и рыбку съесть и на рыбку рыбку сесть?
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Родитель может навещать ребенка?
          </AccordionSummary>
          <AccordionDetails>
            Нет конечно...
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Скидки для пенсионеров и молодёжи
          </AccordionSummary>
          <AccordionDetails>
            Какие пенсионеры?... никаких скидок!
          </AccordionDetails>
          
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Перечень документов и условия
          </AccordionSummary>
          <AccordionDetails>
            Паспорт и много денег
          </AccordionDetails>
        </Accordion>
      </div>
     );
}
 
export default FAQ;
