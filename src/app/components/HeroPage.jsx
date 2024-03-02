import React from 'react'
import Image from "next/image";
import Head from 'next/head'
import Script from 'next/script'
import logo from "../../../public/favicon.png"
import Link from 'next/link'
import { useState } from "react";
import star from '../../../public/star.svg'
import linkedin from '../../../public/linkedin.svg'
import instagram from '../../../public/instagram.svg'
import twitter from '../../../public/twitter.svg'
import line from '../../../public/Line.svg'
import { motion, AnimatePresence } from "framer-motion"



export default function HeroPage() {
    return (<>
        <div id="c" className="flex items-center justify-center py-8 md:px-2 lg:px-4 sm:px-4 w-full h-full ">
            <div className='flex items-center justify-center px-2 sm:px-4 md:px-2 lg:px-4 flex-col max-w-[95%] h-full py-4'>
                <div className='flex items-center justify-start flex-col sm:flex-row w-full gap-12 my-2 h-full sm:p-0 s:p-1 md:p-1'>
                    {/* gif */}
                    <div className='flex items-center justify-start w-full md:w-[50%]'><h1 className='mainHeading text-[2.1rem]  lg:p-2 xs:text-[2.8rem] s:text-5xl sm:text-[4rem] md:text-[5rem] lg:text-8xl xl:text-9xl 2xl:text-[154px] font-black sm:leading-tight text-[#921ae8]'>UTKRISHTI</h1></div>
                </div>
                <div className='flex items-center justify-start flex-col w-full h-full sm:p-0 s:p-1 md:p-1 gap-2'>
                    <div className='flex items-center justify-start w-full h-full'><h1 className='secHeading text-2xl lg:p-2 xs:text-[2rem]  s:text-4xl sm:text-5xl md:text-6xl lg:text-7xl  whitespace-nowrap font-black sm:leading-tight text-[#d2d2d2]'>A TECH ODYSSEY</h1></div>
                </div>
                <div className='w-full h-full flex items-center justify-end gap-8 sm:p-0 s:p-1 md:p-1'>
                    <div className='flex items-start justify-start flex-col md:flex-row w-full p-1  gap-6 sm:p-2 my-6'>

                        <p className='paragraphText font-normal text-[0.7rem] xs:text-xs sm:text-sm lg:text-lg text-[#d6d5d5]'>Buckle up for the biggest tech showdown with Coding Ninjas CUIET’s another flagship event ”Utkrishti 2024: An Odyssey of Career Advancement and Innovation”. After what feels like a lifetime, the ultimate tech celebration is finally here! Experience thrilling battles, career advices, industrial talks, top-notch entertainment and delectable treats all in one place. From coding battles to mock interviews, we have curated surprises for everyone, ensuring an unforgettable experience.
                        </p>

                    </div>
                    {/* star */}
                    <div className='star flex items-start justify-end md:{hidden} h-full'><Image src={star} loading="lazy" alt="star" className='w-auto h-6 sm:h-8 md:mr-6' /></div>
                </div>
                <div className='hidden sm:flex sm:absolute items-center justify-end bottom-0 right-2 xl:right-4 sm:w-auto sm:h-auto w-full h-full'>
                    <div className="flex   gap-2 item-center justify-center flex-col">
                        <div className="flex items-center justify-center rotate-[-90]">
                            <Image src={linkedin} alt="linkedin" className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div className="flex items-center justify-center rotate-[-90]">
                            <Image src={instagram} alt="instagram" className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div className="flex items-center justify-center rotate-[-90]">
                            <Image src={twitter} alt="twitter" className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div className="flex items-center justify-center rotate-[-90]">
                            <Image src={line} alt="line" className="w-6 h-6 sm:w-8 sm:h-8" />
                        </div>
                    </div></div>
            </div>
        </div>
    </>)
}