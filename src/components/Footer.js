import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = ({user}) => (
    <footer className="footer">
      <p>@ 2020 Ara Matthew.</p>
      <div className = "socialLinks">
        <SocialLinks user= {user} />
      </div>
    </footer>
  );

  export default Footer;