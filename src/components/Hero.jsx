import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import introVideo from '../assets/about/Intro video.MP4';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={introVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/45 to-black/20" />

      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col justify-end items-start text-left w-full">
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          <h1 data-aos="fade-up" className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-lg">
            Hi, I'm Lynn <br /> <span className="text-transparent [-webkit-text-stroke:1.5px_white]">Full Stack Developer & AI Data Specialist</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md">
            Based in Nairobi, Kenya. I build fast, scalable web apps with React, TypeScript, Next.js and Node.js — with real-world M-Pesa and PayPal payments integration.
          </p>
          <div data-aos="fade-up" data-aos-delay="400" className="flex flex-row flex-wrap items-center gap-3 w-full">
            <a href="#projects" className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md">View My Work</a>
            <a href="https://wa.me/254796908826" target="_blank" rel="noopener noreferrer" className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md">Contact Me</a>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="800" className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
