// import React from "react";

// function ResumeComponent() {
//   return(
//     <h1>Resume Component</h1>
//   )
// }

// export default ResumeComponent;


//from here

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../resources/css/resume.css'

export default function Resume() {
    const [UserData, setUserData] = useState(null)

    useEffect(() => {
        console.log('Calling userData Api')
        axios
            .get('/user/get-user-data')
            .then((res) => {
                console.log(res)
                setUserData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    if (UserData) {
        return (
            <div className="rendered-content">
                <h1>{UserData.Name}</h1>
                <h1>{UserData.Address}</h1>
                <h1>{UserData.DOB}</h1>
            </div>
        )
       
    } else {
        // return <div className="loading">Loading...........</div>
        return (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          );
    }
}

