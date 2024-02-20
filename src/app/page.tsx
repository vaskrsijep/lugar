"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
    <div className="overflow-hidden bg-white w-full h-full px-10">
      <div className="lg:max-w-7xl mx-auto w-full relative">
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>
      </div>
    </div>
</>
  );
}
