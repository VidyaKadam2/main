
import Link from 'next/link'
import React from 'react'
import {HiArrowUpRight} from 'react-icons/hi2'
import Image from "next/image";
import {AiOutlineTwitter, AiFillInstagram,AiFillFacebook,AiFillLinkedin} from 'react-icons/ai'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Banking = () => {
 
    return (
        <main className=''>
        
          <div className=' bg-black sm:h-20 sm:bg-black sm:w-[1263px] '>
          <div className='flex flex-row'>
        
           
                
                
                
                <img src='/img/FG LOGO_white 4.png' className=' mt-[10px]  ml-[40px] w-[80px] h-[60px] hidden sm:flex'/>
           
                
                <div className="flex justify-center">
            
    
                <div className="dropdown relative hidden sm:flex">
          <button className="dropdown-toggle ml-16 mt-2 text-white leading-tight hover:text-gray transition duration-150 ease-in-out flex items-center text-lg"
            type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            More <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-1 mt-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
            </svg>
          </button></div></div>
    
          <div className="flex justify-center">
                        <div className="dropdown relative hidden sm:flex">
          <button className="dropdown-toggle ml-16 mt-2 text-white leading-tight hover:text-gray transition duration-150 ease-in-out flex items-center text-lg"
            type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Our Products <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-1 mt-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
            </svg>
          </button></div></div>
    
          <div className=' w-60 h-8  mt-6 ml-72 rounded-2xl  bg-white items-center mb-3  shadow-[0_0px_7px_-1px_rgba(135, 153, 219, 1)] shadow-inner shadow-violet-300 hidden sm:flex'>
                  <input type='text' placeholder='Search FG..' className='bg-white outline-none text-sm flex-1 ml-4 mr-4'/>
                </div>
  
                <a href='a' className=' mt-6 w-24 h-8 ml-6 text-black  hover:text-gray bg-white text-center align-text-top hidden sm:flex' ><div className='flex flex-row'><p className='ml-4 mt-1 '>Log in</p> <HiArrowUpRight className='text-s ml-1 mt-2 text-center'/></div></a>
                <a href='a' className=' mt-6 w-24 h-8 ml-6 text-white  hover:text-gray bg-blue-600 text-center hidden sm:flex ' ><div className='flex flex-row'><p className='ml-4 mt-1 '>Sign up</p> <HiArrowUpRight className='text-s ml-1 mt-2 text-center'/></div></a></div>
          </div>
          
<div className='sm:hidden'><img src='/img1/11.png' className='h-[209.03px] w-full '/></div>
<div className=' flex sm:bg-8-img sm:bg-cover sm:h-[800px]  bg-black sm:w-[1263px]  h-[304px]'>
            <div className='flex flex-col'>
              <p className=' font-medium  text-2xl text-white tracking-widest sm:hidden mt-3 ml-[30px]'>FINTRACT</p>
              <p className=' font-medium  text-2xl text-white tracking-widest sm:hidden ml-[30px] '>GLOBAL</p> 

            <p className=' text-white text-6xl mt-32 font-bold tracking-wide drop-shadow-2xl shadow-white ml-36 hidden sm:flex'>FINTRACT GLOBAL</p>
            <p className=' text-white sm:text-5xl sm:mt-14 sm:font-semibold font-sans tracking-wide sm:ml-36 text-lg mt-2 ml-[30px]'>OPEN BANKING</p>
            <p className=' text-white mt-4 text-sm ml-[30px] tracking-wide sm:hidden'>Our aim is to help accelerate client growth,</p>
            <p className=' text-white  text-sm ml-[30px] tracking-wide sm:hidden'>strengthen their market base and amplify the </p>
            <p className=' text-white  text-sm ml-[30px] tracking-wide sm:hidden'>  volume of transactions through our quality-</p>
            <p className=' text-white  text-sm ml-[30px] tracking-wide sm:hidden'>focused products.</p>
             <div className='flex flex-row mt-4 ml-[30px] sm:hidden'>
            <a href='a' className='  w-[103px] h-[28px] border border-black text-black bg-white hover:text-gray text-center ' ><div className='flex flex-row'><p className='mt-1 ml-2 text-xs'>Get Started</p><HiArrowUpRight className='text-s ml-1 mt-1'/></div></a>
            <a href='a' className='  w-[103px] h-[28px] ml-[17px] border border-white text-white hover:text-gray bg-black text-center ' ><div className='flex flex-row'><p className='mt-1 ml-2 text-xs'>Know More</p><HiArrowUpRight className='text-s ml-1 mt-1'/></div></a>

            </div>

            <div className='h-10 w-auto '>
            <p className=' text-white mt-10 text-2xl ml-36 tracking-wider hidden sm:flex'>Our aim is to help accelerate client growth, strengthen their market </p>
            <p className=' text-white  text-2xl ml-36 tracking-wider hidden sm:flex'> base and amplify the volume of transactions through our quality-</p>
            <p className=' text-white  text-2xl ml-36 tracking-wider hidden sm:flex'>focused products.</p>
            <div className='flex flex-row mt-40 ml-32'>
            <a href='a' className=' hidden sm:flex w-36 h-14 ml-6 border border-black text-black bg-white hover:text-gray text-center ' ><div className='flex flex-row'><p className='mt-3 ml-3 text-lg'>Get Started</p><HiArrowUpRight className='text-s ml-1 mt-5'/></div></a>
            <a href='a' className=' hidden sm:flex w-36 h-14 ml-6 border border-white text-white hover:text-gray bg-black text-center ' ><div className='flex flex-row'><p className='mt-3 ml-3 text-lg'>Know More</p><HiArrowUpRight className='text-s ml-1 mt-5'/></div></a>

            </div> </div> </div> </div>



<div className=' flex bg-[#0057FF] sm:h-96 sm:w-[1263px] h-[460px]  justify-center sm:text-center  text-white'>
  <div className=' sm:w-[850px] sm:h-[400px] sm:mt-16 sm:text-lg sm:tracking-wider h-[365px] w-[293px]  mt-[35px]   text-sm tracking-widest  text-center'>
Our target is to develop an ecosystem of products and services augmented with production environments, Fraudify Certified APIs by PSD2, enhanced authentication by OpenID and multi-factor authentication. With the UK as the initial market, we are working on an expansion strategy for the USA, Canada and Australia. The product utilizes the Open Banking Initiative’s technical architecture and advanced security mechanisms to develop an integrated ecosystem. It will enable banks to offer a comprehensive and dynamic service portfolio with impenetrable security for the user’s data. An ecosystem of services and authenticated APIs will be made available to fintech companies.
</div></div>

<div className='sm:h-96 flex flex-col items-center sm:text-center sm:bg-white bg-[#595959] sm:w-[1263px]  h-[326px]'>
  <p className=' sm:font-bold sm:text-4xl sm:mt-14 sm:tracking-normal sm:font-sans mt-[31px] text-lg text-white sm:text-black sm:ml-0  tracking-wider'>Many big comapany trusted us</p>
  <div className='sm:hidden text-xs text-white h-[70px] w-[300px] mt-[16px] ml-[30px] mr-[30px] '>Our clients include multinational corporations, financial institutions, private equity funds, domestic corporations, joint ventures, emerging companies, start-ups, non-governmental organizations, international organizations, individuals and government.</div>
  <p className='text-center text-[#545454] mt-8 tracking-wider text-lg hidden sm:flex '>Our clients include multinational corporations, financial institutions, private equity funds,</p>
  <p className='text-center text-[#545454]  tracking-wider text-lg hidden sm:flex '> domestic corporations, joint ventures, emerging companies, start-ups, non-governmental</p>
  <p className='text-center text-[#545454]  tracking-wider text-lg hidden sm:flex '>  organizations, international organizations, individuals and government.</p>
  <div className=' flex-row justify-center hidden sm:flex'>
    <img className='h-10 w-32 mt-10' src='/img1/Group 64.png'/>
    <img className='h-10 w-40 mt-10 ml-20' src='/img1/Group 63.png'/>
    <img className='h-14 w-44 mt-8 ml-20' src='/img1/Group 61.png'/>
    <img className='h-10 w-40 mt-10 ml-20' src='/img1/Group 62.png'/>
  </div>
  <div className='flex flex-row sm:hidden mt-6  justify-center'><img className='h-[40px] w-[120px] mt-2  text-white' src='/img1/7 (1).png'/>
    <img className='h-[40px] w-[120px] mt-2 ml-8 ' src='/img1/8.png'/></div>
    <div className='flex flex-row sm:hidden mt-4 justify-center'><img className='h-[40px] w-[120px] mt-2 ' src='/img1/9.png'/>
    <img className='h-[40px] w-[120px] mt-2 ml-8' src='/img1/10.png'/></div>
</div>
<div className='flex sm:w-[1263px] w-screen  justify-center items-center '>
<div className='flex sm:mt-12  text-center  sm:font-bold sm:text-4xl text-lg font-medium tracking-wide sm:ml-0  mt-[58px]  w-[234px]  sm:w-[800px]'><p>Fintract Global Open Banking features</p></div></div>

<div className="flex max-w-screen-xl mt-[60px] items-center justify-center px-20 text-center sm:hidden">
             <Swiper 
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      loop={true}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>    <div className='flex flex-col max-w-screen-xl  h-[190px] bg-white border-gray-200 border-2 justify-center items-center text-center'><img className='w-[162px] h-[97.8px] mt-[7px] ' src='/img1/image 39.png'/>
    <p className='text-sm mt-[9.2px] font-normal'>Account Aggregation</p>
    <p className='text-xs mt-[11px] tracking-tight'>The users will be able to add multiple</p>
    <p className='text-xs tracking-tight'> accounts (even from different banks).</p></div></SwiperSlide>

      <SwiperSlide>    <div className='flex flex-col max-w-screen-xl h-[190px] bg-white  border-gray-200 border-2 justify-center items-center text-center'><img className='w-[162px] h-[97.8px] mt-[7px] ' src='/img1/16.png'/>
    <p className='text-sm mt-[9.2px] font-normal'>Transaction</p>
    <p className='text-xs mt-[11px] tracking-tight'>We provide two highly secure APIs</p>
    <p className='text-xs tracking-tight'> (PISP & AISP) for transactions</p></div></SwiperSlide>

    <SwiperSlide>    <div className='flex flex-col max-w-screen-xl h-[190px] bg-white  border-gray-200 border-2 justify-center items-center text-center'><img className='w-[162px] h-[97.8px] mt-[7px] ' src='/img1/15.png'/>
    <p className='text-sm mt-[9.2px] font-normal'>AI Analytics</p>
    <p className='text-xs mt-[11px] tracking-tight'>Our scripts allow the user to get</p>
    <p className='text-xs tracking-tight'> detailed insights in the form of graphs and text.</p></div></SwiperSlide>

    <SwiperSlide>    <div className='flex flex-col max-w-screen-xl h-[190px] bg-white  border-gray-200 border-2 justify-center items-center text-center'><img className='w-[162px] h-[97.8px] mt-[7px] ' src='/img1/17.png'/>
    <p className='text-sm mt-[9.2px] font-normal'>Block Cards</p>
    <p className='text-xs mt-[11px] tracking-tight'>User details can easily be shared in</p>
    <p className='text-xs tracking-tight'> the form of digital cards, for any account.</p></div></SwiperSlide>

    <SwiperSlide>    <div className='flex flex-col max-w-screen-xl h-[190px] bg-white  border-gray-200 border-2 justify-center items-center text-center'><img className='w-[162px] h-[97.8px] mt-[7px] ' src='/img1/18.png'/>
    <p className='text-sm mt-[9.2px] font-normal'>Document Vault</p>
    <p className='text-xs mt-[11px] tracking-tight'>Users will store sensitive documents </p>
    <p className='text-xs tracking-tight'> in our highly secure vaults built on blockchain.</p></div></SwiperSlide>

    <SwiperSlide>    <div className='flex flex-col max-w-screen-xl h-[220px] bg-white  border-gray-200 border-2 justify-center items-center text-center'><img className='w-[162px] h-[97.8px] mt-[7px] ' src='/img1/19.png'/>
    <p className='text-sm mt-[9.2px] font-normal'>Security Layers</p>
    <p className='text-xs mt-[11px] tracking-tight'>The blockchain technology used in </p>
    <p className='text-xs tracking-tight'>the OB platform for storing sensitive </p>
    <p className='text-xs tracking-tight'>documents makes it highly trustworthy and secure.</p>
    </div>
    </SwiperSlide>

    <SwiperSlide>    <div className='flex flex-col max-w-screen-xl h-[190px] bg-white  border-gray-200 border-2 justify-center items-center text-center'><img className='w-[162px] h-[97.8px] mt-[7px] ' src='/img1/20.png'/>
    <p className='text-sm mt-[9.2px] font-normal'>Account Aggregation</p>
    <p className='text-xs mt-[11px] tracking-tight'>The users will be able to add multiple</p>
    <p className='text-xs tracking-tight'> accounts (even from different banks).</p></div></SwiperSlide>

    <SwiperSlide>    <div className='flex flex-col max-w-screen-xl h-[190px] bg-white  border-gray-200 border-2 justify-center items-center text-center'><img className='w-[162px] h-[97.8px] mt-[7px] ' src='/img1/13.png'/>
    <p className='text-sm mt-[9.2px] font-normal'>Core Banking</p>
    <p className='text-xs mt-[11px] tracking-tight'>The users will be able to add multiple</p>
    <p className='text-xs tracking-tight'>accounts (even from different banks).</p></div></SwiperSlide>

      <SwiperSlide>    <div className='flex flex-col max-w-screen-xl h-[190px] bg-white  border-gray-200 border-2 justify-center items-center text-center'><img className='w-[162px] h-[97.8px] mt-[7px] ' src='/img1/14.png'/>
    <p className='text-sm mt-[9.2px] font-normal'>Lending</p>
    <p className='text-xs mt-[11px] tracking-tight'>easy money lending process without</p>
    <p className='text-xs tracking-tight'> any hindrance</p></div></SwiperSlide>
    
    </Swiper>
  
      </div>

<div className='mt-16  flex-row hidden sm:flex'>
  <div className='flex flex-col w-80 h-80 ml-28 text-center'>
    <div className='flex w-80 h-48 bg-white shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] justify-center'><img className='w-64 h-40 mt-4' src='/img1/image 39.png'/></div>
    <p className='text-2xl mt-3 font-normal'>Account Aggregation</p>
    <p className='text-sm mt-2'>The users will be able to add multiple</p>
    <p className='text-sm '> accounts (even from different banks).</p>
  </div>

  <div className='flex flex-col w-80 h-80 ml-10 text-center '>
    <div className='flex w-80 h-48 bg-white shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] justify-center'><img className='w-64 h-40 mt-4' src='/img1/13.png'/></div>
    <p className='text-2xl mt-3 font-normal'>Transaction</p>
    <p className='text-sm mt-2'>We provide two highly secure APIs (PISP</p>
    <p className='text-sm '> & AISP) for transactions.</p>
  </div>

  <div className='flex flex-col w-80 h-80 ml-10 text-center'>
    <div className='flex w-80 h-48 bg-white shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] justify-center'><img className='w-64 h-40 mt-4' src='/img1/14.png'/></div>
    <p className='text-2xl mt-3 font-normal'>AI Analytics</p>
    <p className='text-sm mt-2'>Our scripts allow the user to get detailed</p>
    <p className='text-sm '>insights in the form of graphs and text.</p>
  </div>
</div>
<div className='hidden sm:flex'>
<hr className='w-11/12 bg-[#E2E2E2] ml-14'/></div>


<div className='mt-10  flex-row hidden sm:flex'>
  <div className='flex flex-col w-80 h-80 ml-28 text-center'>
    <div className='flex w-80 h-48 bg-white shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] justify-center'><img className='w-64 h-40 mt-4' src='/img1/16.png'/></div>
    <p className='text-2xl mt-3 font-normal'>Block Cards</p>
    <p className='text-sm mt-2'>User details can easily be shared in the</p>
    <p className='text-sm '> form of digital cards, for any account.</p>
  </div>

  <div className='flex flex-col w-80 h-80 ml-10 text-center'>
    <div className='flex w-80 h-48 bg-white shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] justify-center'><img className='w-64 h-40 mt-4' src='/img1/15.png'/></div>
    <p className='text-2xl mt-3 font-normal'>Document Vault</p>
    <p className='text-sm mt-2'>Users will store sensitive documents in our </p>
    <p className='text-sm '>highly secure vaults built on blockchain.</p>
  </div>

  <div className='flex flex-col w-80 h-80 ml-10 text-center'>
    <div className='flex w-80 h-48 bg-white shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] justify-center'><img className='w-64 h-40 mt-4' src='/img1/17.png'/></div>
    <p className='text-2xl mt-3 font-normal'>Security Layers</p>
    <p className='text-sm mt-2'>The blockchain technology used in the OB</p>
    <p className='text-sm '> platform for storing sensitive documents</p>
    <p className='text-sm'> makes it highly trustworthy and secure.</p>
  </div>
</div>

<div className='hidden sm:flex'>
<hr className='w-11/12 bg-[#E2E2E2] ml-14'/></div>

<div className='mt-10  flex-row hidden sm:flex'>
  <div className='flex flex-col w-80 h-80 ml-28 text-center'>
    <div className='flex w-80 h-48 bg-white shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] justify-center'><img className='w-64 h-40 mt-4' src='/img1/18.png'/></div>
    <p className='text-2xl mt-3 font-normal'>Account Aggregation</p>
    <p className='text-sm mt-2'>The users will be able to add multiple</p>
    <p className='text-sm '> accounts (even from different banks).</p>
  </div>

  <div className='flex flex-col w-80 h-80 ml-10 text-center'>
    <div className='flex w-80 h-48 bg-white shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] justify-center'><img className='w-64 h-40 mt-4' src='/img1/19.png'/></div>
    <p className='text-2xl mt-3 font-normal'>Core Banking</p>
    <p className='text-sm mt-2'>The users will be able to add multiple</p>
    <p className='text-sm '> accounts (even from different banks).</p>
  </div>

  <div className='flex flex-col w-80 h-80 ml-10 text-center'>
    <div className='flex w-80 h-48 bg-white shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] justify-center'><img className='w-64 h-40 mt-4' src='/img1/20.png'/></div>
    <p className='text-2xl mt-3 font-normal'>Lending</p>
    <p className='text-sm mt-2'>Easy money lending process without any</p>
    <p className='text-sm '> hindrance</p>
  </div>
</div>

<div className='sm:h-[400px] bg-[#FFEEDA] sm:mt-24 sm:w-[1263px] w-screen  justify-center flex h-[496px] mt-10'>
  <div className='flex sm:flex-row justify-center flex-col'><img src='/img1/21.png' className='sm:h-80 sm:w-[500px] sm:mt-10 w-[297px] h-[196px]  sm:ml-0 '/>
  <div className='sm:h-80 sm:w-[500px] bg-white sm:mt-10 w-[295px] h-[260px] sm:ml-0  text-center'><p className='sm:mt-10 sm:ml-14 sm:mr-16 sm:text-lg text-xs mt-4 ml-[36px] mr-[26px] sm:tracking-normal tracking-widest'>Open banking allows access and control of consumer banking and financial accounts through third-party applications. It has the potential to reshape the competitive landscape and consumer experience of the banking industry. It raises the potential for both promising gains and grave risks to consumers as more of their data is shared more widely.</p></div>
  </div>
</div>

<div className='h-[400px] bg-white mt-14 hidden sm:flex ml-24 w-[1000px]'>
  <div className='flex flex-row justify-center'>
  <div className='h-80 w-[500px] bg-white mt-10  '><p className='mt-10 ml-14 mr-20 text-lg'>Also known as ‘Open Bank Data’, this banking practice provides third-party financial service providers free access to consumer banking, transaction, and other financial data from banks and non-bank financial institutions through the use of application programming interfaces (APIs).</p></div>
  <img src='/img1/image 19.png' className='h-80 w-[500px] mt-10'/>
  </div>
</div>

<div className='h-[440px] w-screen flex justify-center bg-white mt-[65px] sm:hidden'>
  <div className='flex flex-col justify-center'><img src='/img1/image 19.png' className=' w-[297px]   h-[196px] '/>
  <div className='h-[260px] w-[295px] bg-white  text-center '><p className='mt-4 ml-[36px] mr-[26px] text-xs tracking-widest'>Also known as ‘Open Bank Data’, this banking practice provides third-party financial service providers free access to consumer banking, transaction, and other financial data from banks and non-bank financial institutions through the use of application programming interfaces (APIs).</p></div>
  
  </div>
</div>

<div className='sm:h-[400px] bg-[#FFEEDA] sm:mt-24 sm:w-[1263px] w-screen flex justify-center h-[496px] mt-4'>
  <div className='flex sm:flex-row justify-center flex-col'><img src='/img1/image 20.png' className='sm:h-80 sm:w-[500px] sm:mt-10 w-[297px] h-[196px]  sm:ml-0 '/>
  <div className='sm:h-80 sm:w-[500px] bg-white sm:mt-10 w-[295px] h-[260px] sm:ml-0  text-center'><p className='sm:mt-10 sm:ml-14 sm:mr-16 sm:text-lg text-xs mt-4 ml-[36px] mr-[26px] sm:tracking-normal tracking-widest'>Our web app is time and labor efficient and offers features to establish user control over cash flow. We estimate that through the OB platform, banks will be able to generate approximately 30% more revenue.</p></div>
  </div>
</div>

<div className='flex sm:w-[1263px] w-screen justify-center items-center'>
<div className='sm:mt-32 text-center mt-[59px] sm:ml-0  tracking-wide'><p className='sm:text-4xl sm:font-bold sm:tracking-normal text-base font-semibold'>Related Articles</p></div></div>

<div className='mt-14 flex flex-col sm:flex-row w-screen justify-center items-center  sm:w-[1263px] '>
<div className='flex flex-col w-80 h-128 sm:ml-0   justify-center items-center'>
    <div className='  justify-center'><img className='w-72 h-48 mt-4' src='/img1/22.png'/></div>
    <p className=' mt-10 font-semibold'>Fraud Landscape and risk in the open</p>
    <p className=' font-semibold'>banking - sharing customer data</p>
    <p className='text-sm mt-8 text-[#5B5B5B]'>What hasn’t technological advancement</p>
    <p className='text-sm text-[#5B5B5B]'>made facile in today’s world? Want to</p>
    <p className='text-sm text-[#5B5B5B] '>purchase groceries? Well, they are just one</p>
    <p className='text-sm text-[#5B5B5B] '>tap away from being delivered on your</p>
    <p className='text-sm text-[#5B5B5B] '> porch.</p>
    <div className='bg-[#0057FF] shadow-[0_0px_0px_-4px_rgb(0,0,0,0.25)] text-center mt-10 w-24 h-8 rounded sm:ml-0 '><a href='/a'><p className='text-white text-sm mt-1'>Read more</p></a></div>


  </div>

  <div className='flex flex-col w-80 h-128 justify-center items-center mt-[54px] sm:mt-0 '>
    <div className='  justify-center'><img className='w-72 h-48 mt-4' src='/img1/23.png'/></div>
    <p className=' mt-10 font-semibold'>The Future Of Open Banking</p>
    <p className='text-sm mt-8 sm:mt-14 text-[#5B5B5B]'>Open Banking is a secure technology, which </p>
    <p className='text-sm text-[#5B5B5B]'>consists of an API (Application Programming</p>
    <p className='text-sm text-[#5B5B5B] '> Interface) that allows consumers and SME</p>
    <p className='text-sm text-[#5B5B5B] '> (Small Medium Enterprises) to safely</p>
    <div className='bg-[#0057FF] shadow-[0_0px_0px_-4px_rgb(0,0,0,0.25)] text-center mt-14 w-24 h-8 rounded sm:ml-0 '><a href='/a'><p className='text-white text-sm mt-1'>Read more</p></a></div>
    


  </div>

  <div className='flex flex-col w-80 h-128 justify-center items-center mt-[54px] sm:mt-0 '>
    <div className='  justify-center'><img className='w-72 h-48 mt-4' src='/img1/24.png'/></div>
    <p className=' mt-10 font-semibold'>Online banking frauds and </p>
    <p className=' font-semibold'>challenges faced by businesses</p>
    <p className='text-sm mt-8 text-[#5B5B5B]'>Banks are the engines that run the </p>
    <p className='text-sm text-[#5B5B5B]'>operations of the financial sector,</p>
    <p className='text-sm text-[#5B5B5B] '> monetary markets and the growth of an</p>
    <p className='text-sm text-[#5B5B5B] '>economy. The innovation in technology</p>
    <div className='bg-[#0057FF] shadow-[0_0px_0px_-4px_rgb(0,0,0,0.25)] text-center mt-14 w-24 h-8 rounded sm:ml-0q '><a href='/a'><p className='text-white text-sm mt-1'>Read more</p></a></div>
    
   
  </div>
</div>

<div className='flex justify-center '>
<div className='sm:hidden w-[107px] h-[29px] border border-black mt-[45px] text-center'><a href='/a'><p>Load more</p></a></div></div>


<div className='mt-14  flex-row hidden sm:flex'>
<div className='flex flex-col w-128 text-center h-96 ml-44 '>
    <div className='  justify-center'><img className='w-72 h-48 mt-4' src='/img1/25.png'/></div>
    <p className=' mt-10 font-semibold'>Regulatory and audit changes</p>
    
    <p className='text-sm mt-10 text-[#5B5B5B]'>The fintech revolution is fuelled in part by</p>
    <p className='text-sm text-[#5B5B5B]'>open banking. Regulators have recognized</p>
    <p className='text-sm text-[#5B5B5B] '>open banking as a way to introduce</p>
    <p className='text-sm text-[#5B5B5B] '>  competition and innovation into the</p>
    
   

  </div>

  <div className=' flex-col w-80 h-96 text-center ml-10 hidden sm:flex'>
    <div className='  justify-center'><img className='w-72 h-48 mt-4' src='/img1/26.png'/></div>
    <p className=' mt-10 font-semibold'>Fintech trends in 2021</p>
    
    <p className='text-sm mt-10 text-[#5B5B5B]'>Since the last global financial crisis,</p>
    <p className='text-sm text-[#5B5B5B]'> investments in Fintech have been growing.</p>
    <p className='text-sm text-[#5B5B5B] '> The expansion of the sector was largely a</p>
    <p className='text-sm text-[#5B5B5B] '> technological response to the </p>
    <p className='text-sm text-[#5B5B5B] '> shortcomings of the</p>
  </div>


</div>


<div className='flex-row hidden sm:flex'>
<div className='bg-[#0057FF] shadow-[0_0px_0px_-4px_rgb(0,0,0,0.25)] text-center mt-24 w-24 h-8 rounded ml-64'><a href='/a'><p className='text-white text-sm mt-1'>Read more</p></a></div>
<div className='bg-[#0057FF] shadow-[0_0px_0px_-4px_rgb(0,0,0,0.25)] text-center mt-24 w-24 h-8 rounded ml-64'><a href='/a'><p className='text-white text-sm mt-1'>Read more</p></a></div>

</div>

<div className=' flex flex-col sm:h-40 h-28 bg-[#393939] mt-32 sm:w-[1263px] '>
  <p className='sm:ml-32 font-bold sm:text-3xl text-white sm:mt-10 tracking-wide mt-[24px] ml-[32px] text-2xl'>Our Unique features</p>
  <div className='w-4/5 h-0.5  bg-white ml-[32px] sm:ml-32 sm:mt-10 mt-[16px]'></div>
  </div>

  
  <div className='flex sm:flex-row flex-col justify-center items-center sm:w-[1263px] bg-[#393939] sm:h-[420px] h-[1200px]'>
  <div className='flex flex-col w-80 h-96  ml-0 '>

    <div className='justify-center items-center flex'><img className='sm:w-72 sm:h-48 sm:mt-4  sm:ml-0 w-[239px] h-[161px]' src='/img1/image 21.png'/></div>
    
      <div className='flex justify-center items-center'>
      <div className='w-[239px] sm:w-72 flex flex-col  '>
      <ul className=' list-disc ml-4 '>
    <li className='text-sm text-white sm:mt-4  sm:ml-0  mt-[22px] '>Our product, powered by analytics, produces a full visualization, combined with a detailed analysis.</li>
    <li className='text-sm text-white sm:mt-4  sm:ml-0  mt-[22px]'>The product offers convenience and time efficiency, enabling a user to compare multiple transactions with ease.</li></ul></div> </div>
    
  </div>

  <div className='flex flex-col w-80 h-96 sm:ml-10 '>

    <div className='justify-center items-center flex'><img className='sm:w-72 sm:h-48 sm:mt-4  sm:ml-0 w-[239px] h-[161px]' src='/img1/image 24.png'/></div>
    <div className='flex justify-center items-center'>
      <div className='w-[239px] sm:w-72 flex flex-col  '>
    <ul className=' list-disc ml-4'>
    <li className='text-sm text-white sm:mt-4  sm:ml-0  mt-[22px]'>Our product is incredibly safe, owing to the additional layer of security through AISP & PISP APIs.</li>
    <li className='text-sm text-white sm:mt-4  sm:ml-0  mt-[22px]'>The borrower can share their contact details, income, credit score and history with the lender at the click of a button.</li></ul></div></div>
    
  </div>

  <div className='flex flex-col w-80 h-96 sm:ml-10 '>

    <div className='justify-center items-center flex'><img className='sm;w-72 sm:h-48 sm:mt-4  sm:ml-0 w-[239px] h-[161px]' src='/img1/image 25.png'/></div>
    <div className='flex justify-center items-center'>
      <div className='w-[239px] sm:w-72 flex flex-col  '><ul className=' list-disc ml-4'>
    <li className='text-sm text-white sm:mt-4  sm:ml-0  mt-[22px]'>End to End encryption enables information to be exchanged and stored very safely.</li>
    <li className='text-sm text-white sm:mt-4   sm:ml-0  mt-[22px]'>Our web app allows users to bank from their systems, remotely and conveniently.</li></ul></div></div>
    
  </div>
  </div>

  <div className='sm:h-52 bg-black flex sm:flex-row flex-col h-[269px] sm:w-[1263px] '>
    <p className='text-white font-bold sm:mt-14 sm:ml-40 ml-[32px] tracking-normal sm:text-2xl text-xl mt-[41px] '>Contact Us</p>
    <div>
     <div className='sm:w-96 sm:ml-[450px] h-20 ml-[32px] mr-[32px] w-[260px] sm:mr-0'><p className='text-white text-xl sm:font-semibold sm:tracking-widest  sm:ml-20 mt-14 tracking-wide'>Learn more about our open banking feature.</p></div> 
     <div className='sm:ml-[450px] ml-[32px]'> <a href='/a'><div className='w-32 h-10 border-white border-2 rounded-full text-center sm:ml-20'><p className='text-white mt-1'>Contact Us</p></div></a></div>
    </div>
  </div>


  <div className='h-28 bg-white sm:w-[1263px]'><p className='text-[#FF0000] sm:ml-28 ml-[30px] mt-20 text-xl tracking-widest'>Terms and conditions</p></div>

  <div className=' sm:h-[470px] bg-[#EA580C] h-[590px] sm:w-[1263px] max-w-screen-xl'>
              <div className='flex flex-col'>
                <div className='flex sm:flex-row flex-col'>
                  <div className='flex flex-col'>
                    <div className='flex flex-row'>
                  <img src='/img/FG LOGO_white 4.png' className='sm:w-[80px] sm:h-[60px] sm:ml-[50px] sm:mt-10 w-[45px] h-[36.7px] ml-[33px] mt-[50px]'/>
                  <p className='sm:ml-[50px] text-white font-bold sm:mt-14 sm:text-3xl ml-[33px] mt-[40px] text-2xl sm:mr-0 mr-[200px]'>FINTRACT GLOBAL</p></div>
                  <div className='h-20 w-4/5 sm:ml-[50px] sm:mt-4 ml-[33px] mt-[11px]'>
                  <p className='text-white sm:text-sm text-xs'>At Fintract Global Ltd, we combine a cutting-edge tech stack with exceptional talent from Europe, Asia and America to lead change in how financial entities work. Headquartered in London, Fintract Global develops cutting edge fintech and regtech products.</p></div>
                  <div className='flex flex-row sm:mt-4 mt-[26px]'>
                  <a href='/a'><AiOutlineTwitter className='text-white w-6 h-6 ml-12'/></a>
                  <a href='/a'><AiFillInstagram  className='text-white w-6 h-6 ml-4'/></a>
                  <a href='/a'><AiFillFacebook  className='text-white w-6 h-6 ml-4'/></a>
                  <Link href='/a'><AiFillLinkedin  className='text-white w-6 h-6 ml-4'/></Link>
                  </div>
                  
                  </div>
                  <div className='flex flex-col sm:mt-10 mt-[16px] w-3/3 sm:w-2/3 sm:ml-36 ml-[39px]'>
                    <p className='text-white sm:text-3xl font-bold'>Contacts</p>
                   
                      
                        <a href='/a'>
                      <div className='flex flex-row sm:mt-8 mt-[11px]'><img src='/img/Group 68.png' className='sm:w-[40px] sm:h-[40px] w-[30px] h-[30px]'/>
                        <div className='flex flex-row'>
                          <p className='text-white font-semibold sm:ml-6 ml-[14px] sm:mt-2'>Phone:</p>
                          <p className='text-white sm:ml-2 sm:mt-3 sm:text-sm text-xs ml-[14px]'>+44-2037373227</p>
                        </div>
                      </div>
                    </a>

                    <a href='/a'>
                      <div className='flex flex-row  sm:mt-8 mt-[11px]'><img src='/img/Group 69.png' className='sm:w-[40px] sm:h-[40px] w-[30px] h-[30px]'/>
                        <div className='flex flex-row'>
                          <p className='text-white font-semibold sm:ml-6 ml-[14px] sm:mt-2'>Email:</p>
                          <p className='text-white ml-[14px] sm:text-sm sm:ml-2 sm:mt-3 text-xs'>contact@fintract.co.uk</p>
                        </div>
                      </div>
                    </a>

                    <a href='/a'>
                    <div className='flex flex-row sm:mt-8 mt-[11px] '><img src='/img/Group 67.png' className='sm:w-[40px] sm:h-[40px] w-[30px] h-[30px]'/>
                        <div className='flex flex-row'>
                          <p className='text-white font-semibold sm:ml-6 ml-[14px]'>Address:</p>
                          <p className='text-white sm:ml-2 ml-[14px] sm:text-sm  text-xs '>Docklands Business Center 10-16 Tiller Road E14 8PX</p>
                           <p className='text-white sm:ml-2 ml-[14px] sm:text-sm text-xs'></p>
                           
                        </div>
                      </div>
                    </a>

                    

                    

                  </div>
                </div>
                <hr className='w-11/12 sm:justify-center sm:items-center sm:ml-10 ml-4 mt-4 sm:mt-4'></hr>
                <p className='text-center text-white text-xs mt-8 hidden sm:flex sm:justify-center sm:items-center '>Fintract Global takes your privacy very seriously. We may process your personal information for carefully considered and specific purposes which are in our interests and</p>
                <p className='text-center text-white text-xs  hidden sm:flex sm:justify-center sm:items-center '>enable us to enhance the services we provide.</p>
                
                <div className='sm:hidden flex flex-col justify-center items-center text-center'>
                <p className='text-white text-xs ml-[14px] mr-[10px]  mt-[30px] sm:justify-center sm:items-center'>Fintract Global takes your privacy very seriously. We may process your personal information for carefully considered and specific purposes which are in our interests and enable us to enhance the services we provide.</p>
                <p className=' text-white text-xs mt-4 justify-end'>privacy policy</p>
                <p className=' text-white text-xs mt-4 justify-start'>© Copyright 2023. All rights reserved</p>
                </div>
            
                <div className='sm:ml-0 ml-0 hidden sm:flex flex-row'>
               
                <p className='ml-8 text-white text-xs mt-10 justify-start'>© Copyright 2023. All rights reserved</p>
                <p className='sm:ml-[900px] ml-[100px] text-white text-xs mt-10 justify-end'>privacy policy</p> </div>
              </div>
            </div>



        </main>
    )
}

export default Banking

