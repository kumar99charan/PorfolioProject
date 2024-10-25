// import React from 'react'

// export default function Academics() {
//   return (
//     <div>
//       <h1>Academics Component</h1>
      
//     </div>
//   )
// }



// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// import '../resources/css/academics.css';

// export default function Academics() {
//   return (
    
//       <div className='box'>
//           <div className='box2'>
//             <div className='container1'>
//               <div className='school'>
//                   <h2>Smt Eswaramma High School</h2>
//                   <div className='info'>
//                       <h4>2010-2020</h4>
//                   </div>
//               </div>
             
//             </div>
//             <div className='container'>
//               <div className='College'>
//                   <h2>Narayana JR College</h2>
//                   <p>2020-2022</p>
//               </div>
//               <div className='info'>
//                   <h2>SSSIHL</h2>
//                   <p>Graduation year:2025</p>
//               </div>
//             </div>
//           </div>
//       </div>


//   );
// }




import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../resources/css/academics.css';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='outside1'>
    <div className='outside2'>
    <div className='inside'>
      
      
      <Accordion className='acc' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        
        <AccordionSummary  sx={{bgcolor:'#8696d8'}} 
          expandIcon={  <ExpandMoreIcon />}
          
          // aria-controls="panel3bh-content"
          // id="panel3bh-header"
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
          // aria-controls="panel2bh-content"
          // id="panel2bh-header"
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
          // aria-controls="panel1bh-content"
          // id="panel1bh-header"
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


