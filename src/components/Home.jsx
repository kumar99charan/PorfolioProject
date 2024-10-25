import React from 'react'
import "../resources/css/home.css"
import { Avatar, responsiveFontSizes, Typography } from '@mui/material'
// import Dp from "../resources/images/dp.jpg"
import Dp from '../resources/images/dp(nobg).png';
import Profile from './Profile'
import axios from 'axios'
import { bioinfo } from '../Utils/Constants';
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';


//api call backend




export default function Home() {

  //api
// const [user,setUser] = useState([])
// //connecting backend and frontend
//   const getUser = () =>{
//     fetch("/api/user/get-user-data")
//     .then(res => res.json())
//     // .then(json => console.log(json))
//     .then(json => setUser(json))
//   }
   
//   useEffect(() =>{
//     getUser()
//   },[])
//from below
  // const [UserData, setUserData] = useState(null)
  // useEffect(() => {
  //     console.log('Calling userData Api')
  //     axios
  //         .get('user/get-user-data')
  //         .then((res) => {
  //             console.log(res)
  //             setUserData(res.data)
  //         })
  //         .catch((err) => {
  //             console.log(err)
  //         })
  // }, [])

  // if(UserData){return(
  //      <div><h1>{UserData.Name}</h1><h2>{UserData.DOB}</h2></div>)}else{
  return (
    // <div>
    //     <h1>Home Component </h1>
    // </div>
    <div className='outside'>
        {/* <h1>{user.Name}</h1> */}
      
        
       
    <div className='AboutME'>
        <div className='Content'>
            <div className='div1'>
              <div className='photo'>
                  {/* <Avatar alt="Charan" src={Dp} sx={{height:'50vh',width:'50vh'}} /> */}
                  
              </div>
            </div>
            <div className='div2'>
                <div className="bio">
                    <div className='myself'>
                    <h1>MySelf,T CHARAN KUMAR</h1>
                    {/* <Typewriter 
                        options={{
                          strings: ['MySelf'],
                          strings:['T CHARAN KUMAR'],
                          autoStart: true,
                          loop: true,
                        }}
                      /> */}
                    {/* <h1>MySelf,T CHARAN KUMAR</h1>
                    <p>An Entusiast pursuing a BSC Hons Degree at SSSIHL.</p>
                     <p> Very keen in learning web development.</p>
                     <p> I believe Hardwork can beat talent.</p> */}
                       
                  
                      {/* <h2>Bio Information</h2> */}
                    
                          {bioinfo.map((info, index) => (
                              // <li key={index}>{info}</li>
                              <p key={index}>{info}</p>
                          ))}
                     
                  


                      </div> 
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
