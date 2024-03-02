"use client";
import { motion, AnimatePresence, useScroll } from "framer-motion";

export default function PageWrapper({ children }) {
    return (<>
        <AnimatePresence>
            <motion.div
            initial={{opacity: 0, y:15}}
            animate={{opacity: 1, y:0}}
            exit={{opacity:0, y:15}}
            transition={{delay:0.5}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    </>)
}