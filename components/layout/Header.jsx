"use client";
// import React, { useState } from 'react';
import { FaPhoneVolume } from "react-icons/fa";

export default function Header() {
  // const [navStyle, setNavStyle] = React.useState({});

  // const handleClick = () => {
  //   console.log('hi');
  //   setNavStyle({ right: '0' });
  // };

  function handleClick() {
    console.log("Clicked me!");
    alert("Clicked me!");
  }
    
  return (
    <>
      <header className="font-neue-400">
        <section className="bg-[#1c75ba] text-[#fff] py-[8px] max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:right-0 max-lg:z-50">
          <div className="container max-w-[1600px] px-[10px] lg:px-[80px] mx-auto">
            <div className="text-right">
              <ul className="inline-flex flex-wrap">
                <li className="flex gap-x-[30px]">
                  <span className="flex gap-x-[10px] items-center"><FaPhoneVolume /> Contact Us</span>
                  <a href="tel:+911726131700">+91-172-613-1700</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-[15px] relative max-lg:mt-[42px]">
          <div className="container max-w-[1600px] px-[10px] lg:px-[80px] mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full max-w-[200px]">
                <a href="/">
                  <img className="w-full" src="/images/DigiMantraLogo.svg" alt="DigiMantrs" />
                </a>
              </div>

              <div className="ml-auto max-lg:hidden">
                <a href="" className="inline-block bg-[#1c75ba] text-[#fff] rounded-[10px] p-[10px] text-[16px] leading-[24px] tracking-[0.28px] font-bold">Let's Talk</a>
              </div>

              <button className="absolute z-10 right-[15px] top-[50%] translate-y-[-50%] lg:hidden" onClick={handleClick}>
                <span className="w-[30px] h-[2px] bg-[#1c75ba] block"></span>
                <span className="w-[33px] h-[2px] bg-[#1c75ba] block my-[6px]"></span>
                <span className="w-[26px] h-[2px] bg-[#1c75ba] block"></span>
              </button>
            </div>
          </div>
        </section>

        <nav className="lg:border-t border-solid border-[#f6f6f6] shadow-[0_4px_12px_0_rgba(0,0,0,.03)] max-lg:fixed max-lg:right-[-300px] max-lg:top-[42px] max-lg:bottom-0 max-lg:z-50 max-lg:w-full max-lg:max-w-[300px] max-lg:bg-[#323848] transition-all">
          <div className="container max-w-[1600px] px-[30px] lg:px-[80px] mx-auto">
            <div className="lg:hidden py-[20px] flex border-b border-solid border-[#f6f6f6] mb-[20px]">
              <button type="button" className="">
                <span className="w-[30px] h-[2px] bg-[#1c75ba] block rotate-45"></span>
                <span className="w-[30px] h-[2px] bg-[#1c75ba] block -rotate-45 mt-[-2px]"></span>
              </button>
              <a href="" className="inline-block bg-[#1c75ba] text-[#fff] rounded-[10px] p-[10px] text-[16px] leading-[24px] tracking-[0.28px] font-bold ml-auto">
                Let's Talk
              </a>
            </div>

            <ul className="lg:flex lg:flex-wrap lg:justify-center lg:gap-x-[50px] text-[18px] leading-[19px] [&>li]:py-[16px] [&>li>a]:text-[#323848] max-lg:[&>li>a]:text-white">
              <li><a href="">Home</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Career</a></li>
              <li><a href="">Work</a></li>
              <li><a href="">Blog</a></li>
            </ul>
          </div>
        </nav>

      </header>
    </>
  );
}
