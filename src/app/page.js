'use client';
import Footer from "./components/Footer";
import HeroPage from "./components/HeroPage";
import Header from "./components/Header";
import PageWrapper from "./PageWrapper";
import Overview from "./components/Overview";
import Socials from "./components/Socials";

export default function Home() {
  return (<>
    <Header />
    <PageWrapper>
      <section className="w-screen relative h-full bg-[#1f1f1f] flex items-center justify-center flex-col" id="home">
        <HeroPage />
      </section>
      <Overview />
      <Socials />
    </PageWrapper>
    <Footer />
  </>
  );
}
