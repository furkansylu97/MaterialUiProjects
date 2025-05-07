import React from "react";
import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography,  } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const LessonAccordion = () => {

    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false)
    }

  return (
    <>
    {/* <Accordion disabled>
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
    </Accordion> */}
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>First Part</Typography>
        </AccordionSummary>
        <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus, tempore veniam vitae facilis molestiae neque sequi doloribus inventore animi eaque incidunt eius dolor aspernatur ipsa. In aliquam numquam molestias.
        </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Second Part</Typography>
        </AccordionSummary>
        <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus, tempore veniam vitae facilis molestiae neque sequi doloribus inventore animi eaque incidunt eius dolor aspernatur ipsa. In aliquam numquam molestias.
        </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
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
