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

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import PrintIcon from '@mui/icons-material/Print';
import JavascriptIcon from '@mui/icons-material/Javascript';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import '../resources/css/project.css';

export default function FolderList() {
  return (
    <div><h1>Nothing</h1></div>
    // <div className='outside'>
    //   <div className='work'>
    //     <div className='text'>
    //     <h1>My Work</h1>
    //     </div>
        
    //     <List sx={{ width: '100%', maxWidth: 360 ,gap:'5px'}}>
    //       <div className='item-box'>
    //       <ListItem className='items'>
    //         <ListItemAvatar >
    //           <Avatar sx={{bgcolor:'rgb(50,20,60)'}}>
    //             <PrintIcon />
    //           </Avatar>
    //         </ListItemAvatar>
    //         <ListItemText primary="Sai Replica Printing Orders managament " secondary="c++" />
    //       </ListItem>
    //       <ListItem className='items'>
    //         <ListItemAvatar>
    //           <Avatar sx={{bgcolor:'rgb(50,20,60)'}}>
    //             <JavascriptIcon />
    //           </Avatar>
    //         </ListItemAvatar>
    //         <ListItemText primary="Portfolio Managemnet" secondary="Java" />
    //       </ListItem>
    //       <ListItem className='items'>
    //         <ListItemAvatar>
    //           <Avatar sx={{bgcolor:'rgb(50,20,60)'}}>
    //             <ShoppingCartIcon />
    //           </Avatar>
    //         </ListItemAvatar>
    //         <ListItemText primary="Amazon Clone" secondary="HTML & CSS" />
    //       </ListItem>
    //       <ListItem className='items'>
    //         <ListItemAvatar>
    //           <Avatar sx={{bgcolor:'rgb(50,20,60)'}}>
    //             <AccountBoxIcon />
    //           </Avatar>
    //         </ListItemAvatar>
    //         <ListItemText primary="Portfolio" secondary="React,HTML,CSS" />
    //       </ListItem>
    //       </div>
    //     </List>
        
    //     </div>
    //     </div> 
    
  );
}

