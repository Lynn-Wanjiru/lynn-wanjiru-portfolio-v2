import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import introVideo from '../assets/about/Intro video.MP4';

const Hero = () => {
  const videoRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.muted = soundOn;
      video.volume = 0.8;
      await video.play();
      setSoundOn(!soundOn);
    } catch (error) {
      console.error('Unable to change video sound:', error);
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden bg-black">
      {/* Desktop: portrait video sits neatly on the right. Mobile: it fills the hero. */}
      <video
        ref={videoRef}
        className="absolute z-0 right-0 top-0 h-full w-full object-cover md:right-[4%] md:top-1/2 md:h-[88%] md:w-[42%] md:-translate-y-1/2 md:object-contain"
        src={introVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Lynn's portfolio introduction video"
      />

      {/* Dark gradient keeps the left-side text readable without hiding the video. */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/75 to-black/20 md:from-black md:via-black/80 md:to-transparent" />

      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-0 md:px-12 max-w-7xl mx-auto flex flex-col justify-end md:justify-center items-start text-left w-full">
        <div className="flex flex-col items-start text-left max-w-2xl w-full md:w-[58%]">
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

      {/* Browsers block autoplay with sound. This button lets visitors turn the video's original audio on after interacting. */}
      <button
        type="button"
        onClick={toggleSound}
        className="absolute bottom-6 right-6 z-30 px-4 py-2 rounded-full bg-black/55 border border-white/60 text-white text-xs md:text-sm font-semibold backdrop-blur-md hover:bg-black/75 transition-all duration-300"
        aria-label={soundOn ? 'Mute introduction video' : 'Turn on introduction video sound'}
      >
        {soundOn ? '🔊 Sound On' : '🔇 Sound Off'}
      </button>

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
