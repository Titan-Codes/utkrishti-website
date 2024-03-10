import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Socials() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    return (<>
        <section className="w-screen h-full bg-black" id="socials">
        <motion.div
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress
                }}
                className="w-full h-full"
            >
            <div className="w-full h-full flex items-start justify-start flex-col p-6">
                <div className="flex items-center justify-start">
                    <h1 className='text-[2rem]  xs:text-[2.7rem] s:text-6xl sm:text-[4rem] md:text-[5rem] lg:text-8xl xl:text-9xl 2xl:text-[154px] font-black sm:leading-tight text-[#ffffff] whitespace-nowrap'>SOCIALS <span className="text-[#921ae8]">.</span></h1>
                </div>
                <div className='flex md:items-start justify-center  lg:flex-row flex-col py-6 mt-12 w-full h-full'>
                    <div className='flex items-center s:justify-start justify-center  lg:justify-center gap-6 flex-1 flex-row p-2 w-full h-full'>
                        <Link href="https://instagram.com/codingninjas_cuiet" className='flex items-center justify-center s:h-[35rem] h-[30rem] w-[15rem] s:w-[17.5rem]'>
                            <img src="instagram.jpeg" alt="instagram" className='w-full h-full border sm:ml-6 lg:m-0 border-white rounded-3xl ' />
                            {/* <Image alt="" width={500} height={500} src="instagram.jpeg" className="" /> */}
                        </Link>
                    </div>
                    <div className='flex items-center justify-center flex-1 py-4 md:p-4 flex-col gap-4 w-full h-full'>
                        <div className='w-full h-full flex items-center  justify-center flex-col gap-4'>
                            <div className='flex items-center justify-center'>
                                <h1 className='text-[2.25rem]  xs:text-[2.7rem] sm:text-5xl lg:text-6xl font-black sm:leading-tight text-[#ffffff] whitespace-nowrap'>FOLLOW US</h1>
                            </div>
                            <div className='flex items-center justify-center'>
                                <h1 className='text-[2rem]  lg:text-[2.7rem] font-black sm:leading-tight text-[#ffffff] whitespace-nowrap'>INSTAGRAM</h1>
                            </div>
                            <div className='flex items-center justify-start'>
                                <h1 className='text-[2rem]  lg:text-[2.7rem] font-black sm:leading-tight text-[#ffffff] whitespace-nowrap'>LINKEDIN</h1>
                            </div>
                            <div className='flex items-center justify-center'>
                                <Link href="https://instagram.com/codingninjas_cuiet" className='flex items-center justify-center'>
                                    <h1 className='text-[1.5rem]  lg:text-[2.7rem] font-black sm:leading-tight text-[#ffffff] whitespace-nowrap'>@codingninjas_cuiet</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center s:justify-end  justify-center lg:justify-center gap-6 flex-1 flex-row p-2 w-full h-full'>
                        <Link href="https://www.linkedin.com/company/codingninjas-cuiet/" className='flex items-center justify-center s:h-[35rem] h-[30rem] w-[15rem] s:w-[17.5rem]'>
                            <img src="linkedin.jpeg" alt="linkedin" className='w-full sm:mr-6 lg:m-0 h-full border border-white rounded-3xl ' />
                            {/* <Image alt="" width={500} height={500} src="linkedin.jpeg" className="" /> */}
                        </Link>
                    </div>
                </div>

            </div>
            </motion.div>
        </section>
    </>)
}