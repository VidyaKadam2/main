import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {FiSearch} from 'react-icons/fi'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#000000');
        setTextColor('#ffffff');
      } else {
        setColor('#000000');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div className='flex flex-col sm:hidden  w-[360px]' >
    <div
      
      className='fixed  w-[360px]  ease-in duration-300 h-16'
    >

        
      <div className='w-[360px]  text-white flex-row flex' style={{ backgroundColor:`${color}` } }>
      <div onClick={handleNav} className=' sm:hidden '>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} className="mt-[25px] ml-[25px] w-[22px] h-[16px]" />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} className="mt-[25px] ml-[25px] w-[22px] h-[16px]"/>
          )}
        </div>

        <div className='w-px h-12 bg-[#676767] ml-1 mt-2 '></div>    
        
        <Link href='/'>
          <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>
          <img src='/img/FG LOGO_white 4.png' className='w-[45px] h-[34.55px] ml-[16px] mt-[19px]  sm:hidden'/>
          </h1>
        </Link>
      
        <a href='a' className=' mt-6 w-[63px] h-[25px] ml-40 text-white  hover:text-gray bg-blue-600 text-center align-text-top sm:hidden' ><div className='flex flex-row'><p className='ml-3 mt-0'>Log in</p></div></a>

        {/* Mobile Button */}
       
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex w-[250px] h-screen bg-black ease-in duration-300 mt-28'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex w-[250px] h-screen bg-black  ease-in duration-300 mt-28'
          }
        >
          <ul>
            <li onClick={handleNav} className=' mt-10 ml-10 text-xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className=' mt-2 ml-10 text-xl hover:text-gray-500'>
              <Link href='/#gallery'>More</Link>
            </li>
            <li onClick={handleNav} className=' mt-2 ml-10 text-xl hover:text-gray-500'>
              <Link href='/work'>Products</Link>
            </li>
            <li onClick={handleNav} className=' mt-2 ml-10 text-xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className='bg-black  h-32 sm:hidden mt-0 w-[360px]' ><div className=' flex flex-row w-[320px] h-[39px]  ml-[19px] mt-16  rounded-md  bg-white items-center mb-3  shadow-[0_0px_7px_-1px_rgba(135, 153, 219, 1)] '>
                  <input type='text' placeholder='Search' className='bg-white outline-none text-[#BBBABA] flex-1 ml-4 mr-4 mt-1'/>
                  <div className=' justify-end bg-[#FF8A00] w-[38px] h-[37px] rounded-md text-center mr-0.5'><FiSearch className='text-white w-6 h-6 mt-1 ml-2'/></div>
                </div></div>
    </div>
  );
};

export default Navbar;

   




