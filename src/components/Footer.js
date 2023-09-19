import React from 'react';
import '../styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedinIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="socialMedia">
        <p id = "center">&copy; 2021 pedrotechpizza.com</p>
        {" "}
        <InstagramIcon/>
        {" "}
        <TwitterIcon/>
        {" "}
        <FacebookIcon/>
        {" "}
        <LinkedinIcon/>
        </div>
      
    </div>
  );
}

export default Footer;
