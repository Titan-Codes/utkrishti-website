import { useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import boardwali from "../../../public/boardwali.jpg";
import standeewali from "../../../public/standeewali.jpg";
import canopy from "../../../public/canopy.jpg";
import bgflip from "../../../public/bgflip.jpg";
import bag from "../../../public/bag.jpg";
import mukul from "../../../public/mukul.jpg";

export default function Overview() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (<>
        <section id="overview" className="w-screen h-screen bg-[#000000] flex items-center justify-center">
            <motion.div
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress
                }}
                className="w-full h-full"
            >
                <div className="w-full h-full flex items-center justify-center flex-col py-4 lg:p-2">
                        <div className="heading flex items-center justify-start">
                            <h1 className="text-[4rem]">OVERVIEW</h1>
                        </div>
                    <div className="w-full h-full flex items-start justify-center flex-row py-2 lg:p-2">
                        <div className="grid md:grid-cols-2 gap-3 sm:grid-cols-1 lg:grid-cols-3">
                            <div className="rounded-lg border-4 border-[#921ae8] h-94">
                                <Image alt="" src={standeewali} className="h-full" />
                            </div>
                            <div className="rounded-lg border-4 border-[#921ae8] h-94">
                                <Image alt="" src={canopy} className="h-full" />
                            </div>
                            <div className="rounded-lg border-4 border-[#921ae8] h-94">
                                <Image alt="" src={boardwali} className="h-full" />
                            </div>
                            <div className="rounded-lg border-4 border-[#921ae8] h-94">
                                <Image alt="" src={bgflip} className="h-full" />
                            </div>
                            <div className="rounded-lg border-4 border-[#921ae8] h-94">
                                <Image alt="" src={bag} className="h-full" />
                            </div>
                            <div className="rounded-lg border-4 border-[#921ae8] h-94">
                                <Image alt="" src={mukul} className="h-full" />
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    </>)
}