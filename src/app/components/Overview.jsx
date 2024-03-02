import React, {useRef, HTMLDivElement} from "react"
import { motion, AnimatePresence, useScroll } from "framer-motion"

export default function Overview() {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.001 1"]
    })
    return (<>
        <motion.div
        style={{
            scale: scrollYProgress,
            opacity: scrollYProgress
        }}
        >
            <div className="flex items-center justify-center py-8 md:px-2 lg:px-4 sm:px-4 w-full h-full">
                <div className='flex items-center justify-center px-2 sm:px-4 md:px-2 lg:px-4 flex-col max-w-[95%] h-full py-4'>
                    <div className='flex items-start justify-start flex-col md:flex-row w-full p-1  gap-6 sm:p-2 my-6'>

                        <p className='paragraphText font-normal text-[0.7rem] xs:text-xs sm:text-sm lg:text-lg text-[#d6d5d5]'>Buckle up for the biggest tech showdown with Coding Ninjas CUIET’s another flagship event ”Utkrishti 2024: An Odyssey of Career Advancement and Innovation”. After what feels like a lifetime, the ultimate tech celebration is finally here! Experience thrilling battles, career advices, industrial talks, top-notch entertainment and delectable treats all in one place. From coding battles to mock interviews, we have curated surprises for everyone, ensuring an unforgettable experience.
                        </p>

                    </div>
                </div>
            </div>
        </motion.div>
    </>)
}