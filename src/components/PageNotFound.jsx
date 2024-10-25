import { Typography } from '@mui/material'
import React from 'react'
import "../resources/css/shared.css"
// import { useEffect } from 'react'
// import { useState,useEffect } from 'react'


export default function PageNotFound() {

      //   const [userData,setUserData]=useState(null);
      //   useEffect(()=>{
      // console.log("Calling userData Api");
      // axios.get("http://localhost:3000/users/getUserData")
      // .then((res)=>{
      // console.log(res)
      // console.log(res.data)
      // })
      // .catch((err) => {
      // console.log(err)
      // })
      // }, [])
  return (
    <div className="FullPageError">
      
       
        
        <Typography paragraph variant='h5'>
            The Resource You are Looking for is not available.
        </Typography>
    </div>        
  )
}
