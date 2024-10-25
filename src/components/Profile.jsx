import React, { useState } from 'react'
import { userProfileDefaultData ,email,socialLinks} from '../Utils/Constants';
import Typewriter from 'typewriter-effect';

import "../resources/css/profile.css"
import Btnicon from "../resources/images/logo.png"
import { Button } from '@mui/material';
import { PublishOutlined } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


import Link from '@mui/material/Link';

export default function Profile() {
    const [profileData, setProfileData]= useState(userProfileDefaultData);
    const tempProfileData= profileData;

    const changeProfileData= (event)=>{
        setProfileData({...tempProfileData})
        event.preventDefault();
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file)
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setProfileData((prevData) => ({...prevData, "Photo": reader.result}))
          };
          reader.readAsDataURL(file);
        }
    };

    const updateProfile = (event, dataType) => {
        const value= event.target.value
        switch(dataType){
            case "date":
                setProfileData((prevData) => ({...prevData, "DOB": value}))
                break;
            case "email":
                tempProfileData["EmailID"]= value
                break;
            case "number":
                tempProfileData["PhoneNo"]= value
                break;
            case "photo":
                handleImageChange(event)
                break;
            default:
                break
        }
    }
    // console.log(profileData)
    
    return (
        
       

        <div className="ProfileContainer">
           
                        <div className='buttons'>
                            <div className='connect'>
                            <Typewriter className='text-writer'
                                options={{
                                    cursor:'..',
                                strings:['Connect With Me.'],
                                autoStart: true,
                                loop: true,
                                
                                }}
                            />
                                {/* <h1>Connect With Me...</h1> */}
                                {/* <h1>Connect</h1>
                                <h2>with</h2>
                                <h3>ME...</h3> */}

                            </div>
                            <div className='button-link' style={{ display: 'flex',flexDirection:'row', gap: '30px' ,height:'50vh',justifyContent:'space-evenly'}}>
                        

                                {socialLinks.map((social) => (
                                <a  
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{display:'flex',gap:'3px', textDecoration: 'none',width:'15vh' }}
                                >        
                                
                                 <div className='icons' style={{justifyContent:'center',alignItems:'center',width:'10vh',color:'black'}}>
                              

                                   {social.icon }
                                        </div>
                                        <button  style={{ height:'5vh',padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', backgroundColor: '#03346E', color: '#fff' }}>
                                        {social.name}
                                        </button>
                                    
                                    
                                </a>
                                ))}
                              
                            </div>
                            <div className="extra">
                                
                            </div>
                      </div>

                    
        </div>
    )
}





