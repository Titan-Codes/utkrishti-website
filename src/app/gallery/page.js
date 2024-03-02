"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageWrapper from "../PageWrapper";
import {motion, AnimatePresence} from "framer-motion"

export default function Gallery(){
    return(<>
    <Header />
    <PageWrapper>
        <div className="text-[#921ae8]">Gallery</div>
    </PageWrapper>
    <Footer />
    </>)
}