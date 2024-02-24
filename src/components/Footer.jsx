import React from 'react';
import { FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 text-center">
      <div className="flex justify-center items-center mb-3 bg-black gap-5 text-4xl">
        <a href="#" target="_blank" rel="noopener noreferrer" className="icon bg-black text-white "><FaGoogle /></a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="icon bg-black text-white"><FaInstagram /></a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="icon bg-black text-white"><FaLinkedinIn/></a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="icon bg-black text-white"><FaTwitter /></a>
      </div>
      <p className="mb-0 bg-black text-white">&copy; 2024 My Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;