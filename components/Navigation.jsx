'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import logo from '/public/logo.png';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Programs', link: '/programs' },
    { name: 'Support', link: '/support' }
  ];

  return (
    <nav className='shadow-md w-full sticky top-0 left-0 z-50 bg-white'>
      <div className='max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-8'>

        {/* Logo */}
        <div className='flex items-center'>
          <Link href="/">Logo here</Link>
          {/* <Image
            src={logo}
            alt='Organization Logo'
            className='w-[58px] h-[47px] rounded-md object-cover'
          /> */}
        </div>

        {/* Hamburger for Mobile */}
        <div className='md:hidden'>
          <button
            onClick={() => setOpen(!open)}
            className='text-gray-800 text-3xl focus:outline-none'
            aria-label='Toggle Navigation'
          >
            {open ? '✖' : '☰'}
          </button>
        </div>

        {/* Desktop Nav Links & Buttons */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <ul className="flex items-center space-x-12">
            {Links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-[#14B503] hover:underline text-lg transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className='md:hidden px-4 pb-4 bg-white shadow-md'>
          <ul className='space-y-4'>
            {Links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.link}
                  className='block text-gray-800 hover:text-[#14B503] hover:underline text-lg transition-colors'
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

        </div>
      )}
    </nav>
  );
};

export default Navigation;
