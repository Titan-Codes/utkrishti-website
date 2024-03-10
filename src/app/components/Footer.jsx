import React from 'react'
import logo from '../../../public/favicon.png'
import Image from 'next/image'
import line from '../../../public/line2.svg'

export default function Footer(){
    return <>
    <section className="w-screen h-full bg-[#000]">
      <div className="flex items-center justify-center w-full h-full p-4">
        <div className="flex items-center justify-center w-full h-full xs:p-2">
          <div className="flex items-center justify-center w-full h-full flex-col s:p-2">
            <div className="flex items-center justify-center w-full h-full flex-col gap-1 p-4 s:p-6 bg-[#921ae8] sm:max-w-xl md:max-w-2xl lg:max-w-6xl xl:max-w-4xl  rounded-b-[44px] s:rounded-b-[64px] sm:rounded-b-[96px]  md:rounded-b-[144px]">
              <div className="flex-items-center justify-center w-[85%] my-6 md:mt-12">
                <Image src={line} alt="line" />
              </div>
              <div className="flex-items-center justify-center w-full sm:w-[80%] md::w-[75%] my-4 xs:my-6">
                <h1 className="text-2xl xs:text-3xl  text-center s:text-4xl font-black sm:leading-tight text-[#ffffff]">
               	Join us at <span className="text-[#000]">Utkrishti</span>
                </h1>
                <h2 className="text-xl xs:text-2xl text-center s:text-3xl sm:leading-tight text-[#ffffff]">THE BIGGEST TECH CELEBRATION</h2>
              </div>
              {/* <div className="flex items-center justify-center flex-row gap-4 md:mb-12 py-2 my-2 xs:my-6 w-full xs:w-[95%] sm:w-[75%] lg:w-[50%]">
               <Link to="https://docs.google.com/forms/d/e/1FAIpQLSezH9p9sd8QHaBhQO1v7bjHWj8VfEseCkYYyG4uiy3nPL-8nA/viewform?usp=sf_link" className="flex items-center justify-center w-[85%] xs:w-full bg-white group hover:bg-transparent transition duration-200 ease-in-out hover:border hover:border-black rounded-full p-2 flex-1">
                <button type="submit" className=" text-[#000000] group-hover:text-white rounded-full text-[.5rem] xs:text-xs font-black ">Register Now</button>
              </Link>
              <a href={pdf} download="rulebook" className="focus:none outline:none flex items-center justify-center w-[85%] xs:w-full bg-transparent group border border-white transition duration-200 ease-in-out  rounded-full p-2 flex-1">
                <button type="submit" className=" text-white  rounded-full text-xs font-black">Rule Book</button>
              </a>  
              </div> */}
            </div>
            <div className="flex items-center justify-center w-full my-6 s:my-8">
              <div className="flex items-center justify-center flex-row lg:p-2">
                <Image
                  src={logo}
                  alt="codechef"
                  className="w-auto h-11 sm:h-12 lg:h-14"
                />
              </div>
            </div>
            <div className="flex items-center justify-around p-4 w-full h-full sm:flex-row flex-col gap-6">
                      <p className="text-[#921ae8] font-black text-xs md:text-sm lg:text-base">PRIVACY POLICY</p>  
                      <p className="text-[#921ae8] text-center font-black text-xs md:text-sm lg:text-base sm:ml-10">COPYRIGHT @ALL RIGHTS RESERVED</p>  
                      <p className="text-[#921ae8] font-black text-xs md:text-sm lg:text-base">TERMS&CONDITIONS</p>  
                      
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
}