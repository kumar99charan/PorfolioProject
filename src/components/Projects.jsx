// import React from 'react'

// export default function Projects() {
//   return (
//     <div>
//       <h1>Projects Components</h1>
//     </div>
//   )
// }

/* eslint-disable jsx-a11y/anchor-is-valid */
// import * as React from 'react';
// import Link from '@mui/material/Link';

// export default function ButtonLink() {
//   return (
//     <Link
//       component="button"
//       variant="body2"
//       onClick={() => {
//         console.info("I'm a button.");
//       }}
//     >
//        <a href="https://mui.com/material-ui/react-link/" target="_blank" rel="noopener noreferrer">
//             LinkedIn
//           </a>
//     </Link>
//   );
// }
//from here

// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';

// import PrintIcon from '@mui/icons-material/Print';
// import JavascriptIcon from '@mui/icons-material/Javascript';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import '../resources/css/project.css';

// export default function FolderList() {
//   return (
//     <div><h1>Nothing</h1></div>
//     <div className='outside'>
//       <div className='work'>
//         <div className='text'>
//         <h1>My Work</h1>
//         </div>
        
//         <List sx={{ width: '100%', maxWidth: 360 ,gap:'5px'}}>
//           <div className='item-box'>
//           <ListItem className='items'>
//             <ListItemAvatar >
//               <Avatar sx={{bgcolor:'rgb(50,20,60)'}}>
//                 <PrintIcon />
//               </Avatar>
//             </ListItemAvatar>
//             <ListItemText primary="Sai Replica Printing Orders managament " secondary="c++" />
//           </ListItem>
//           <ListItem className='items'>
//             <ListItemAvatar>
//               <Avatar sx={{bgcolor:'rgb(50,20,60)'}}>
//                 <JavascriptIcon />
//               </Avatar>
//             </ListItemAvatar>
//             <ListItemText primary="Portfolio Managemnet" secondary="Java" />
//           </ListItem>
//           <ListItem className='items'>
//             <ListItemAvatar>
//               <Avatar sx={{bgcolor:'rgb(50,20,60)'}}>
//                 <ShoppingCartIcon />
//               </Avatar>
//             </ListItemAvatar>
//             <ListItemText primary="Amazon Clone" secondary="HTML & CSS" />
//           </ListItem>
//           <ListItem className='items'>
//             <ListItemAvatar>
//               <Avatar sx={{bgcolor:'rgb(50,20,60)'}}>
//                 <AccountBoxIcon />
//               </Avatar>
//             </ListItemAvatar>
//             <ListItemText primary="Portfolio" secondary="React,HTML,CSS" />
//           </ListItem>
//           </div>
//         </List>
        
//         </div>
//         </div> 
    
//   );
// }




import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import '../resources/css/project.css'
import {projectData} from '../Utils/Constants'
// import { ImageAspectRatio } from '@mui/icons-material';
import Typewriter from 'typewriter-effect';

export default function Projects() {
  return (
    <div className="box1">
      <div className='box2' style={{border:'none'}}>
          <Typewriter className='text-writer'
                    options={{
                      cursor:'..',
                      strings:['My Work.'],
                      autoStart: true,
                      loop: true,           
            }}
          />
      </div>
          <div className="box3">
              <Box className="mainbox"
                sx={{
                  display: 'flex',
                  gap: 1,
                  py: 1,
                  overflow: 'auto',
                  width: '100vh',
                  scrollSnapType: 'x mandatory',
                  '& > *': {
                    scrollSnapAlign: 'center',
                  },
                }}
              >
                {projectData.map((item) => (
                  <Card orientation="horizontal" sx={{backgroundColor:'#e5e5e5'}} size="md" key={item.title} variant="outlined">
                    <AspectRatio ratio="2" sx={{ minWidth: '50vh', maxHeight:'50vh' }}>
                      <img src={item.src} 
                      sx={{objectFit:'contain',width:'auto',height:'25vh'}}
                      alt={item.title} />
                    </AspectRatio>
                    <Box sx={{ whiteSpace: 'nowrap', mx: 1 ,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                      <Typography level="title-md">{item.title}</Typography>
                      <Typography level="body-sm">{item.description}</Typography>
                    </Box>
                  </Card>
                ))}
              </Box>
          </div>
    </div>
    
  );
}

