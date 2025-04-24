import React, { useState } from 'react';
import { useFetchTodosQuery } from '../store/apis/Todoapi';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const TodoList = () => {
    const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);  // Close others when one is opened
  };

    const {data} = useFetchTodosQuery();

    return (
        <div>
            <h2>Todos</h2>
            {data && data.map(item => <Accordion expanded={expanded === item.id} onChange={handleChange(item.id)} key={item.id}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id={item.id}
        >
          <Typography component="span">{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
          ID: {item.id} <br />
          Completed: {String(item.completed)}
          </Typography>
        </AccordionDetails>
      </Accordion>)}
        </div>
    )
}

export default TodoList;