'use client';
import Image from "next/image";
import Head from 'next/head'
import Script from 'next/script'
import logo from "../../public/favicon.png"
import Link from 'next/link'
import { useState } from "react";
import Footer from "./components/Footer";
import star from '../../public/star.svg'
import linkedin from '../../public/linkedin.svg'
import instagram from '../../public/instagram.svg'
import twitter from '../../public/twitter.svg'
import line from '../../public/Line.svg'
import HeroPage from "./components/HeroPage";
import Header from "./components/Header";
import PageWrapper from "./PageWrapper";

export default function Home() {
  return (<>
    <Header />
    <PageWrapper>
      <section className="w-screen relative h-full bg-[#1f1f1f] flex items-center justify-center flex-col" id="home">
        <HeroPage />
      </section>
    </PageWrapper>
    <Footer />
  </>
  );
}
