import React from 'react'
import "../resources/css/home.css"
// import { Avatar, responsiveFontSizes, Typography } from '@mui/material'
// import Dp from "../resources/images/dp.jpg"
// import Dp from '../resources/images/dp(nobg).png';
// import Profile from './Profile'
// import axios from 'axios'
import { bioinfo } from '../Utils/Constants';
// import Typewriter from 'typewriter-effect';
// import { useEffect, useState } from 'react';

export default function Home() {
  return (
    <div className='AboutME'>
        <div className='Content'>
            <div className='div1'>
              <div className='photo'>
                  {/* <Avatar alt="Charan" src={Dp} sx={{height:'50vh',width:'50vh'}} /> */}  
              </div>
            </div>
            <div className='div2'>
                <div className="bio">
                    <div className='myself' >
                      <h2 >Myself,</h2>
                      <h1 sx={{fontWeight:'bold'}}>T CHARAN KUMAR</h1>
                          {bioinfo.map((info, index) => (
                              // <li key={index}>{info}</li>
                              <p key={index}>{info}</p>
                          ))}
                      </div> 
                </div>
            </div>
        </div>
    </div>
  )
}
