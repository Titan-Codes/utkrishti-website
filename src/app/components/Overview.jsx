import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Overview() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
    return (<>
        <section id="overview" className="w-screen h-full bg-[#000000] flex items-center justify-center">
            <motion.div
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress
                }}
                className="w-full h-full"
            >
                <div className="w-full h-full flex items-center justify-center flex-col py-4 lg:p-2">
                    <div className="heading flex items-center justify-start">
                        <h1 className="text-[4rem] text-[#fff]">OVERVIEW</h1>
                    </div>
                    <div className="w-full h-full flex items-start justify-center flex-row py-2 lg:p-2 hidden">
                        <div className="grid md:grid-cols-2 gap-3 sm:grid-cols-1 lg:grid-cols-3">
                            <div className="rounded-lg border-4 border-[#921ae8] h-94">
                                <Image alt="" width={500} height={500} src="/images/standeewali.jpg" className="" />
                            </div>
                            <div className="rounded-lg border-4 border-[#921ae8] h-94">
                                <Image alt="" width={500} height={500} src="/images/canopy.jpg" className="" />
                            </div>
                            <div className="rounded-lg border-4 border-[#921ae8] h-94">
                                <Image alt="" width={500} height={500} src="/images/boardwali.jpg" className="" />
                            </div>
                            <div className="rounded-lg border-4 border-[#921ae8] h-94">
                                <Image alt="" width={500} height={500} src="/images/bgflip.jpg" className="" />
                            </div>
                            <div className="rounded-lg border-4 border-[#921ae8] h-94">
                                <Image alt="" width={500} height={500} src="/images/bag.jpg" className="" />
                            </div>
                            <div className="rounded-lg border-4 border-[#921ae8] h-94">
                                <Image alt="" width={500} height={500} src="/images/mukul.jpg" className="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* SWIPER */}

                <div className="swiper ">

                    <Swiper
                        modules={[Navigation, Pagination, EffectFade, Autoplay]}
                        slidesPerView={5}
                        spaceBetween={50}
                        navigation={false}
                        autoplay={{ delay: 4500 }}
                        breakpoints={{
                            300: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            520: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },
                        }}
                    >
                        <SwiperSlide className="s:p-4 xs:p-7 p-4 flex items-center justify-start">
                            <div className='flex items-center justify-center grid-cols-1 h-[28rem]  w-auto group overflow-hidden relative'>
                                <img src="/images/canopy.jpg" loading="lazy" alt="ourteam" className="h-full w-full group-hover:scale-[1.2] transition duration-300 ease-in-out object-cover" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="s:p-4 xs:p-7 p-4 flex items-center justify-start">
                            <div className='flex items-center justify-center grid-cols-1 h-[28rem]  w-auto group overflow-hidden relative'>
                                <img src="/images/mukul.jpg" loading="lazy" alt="ourteam" className="h-full w-full group-hover:scale-[1.2] transition duration-300 ease-in-out object-cover" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="s:p-4 xs:p-7 p-4 flex items-center justify-start">
                            <div className='flex items-center justify-center grid-cols-1 h-[28rem]  w-auto group overflow-hidden relative'>
                                <img src="/images/bag.jpg" loading="lazy" alt="ourteam" className="h-full w-full group-hover:scale-[1.2] transition duration-300 ease-in-out object-cover" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="s:p-4 xs:p-7 p-4 flex items-center justify-start">
                            <div className='flex items-center justify-center grid-cols-1 h-[28rem]  w-auto group overflow-hidden relative'>
                                <img src="/images/standeewali.jpg" loading="lazy" alt="ourteam" className="h-full w-full group-hover:scale-[1.2] transition duration-300 ease-in-out object-cover" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="s:p-4 xs:p-7 p-4 flex items-center justify-start">
                            <div className='flex items-center justify-center grid-cols-1 h-[28rem]  w-auto group overflow-hidden relative'>
                                <img src="/images/boardwali.jpg" loading="lazy" alt="ourteam" className="h-full w-full group-hover:scale-[1.2] transition duration-300 ease-in-out object-cover" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="s:p-4 xs:p-7 p-4 flex items-center justify-start">
                            <div className='flex items-center justify-center grid-cols-1 h-[28rem]  w-auto group overflow-hidden relative'>
                                <img src="/images/bgflip.jpg" loading="lazy" alt="ourteam" className="h-full w-full group-hover:scale-[1.2] transition duration-300 ease-in-out object-cover" />
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
                    <div className="secFooter flex items-center justify-center flex-col py-4 lg:p-[2rem]">
                        <h2 className="secHeading text-[#fff] text-3xl">AN OVERVIEW OF OUR EVENT: <span>UTKRISHTI<span className="text-[#921ae8]">&apos;24</span></span></h2>
                    </div>
            </motion.div>
        </section>
    </>)
}