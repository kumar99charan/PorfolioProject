
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../resources/css/academics.css';
import Typewriter from 'typewriter-effect';


export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='outside1'>
      <div className="study">
          <Typewriter className='text-writer'
                        options={{
                          cursor:'..',
                          strings:['Academics.'],
                          autoStart: true,
                          loop: true,           
                }}
              />
      </div>
        
    <div className='outside2'>
    <div className='inside'>
      
      
      <Accordion className='acc' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        
        <AccordionSummary  sx={{bgcolor:'#8696d8'}} 
          expandIcon={  <ExpandMoreIcon />}
          
        >
          <Typography sx={{ width: '33%', flexShrink: 0,fontWeight:'bold' }}>
            University
          </Typography>
          <Typography sx={{ color: 'text.secondary',color:'white',fontWeight:'bold' }}>
            Sri Sathya Sai Institute OF Higher Learning
          </Typography>
        </AccordionSummary>
        <AccordionDetails  className="detail-box" >
          <Typography>
            Course- BSc Computer Science
           
          </Typography>
          <Typography>
            
            Expected graduation year 2025
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='acc' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary sx={{bgcolor:'#8696d8'}}
          expandIcon={<ExpandMoreIcon />}
        
        >
          <Typography sx={{ width: '33%', flexShrink: 0,fontWeight:'bold' }}>College</Typography>
          <Typography sx={{ color: 'text.secondary',color:'white',fontWeight:'bold' }}>
           Narayana JR College
          </Typography>
        </AccordionSummary>
        <AccordionDetails  className="detail-box">
          <Typography>
            Course:MPC
          </Typography>
          <Typography>
            2020-2022
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='acc' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary sx={{bgcolor:'#8696d8'}}
          expandIcon={<ExpandMoreIcon />}
        
        >
          <Typography sx={{ width: '33%', flexShrink: 0,fontWeight:'bold' }}>
            Schooling
          </Typography>
          <Typography sx={{ color: 'text.secondary',color:'white',fontWeight:'bold' }}>Smt Eswaramma High School</Typography>
        </AccordionSummary>
        <AccordionDetails className="detail-box">
          <Typography>
            2010-2020
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
    </div>
    </div>
  );
}


