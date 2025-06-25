import React from 'react';
import HeaderText from './HeaderText';
import Image from 'next/image'

import heroImage from '@/public/images/heroImage.png';

const Header = (props) => {
  return (
    <div
      className="relative overflow-hidden w-full min-h-screen top-[-27px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <HeaderText />
    </div>

  );
};



export default Header;