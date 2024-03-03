import React from 'react'
import logo from '../../../public/favicon.png'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {motion, AnimatePresence} from "framer-motion"
import { usePathname } from 'next/navigation'


export default function Header() {
    const path = usePathname();
    const [navbarOpen, setNavbarOpen] = useState(false);
    console.log(path)
    return (<>
        <header className="w-screen flex justify-center items-center">
            <nav className="px-4 py-4 w-full flex justify-between items-center">
                <Link href="/">
                    <div className="flex items-center justify-center flex-row lg:p-2">
                        <Image
                            src={logo}
                            alt="codechef"
                            className="w-auto h-11 sm:h-12 lg:h-14 sm:ml-1"

                        />
                    </div>
                </Link>
                <div className="lg:hidden">
                    <button
                        className="navbar-burger flex items-center justify-center font-black"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <div className="flex items-center justify-center sm:p-1 object-scale-down">
                            <div className="flex items-center justify-center text-gray-800 w-11 h-11 blob p-2 sm:mr-1">
                                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 7H11C11.2652 7 11.5196 7.10536 11.7071 7.29289C11.8946 7.48043 12 7.73478 12 8C12 8.26522 11.8946 8.51957 11.7071 8.70711C11.5196 8.89464 11.2652 9 11 9H6C5.73478 9 5.48043 8.89464 5.29289 8.70711C5.10536 8.51957 5 8.26522 5 8C5 7.73478 5.10536 7.48043 5.29289 7.29289C5.48043 7.10536 5.73478 7 6 7V7ZM13 15H18C18.2652 15 18.5196 15.1054 18.7071 15.2929C18.8946 15.4804 19 15.7348 19 16C19 16.2652 18.8946 16.5196 18.7071 16.7071C18.5196 16.8946 18.2652 17 18 17H13C12.7348 17 12.4804 16.8946 12.2929 16.7071C12.1054 16.5196 12 16.2652 12 16C12 15.7348 12.1054 15.4804 12.2929 15.2929C12.4804 15.1054 12.7348 15 13 15ZM6 11H18C18.2652 11 18.5196 11.1054 18.7071 11.2929C18.8946 11.4804 19 11.7348 19 12C19 12.2652 18.8946 12.5196 18.7071 12.7071C18.5196 12.8946 18.2652 13 18 13H6C5.73478 13 5.48043 12.8946 5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12C5 11.7348 5.10536 11.4804 5.29289 11.2929C5.48043 11.1054 5.73478 11 6 11Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                    </button>
                </div>
                <div className="hidden lg:flex flex-row items-center justify-center p-1">
                    <div className="flex flex-row items-center justify-center gap-12 p-1">
                        <Link href="/">
                            <div className={`${path == "/" ? "text-[#921ae8]": "text-[#ffffff]"} flex item-center font-black text-sm justify-center cursor-pointer hover:text-[#921ae8]`} >
                                Home
                            </div>
                        </Link>
                        <Link href="/#overview">
                            <div className={`${path == "/#overview" ? "text-[#921ae8]": "text-[#ffffff]"} flex item-center font-black text-sm justify-center cursor-pointer hover:text-[#921ae8]`}>
                                Overview
                            </div>
                        </Link>
                        <Link href="/gallery">
                            <div className={`${path == "/gallery" ? "text-[#921ae8]": "text-[#ffffff]"} flex item-center font-black text-sm justify-center cursor-pointer hover:text-[#921ae8]`}>
                                Gallery
                            </div>
                        </Link>
                        <Link href="/">
                            <div className={`${path == "/pastevents" ? "text-[#921ae8]": "text-[#ffffff]"} flex item-center font-black text-sm justify-center cursor-pointer hover:text-[#921ae8]`}>
                                Past Events
                            </div>
                        </Link>
                        <Link href="/">
                            <div className={`${path == "/socials" ? "text-[#921ae8]": "text-[#ffffff]"} flex item-center font-black text-sm justify-center cursor-pointer hover:text-[#921ae8]`}>
                                Socials
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
            <div
                className={
                    "navbar-menu relative z-50 lg:invisible" +
                    (navbarOpen ? "flex" : " invisible")
                }
            >
                <div className="navbar-backdrop backdrop-blur-sm fixed inset-0 bg-black/40"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold leading-none" href="#home">
                            <Image src={logo} alt="happiness" className="w-auto h-12" />
                        </a>
                        <button
                            className="navbar-close"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg
                                className="h-6 w-6 text-gray-700 cursor-pointer hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-start justify-center p-1">
                        <div className="flex flex-col items-start justify-center gap-12 font-zilla p-1 text-grey-800">
                            <Link
                                href="/"

                            >
                                <div className="flex item-center font-black text-sm justify-center cursor-pointer text-[#000]">
                                    Home
                                </div>
                            </Link>
                            <Link
                                href="/#overview"

                            >
                                {" "}
                                <div className="flex item-center font-black text-sm justify-center cursor-pointer text-[#000]">
                                    Overview
                                </div>
                            </Link>
                            <Link
                                href="/"

                            >
                                <div className="flex item-center font-black text-sm justify-center cursor-pointer text-[#000]">
                                    Gallery
                                </div>
                            </Link>

                            <Link
                                href="/#team"

                            >
                                <div className="flex item-center font-black text-sm justify-center cursor-pointer text-[#000]">
                                    Past Events
                                </div>
                            </Link>
                            <Link
                                href="/#socials"

                            >
                                <div className="flex item-center font-black text-sm justify-center cursor-pointer text-[#000]">
                                    Socials
                                </div>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    </>)
}