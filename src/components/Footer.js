import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => (
    <footer className="footer">
      <p>@ 2020 Ara Matthew.</p>
      <div className = "socialLinks">
                <SocialIcon url="http://github.com/aghiulez" target="_blank" style={{ height: 30, width: 30 }} bgColor="#ffffff" />
                <span>   </span>
                <SocialIcon url="http://linkedin.com/in/aramatthew" target="_blank" style={{ height: 30, width: 30 }} bgColor="#ffffff"/>
            </div>
    </footer>
  );

  export default Footer;