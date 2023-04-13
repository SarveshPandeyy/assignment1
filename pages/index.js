import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Team from "@/components/Team";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between laptopMd:p-24 p-5">
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonial />
      <Contact />
    </main>
  );
}
