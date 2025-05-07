import { Accordion, AccordionDetails, AccordionSummary, Typography,  } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const LessonAccordion = () => {
  return (
    <>
    <Accordion disabled> {/*disabled*/}
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>First Part</Typography>
        </AccordionSummary>
        <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus, tempore veniam vitae facilis molestiae neque sequi doloribus inventore animi eaque incidunt eius dolor aspernatur ipsa. In aliquam numquam molestias.
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Second Part</Typography>
        </AccordionSummary>
        <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus, tempore veniam vitae facilis molestiae neque sequi doloribus inventore animi eaque incidunt eius dolor aspernatur ipsa. In aliquam numquam molestias.
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Third Part</Typography>
        </AccordionSummary>
        <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus, tempore veniam vitae facilis molestiae neque sequi doloribus inventore animi eaque incidunt eius dolor aspernatur ipsa. In aliquam numquam molestias.
        </AccordionDetails>
    </Accordion>
    </>
  )
}
