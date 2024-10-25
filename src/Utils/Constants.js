import defaultImage from "../resources/images/dp.jpg"
import { CodeRounded, ContactPageRounded, FacebookRounded, HomeRounded, SchoolRounded } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const userProfileDefaultData={
    "Name"      :"Charan",
    "UserName"  :"charan18",
    "DOB"       :"18-04-2024",
    "Address"   :"Puttaparthi",
    "EmailID"   :"ashik@gmail.com",
    "PhoneNo"   :"897465412",
    "Description":"I'm a Software Engineer",
    "Photo"     : defaultImage
}

export const bioinfo=[
  "An Entusiast pursuing a BSC Hons Degree at SSSIHL.",
    "Very keen in learning web development."
]
    


export const IconTitleMap={
    "Home": <HomeRounded className="icon"/>,
    "Academics": <SchoolRounded className="icon"/>,
    "Projects": <CodeRounded className="icon"/>,
    "Social Profiles": <FacebookRounded className="icon"/>,
    "Resume": <ContactPageRounded className="icon"/>,
    "LinkedIn":<LinkedInIcon className="icon"/>,
    "Instagram":<InstagramIcon className="icon"/>,
    "Facebook":<FacebookIcon className="icon"/>,
    "Mail":<MailIcon className="icon"/>



}

export const DEFAULT_SIDE_MENU=[
    {
        "title": "Home",
        "icon":  IconTitleMap.Home,
        "link": "/home"
    },
    {
        "title": "Academics",
        "icon": IconTitleMap.Academics,
        "link": "/academics"
    },
    {
        "title": "Projects",
        "icon": IconTitleMap.Projects,
        "link": "/projects"
    },
    {
        "title": "Social Profiles",
        "icon": IconTitleMap["Social Profiles"],
        "link": "/social-profile"
    },
    {
        "title": "Resume",
        "icon": IconTitleMap.Resume,
        "link": "/resume"
    }
]


 export const socialLinks = [
      {
        name: 'LinkedIn',
        url: "https://www.linkedin.com/in/charan-kumar-a4a28a255/" ,
        "icon":IconTitleMap.LinkedIn,
      },
      {
        name: 'Instagram',
        url: "my-social-profile/instagram/charan",
        "icon":IconTitleMap.Instagram,
      },
      {
        name: 'Facebook',
        url: "my-social-profile/facebook/charan",
        "icon":IconTitleMap.Facebook,
      },
      {
        name: 'Email',
        url: "my-social-profile/facebook/charan",
        "icon":IconTitleMap.Mail,
      },
];



export const DEFAULT_DRAWER_FLAG= true;
export const DEFAULT_ACTIVE_PAGE= DEFAULT_SIDE_MENU[0].title

export const drawerWidth = 300;
export const email="kumar99charan@gmail.com";


export const DarkTheme              = "dark"
export const LightTheme             = "light"
