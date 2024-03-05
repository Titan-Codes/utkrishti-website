"use client";
import { motion, AnimatePresence, useScroll } from "framer-motion";

export default function PageWrapper({ children }) {
    return (<>
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: -15, }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ delay: 0.6 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    </>)
}